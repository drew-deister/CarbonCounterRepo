// helpful video for modal: https://www.youtube.com/watch?v=Gu4rJFIiA6U
// Use @react-native-firebase node_module
// Note, when looking up documentation, look under Web apps.
// Helpful firebase links:
// https://firebase.google.com/docs/storage/web/download-files
// https://www.youtube.com/watch?v=_GOI7h9ojr8
// EXTREMELY helpful link for Animated and selection scroll bar:
// https://codedaily.io/tutorials/9/Build-a-Map-with-Custom-Animated-Markers-and-Region-Focus-when-Content-is-Scrolled-in-React-Native
import React, { Component, useState } from 'react';
import {Image, Dimensions, StyleSheet, View, ActivityIndicator, Animated, Slider} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import {Text} from 'react-native-elements';
import GlobeVideoModal from '../Components/GlobeVideoModal'; 
import FirebaseConfig from '../Utilities/FirebaseConfig';


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Require statements are equivalent to import statements
// NOTE: Update expo if you run into problems with firebase. 
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/storage");
require("firebase/firestore");

const mapstyle = require('../mapstyle.json');

// For the selection scroll bar
const CARD_HEIGHT = 30;
const CARD_WIDTH = wp("80%");

// starting location 
const startingLocation = {
  // can/should be updated to italy or so
    latitude: 9.08,
    longitude: 7.4,
    latitudeDelta: 85,
    longitudeDelta: 85,
}

class GeoVideo1 extends React.Component {
    static navigationOptions = {
      title: ' ',
    }; 

    constructor(props) {
      super(props);
      this.state = {
        location: startingLocation,
        hasMarkerBeenPressed: false,
        markersList: [],
        showLoadingSymbol: true,
        sliderValue: 1
      }
      // Initialize Firebase, if statement checks if its been initialized
      if (!firebase.apps.length) { firebase.initializeApp(FirebaseConfig.FirebaseConfigKeys); }
      // bind GlobeVideoModal function to this.
      this._onPressVideo = this._onPressVideo.bind(this);
      this.index = 0;
      this.animation = new Animated.Value(0);
    }


    componentDidMount() {   
      // fetch markers, and when done, hide the loading component
      this.fetchMarkers().then((value) => {
        this.setState({showLoadingSymbol: false})
      })
      //******** to avoid maxing out on firebase, the following can be used as
      //         markers, without video functionality */
      // const markers = [
      //   {
      //     name: "Nigeria",
      //     coordinates: {
      //       latitude: 9.08,
      //       longitude: 7.4
      //     },
      //   },
      //   {
      //     name: "Netherlands",
      //     coordinates: {
      //       latitude: 52.37,
      //       longitude: 4.89
      //     },
      //   },
      //   {
      //     name: "Turkey",
      //     coordinates: {
      //       latitude: 39.93,
      //       longitude: 32.86
      //     },
      //   },
      //   {
      //     name: "Madagascar",
      //     coordinates: {
      //       latitude: -18.88,
      //       longitude: 47.61
      //     },
      //   },
      //   {
      //     name: "Germany",
      //     coordinates: {
      //       latitude: 52.5,
      //       longitude: 13.41
      //     },
      //   }
      // ];
      // this.setState({markersList: markers})

      // *********** the above^ commented lines of code can be used as markers 
      //              during development to avoid overuse of firebase reads

      // zooms to the region of the map based on selection
      this.animation.addListener(({ value }) => {
        let index = Math.floor(value / (CARD_HEIGHT+10) + 0.3); // animate 30% away from landing on the next item
        if (index >= this.state.markersList.length) {
          index = this.state.markersList.length - 1;
        }
        if (index <= 0) {
          index = 0;
        }
        clearTimeout(this.regionTimeout);
        this.regionTimeout = setTimeout(() => {
          if (this.index !== index) {
            this.index = index;
            const { coordinates } = this.state.markersList[index];
            this.map.animateToRegion(
              {
                ...coordinates,
                latitudeDelta: 30, //this.state.location.latitudeDelta,
                longitudeDelta: 30, //this.state.location.longitudeDelta,
              },
              350
            );
          }
        }, 10);
      });
    }

    // this sets this.state.markersList. _onPressVideo finds the download URLS separately.
    async fetchMarkers() {
      var firestoreRef = firebase.firestore();
      // for some reason you have to return this promise even though you won't use it
      // cf https://stackoverflow.com/questions/50047445/how-to-evaluate-firestore-query-before-executing-the-next-lline
      return firestoreRef.collection("Markers").get().then((querySnapshot) => {
        const MARKERS = [];
        querySnapshot.forEach((doc) => {
            // doc.data() is never undefined for query doc snapshots
            MARKERS.push({
              name: doc.id,
              coordinates: {
                latitude: doc.data().latitude,
                longitude: doc.data().longitude,
              },
              videoFileName: doc.data().videoFileName,
            });
            this.setState({markersList: MARKERS});
        });
      }).catch(error => {
        console.log(error);
        Alert.alert("There was a problem loading the map.")
        this.setState({showLoadingSymbol: false}) // no point in showing this anymore
      }) 
    }

    handleLocationChange = (newLocation) => {
      this.setState({ location: newLocation });
    }; 

    // retrieve download url and display in modal
    _onPressVideo(name, videoFileName, index) { 
      // scrolls the scroll bar if the user presses on a marker
      this.selectionScroll.getNode().scrollTo({y: index * (CARD_HEIGHT + 10), animated: true})
      this.setState({hasMarkerBeenPressed: true})

      var storageRef = firebase.storage().ref().child('CarbonXP_Storage/' + name);
      var videoRef = storageRef.child(videoFileName);
      videoRef.getDownloadURL().then((url) => {
        this.refs.globevideomodal.showGlobeVideoModal(url, name); 
      });
    }

    // NOTE: The position of the GlobeVideoModal does not matter, as long as it is in the hierarchy. 
    // The _onPressVideo function for the marker calls it with the appropriate params. 
    render () {

      // interpolations are a feature of react animated.
      // see these two links:
      //      The code is based from: https://codedaily.io/tutorials/9/Build-a-Map-with-Custom-Animated-Markers-and-Region-Focus-when-Content-is-Scrolled-in-React-Native
      //      A better explanation of interpolate() is found: https://reactnative.dev/docs/animations#interpolation
      const interpolations = this.state.markersList.map((marker, index) => {
        const inputRange = [
          (index - 1) * (CARD_HEIGHT + 10),
          index * (CARD_HEIGHT + 10),
          ((index + 1) * (CARD_HEIGHT + 10)),
        ];
        const scale = this.animation.interpolate({
          inputRange,
          outputRange: [1, 1.5, 1],
          extrapolate: "clamp",
        });
        const opacity = this.animation.interpolate({
          inputRange,
          outputRange: [0.7, 1, 0.7],
          extrapolate: "clamp",
        });
        return { scale, opacity };
      });


      return(
        <View style={styles.mainContainer}>
          <View style={styles.mapContainer}>

            
              {/* **** this code is worth keeping until we fix initial marker bug
                        add the line: backgroundColor = "grey" to markerContainer
                        and scroll between the first marker and the rest to see a
                        difference in marker size relative to container size.

                        The following commented out code is an animated marker
                        based on a slider. comment out the mapView and uncomment
                        this code to see results
              
              <View style={styles.sliderContainer}>
              

                <Animated.View style={[styles.markerContainer, {backgroundColor: "grey", 
                transform: [{scale: this.animation}]}]}> 
                    <Animated.Image source={require('../assets/marker.png')}
                          style={{height: "100%", width: "100%", opacity: 1}}>

                    </Animated.Image>
                </Animated.View>
                  <Slider style={styles.slider}
                                    maximumTrackTintColor='red'
                                    minimumTrackTintColor="blue"
                                    trackStyle={styles.track}
                                    thumbStyle={[styles.thumb, {backgroundColor: "blue"}]}
                                    maximumValue={2.5}
                                    minimumValue={1}
                                    value = {this.state.sliderValue}
                                    step={.1} 
                                    onValueChange={value => {
                                      this.setState({ sliderValue: value })
                                    
                                    }}
                                    onSlidingComplete={() => {
                                      Animated.timing(this.animation, {
                                      toValue: this.state.sliderValue,
                                      // easing: Easing.back(),
                                      duration: 2000
                                    }).start();
                                      console.log(this.state.sliderValue)}}          
                                    />
              </View> 
              
              
             ****************** the above^ code is worth keeping until bug is figured out */}
          
            
            <MapView 
              ref ={map => this.map = map}
              style={styles.mapStyle}
              mapType='satellite'
              customMapStyle={mapstyle}
              initialRegion={this.state.location}
              provider='google'
              showsCompass = {true}
              showsBuildings = {true}
              >
                
              {this.state.markersList.map((marker, index)=> {
                const scaleStyle = {
                  transform: [
                    {
                      scale: interpolations[index].scale,
                    },
                  ],
                };
                const opacityStyle = {
                  opacity: interpolations[index].opacity,
                };
                return(
                    <Marker
                      key={index}
                      coordinate={marker.coordinates}
                      onPress={() => this._onPressVideo(marker.name, marker.videoFileName, index)}> 
                      {/* Animated.Components are practically identical to the base component with the addition of animation capabilities */}
                          <Animated.View style={[styles.markerContainer, scaleStyle]}>
                              <Animated.Image source={require('../assets/marker.png')} style={[styles.marker, opacityStyle]}></Animated.Image>
                          </Animated.View>
                    </Marker>
              )})}
              </MapView>

              {
                !(this.state.hasMarkerBeenPressed)
                ? <Text style={styles.overlayText}>Tap on a marker to hear about a part of the world you are curious about!</Text>
                : null
              }
              {
                (this.state.showLoadingSymbol)
                ? <ActivityIndicator style={styles.overlayLoadingSymbol} size="large" color="black"/>
                : null
              }
          </View>
          <View style={styles.selectionContainer}>
              
              <Animated.ScrollView
                    // horizontal
                    scrollEventThrottle={1}
                    showsVerticalScrollIndicator={false}
                    snapToInterval={CARD_HEIGHT + 10}
                    ref ={scrollView => this.selectionScroll = scrollView}
                    // essentially keeps track of animation state. see helpful links above
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                contentOffset: {
                                    y: this.animation,
                                },
                                },
                            },
                        ],
                        // { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}
                    >
                      {/* selection scroll bar cards */}
                        {this.state.markersList.map((marker, index) => (
                            <View style={styles.card} key={index}>
                              <Text style={styles.cardTitle}>{marker.name}</Text>
                            </View>
                        ))}
                        <View style={{height: CARD_HEIGHT*2 + 20}}></View>
                </Animated.ScrollView>
                <View style={styles.highlightLeft}/>
                <View style={styles.highlightRight}/>
          </View>
          <GlobeVideoModal ref={'globevideomodal'} parentObject = {this}> 
          </GlobeVideoModal>
        </View>
      )
    }
}

export default GeoVideo1

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 0,
    borderColor: 'black',
    borderWidth: 1
  },
  mapContainer: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  markerContainer: {
    height: 50,
    width: 36,
    // backgroundColor: 'grey',
    resizeMode: "contain",
    alignItems: "center",
    justifyContent: "center"

  },
  marker: {
    // marginTop: 15,
    // padding: 50,
    // margin: 50,
    // opacity: 1,
    height: "67%",
    width: "67%",
    position: "absolute",
    // bottom: 0,
    // right: 0
    // resizeMode: "contain",
    // transform: [{scale: 1.5}]
  },
  selectionContainer: {
      // position: "absolute",
      // bottom: 0,
      height: 120,
      width: wp("100%"),
      backgroundColor: "#73A388",
      alignItems: "center"
  },
  mapStyle: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height - 25, 
  }, 
  overlayText: {
    position: 'absolute',
    top: 50,
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
    padding: 5,
    textAlign: 'center'
  },
  overlayLoadingSymbol: {
    position: 'absolute',
    alignSelf: 'center',
  },
  highlightLeft: {
    width: wp("5%"),
    height: CARD_HEIGHT/6,
    backgroundColor: 'black',
    position: "absolute",
    left: wp("2.5%"),
    top: 17.5,
  },
  highlightRight: {
    width: wp("5%"),
    height: CARD_HEIGHT/6,
    position: "absolute",
    backgroundColor: "black",
    right: wp("2.5%"),
    top: 17.5
  },
  card: {
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    backgroundColor: "#F0F5DF",
    marginVertical: 5,
    alignItems: "center",
    justifyContent: "center",
    // marginHorizontal: 50,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    overflow: "hidden",
  },
  cardTitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: "bold",
  },
  scrollView: {
    // height: CARD_HEIGHT * 3 + 10 * 3,
    // position: "absolute",
    // top: 440,
    // left: 40,
    // right: 0,
    // paddingVertical: 10,
    // backgroundColor: 'blue'
  },
  endPadding: {
    // paddingBottom: Dimensions.get('window').height - CARD_WIDTH,
  },
  /**** for the slider */
  thumb: {
    marginTop: -15,
  },
  track: {
      height: 5,
  },
  sliderContainer: {
    marginTop: 5,
    marginBottom: 5,
    width: wp('74%'),
},
  /**** ^ for the slider to test marker animation */
  
});


