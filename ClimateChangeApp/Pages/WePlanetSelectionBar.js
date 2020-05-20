// 5/19/20
// author: file created by Ethan Shifrin (as a copy of Drew's file)
// purpose: used for development purposes to make the WePlanet selectionscrollbar
// source: see the following link for the basis
// https://codedaily.io/tutorials/9/Build-a-Map-with-Custom-Animated-Markers-and-Region-Focus-when-Content-is-Scrolled-in-React-Native

// ********* This file was originally a copy of WePlanet main
// ********* It was used to help develop the selection scroll bar for we planet
// ********* It is possibly helpful for reference, but this file can most likely be deleted soon

import React, { Component, useState } from 'react';
import {Image, Dimensions, StyleSheet, View, ActivityIndicator, Animated} from "react-native";
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

// *************** The following set up specifically used for developing the selection bar **************

const Images = [
  { uri: "https://i.imgur.com/sNam9iJ.jpg" },
  { uri: "https://i.imgur.com/N7rlQYt.jpg" },
  { uri: "https://i.imgur.com/UDrH0wm.jpg" },
  { uri: "https://i.imgur.com/Ka8kNST.jpg" }
]

const CARD_HEIGHT = hp("25%");
const CARD_WIDTH = CARD_HEIGHT - 50;

// const inputRange = [
//     (index - 1) * CARD_WIDTH,
//     index * CARD_WIDTH,
//     ((index + 1) * CARD_WIDTH),
//   ];

//   const scale = this.animation.interpolate({
//     inputRange,
//     outputRange: [1, 2.5, 1],
//     extrapolate: "clamp",
//   });

// *************** The above set up is for developing selection bar */

// starting location 
const startingLocation = {
    latitude: 18.50,
    longitude: 14.65,
    latitudeDelta: 85,
    longitudeDelta: 85,
}

class WePlanetSelectionBar extends React.Component {
    static navigationOptions = {
      title: ' ',
    }; 

    constructor(props) {
      super(props);
      this.state = {
            location: {
                latitude: 45.52220671242907,
                longitude: -122.6653281029795,
                latitudeDelta: 0.04864195044303443,
                longitudeDelta: 0.040142817690068,
            },
            hasMarkerBeenPressed: false,
            markersList: [ {
                coordinate: {
                  latitude: 45.524548,
                  longitude: -122.6749817,
                },
                title: "Best Place",
                description: "This is the best place in Portland",
                image: Images[0],
              },
              {
                coordinate: {
                  latitude: 45.524698,
                  longitude: -122.6655507,
                },
                title: "Second Best Place",
                description: "This is the second best place in Portland",
                image: Images[1],
              },
              {
                coordinate: {
                  latitude: 45.5230786,
                  longitude: -122.6701034,
                },
                title: "Third Best Place",
                description: "This is the third best place in Portland",
                image: Images[2],
              },
              {
                coordinate: {
                  latitude: 45.521016,
                  longitude: -122.6561917,
                },
                title: "Fourth Best Place",
                description: "This is the fourth best place in Portland",
                image: Images[3],
              }
            ],
            showLoadingSymbol: false,
          }
      // Initialize Firebase, if statement checks if its been initialized
      if (!firebase.apps.length) { firebase.initializeApp(FirebaseConfig.FirebaseConfigKeys); }
      // bind GlobeVideoModal function to this.
      this._onPressVideo = this._onPressVideo.bind(this);
    }

    
    //** need to move the contents of componentWillMount to the constructor to get code working! */

    // componentWillMount() {   
    //     this.index = 0;
    //     this.animation = new Animated.Value(0);
    // }

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
    _onPressVideo(name, videoFileName) { 
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

        const interpolations = this.state.markersList.map((marker, index) => {
            const inputRange = [
              (index - 1) * CARD_WIDTH,
              index * CARD_WIDTH,
              ((index + 1) * CARD_WIDTH),
            ];
            const scale = this.animation.interpolate({
              inputRange,
              outputRange: [1, 2.5, 1],
              extrapolate: "clamp",
            });
            const opacity = this.animation.interpolate({
              inputRange,
              outputRange: [0.35, 1, 0.35],
              extrapolate: "clamp",
            });
            return { scale, opacity };
          });


      return(
        <View style={styles.mainContainer}>
          <View style={styles.mapContainer}>
        
            <MapView 
                ref ={map => this.map = map}
                style={styles.mapStyle}
                mapType='satellite'
                customMapStyle={mapstyle}
                initialRegion={this.state.location}
                provider='google'
                // showsCompass = {true}
                // showsBuildings = {true}
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
                return (
                    <Marker
                      key={index}
                      coordinate={marker.coordinate}
                    //   onPress={() => this._onPressVideo(marker.name, marker.videoFileName)}
                    > 
                    <Animated.View style={[styles.markerWrap, opacityStyle]}>
                        <Animated.View style={[styles.ring, scaleStyle]} />
                        <View style={styles.marker} />
                        {/* <Animated.View style={{ width: 24, height: 24, backgroundColor: 'blue', borerRadiue: 12, position: "absolute"}} />
                        <View style={styles.marker} /> */}
                    </Animated.View>
                      {/* <Image source={require('../assets/marker.png')} style={{height: 35, width:35 }} /> */}
                    </Marker>
              );
                })}
              </MapView>
                <Animated.ScrollView
                    horizontal
                    scrollEventThrottle={1}
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={CARD_WIDTH}
                    onScroll={Animated.event(
                        [
                            {
                                nativeEvent: {
                                contentOffset: {
                                    x: this.animation,
                                },
                                },
                            },
                        ],
                        { useNativeDriver: true }
                    )}
                    style={styles.scrollView}
                    contentContainerStyle={styles.endPadding}>
                        {this.state.markersList.map((marker, index) => (
                            <View style={styles.card} key={index}>
                            <Image
                                source={marker.image}
                                style={styles.cardImage}
                                resizeMode="cover"
                            />
                            <View style={styles.textContent}>
                                <Text numberOfLines={1} style={styles.cardtitle}>{marker.title}</Text>
                                <Text numberOfLines={1} style={styles.cardDescription}>
                                {marker.description}
                                </Text>
                            </View>
                            </View>
                        ))}
                </Animated.ScrollView>
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
          <GlobeVideoModal ref={'globevideomodal'} parentObject = {this}> 
          </GlobeVideoModal>
        </View>
      )
    }
}

export default WePlanetSelectionBar

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
  // ***** the following are for selection bar development
  container: {
    flex: 1,
  },
  scrollView: {
    position: "absolute",
    bottom: 30,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: Dimensions.get('window').width - CARD_WIDTH,
  },
  card: {
    padding: 10,
    elevation: 2,
    backgroundColor: "#FFF",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: { x: 2, y: -2 },
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: "hidden",
  },
  cardImage: {
    flex: 3,
    width: "100%",
    height: "100%",
    alignSelf: "center",
  },
  textContent: {
    flex: 1,
  },
  cardtitle: {
    fontSize: 12,
    marginTop: 5,
    fontWeight: "bold",
  },
  cardDescription: {
    fontSize: 12,
    color: "#444",
  },
  markerWrap: {
    //   backgroundColor: 'blue',
    alignItems: "center",
    justifyContent: "center",
    // backgroundColor: "blue",
    height: 60,
    width: 60,
    marginBottom: 20,
  },
  marker: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: "rgba(130,4,150, 0.9)",
  },
  ring: {
    width: 24,
    height: 24,
    borderRadius: 12,
    // transform: [{ scale: 2.5 }],
    backgroundColor: "rgba(130,4,150, 0.3)",
    // paddingTop: 20,
    // marginTop: 40,
    // marginBottom: -12,
    // position: "absolute",
    // top: 10,
    // right: 10,
    borderWidth: 1,
    borderColor: "rgba(130,4,150, 0.5)",
  },
});


