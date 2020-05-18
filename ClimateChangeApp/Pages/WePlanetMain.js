// helpful video for modal: https://www.youtube.com/watch?v=Gu4rJFIiA6U
// Use @react-native-firebase node_module
// Note, when looking up documentation, look under Web apps.
// Helpful firebase links:
// https://firebase.google.com/docs/storage/web/download-files
// https://www.youtube.com/watch?v=_GOI7h9ojr8
import React, { Component, useState } from 'react';
import {Image, Dimensions, StyleSheet, View, TouchableOpacity} from "react-native";
import MapView, {Callout, Marker} from 'react-native-maps';
import {Button, Text, Card, Icon} from 'react-native-elements';
import GlobeVideoModal from '../Components/GlobeVideoModal'; 
import FirebaseConfig from '../Utilities/FirebaseConfig';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
// Require statements are equivalent to import statements
// NOTE: Update expo if you run into problems with firebase. 
var firebase = require("firebase/app");

// Add the Firebase products that you want to use
require("firebase/storage");
require("firebase/firestore");

const mapstyle = require('../mapstyle.json');

// starting location 
const startingLocation = 
{
    latitude: 18.50,
    longitude: 14.65,
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
      }
      // Initialize Firebase, if statement checks if its been initialized
      if (!firebase.apps.length) { firebase.initializeApp(FirebaseConfig.FirebaseConfigKeys); }
      // bind GlobeVideoModal function to this.
      this._onPressVideo = this._onPressVideo.bind(this);
    }

    // this sets this.state.markersList. _onPressVideo finds the download URLS separately.
    // async componentWillMount() {     
    //   var firestoreRef = firebase.firestore();
    //   firestoreRef.collection("Markers").get().then((querySnapshot) => {
    //     const MARKERS = [];
    //     querySnapshot.forEach((doc) => {
    //         // doc.data() is never undefined for query doc snapshots
    //         MARKERS.push({
    //           name: doc.id,
    //           coordinates: {
    //             latitude: doc.data().latitude,
    //             longitude: doc.data().longitude,
    //           },
    //           videoFileName: doc.data().videoFileName,
    //         });
    //         this.setState({markersList: MARKERS});
    //     });
    //   });   
    // }


    // this sets this.state.markersList. _onPressVideo finds the download URLS separately.
    async componentDidMount() {     
      var firestoreRef = firebase.firestore();
      firestoreRef.collection("Markers").get().then((querySnapshot) => {
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
      });   
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
      return(
        <View style={styles.mainContainer}>
          <View style={styles.mapContainer}>
            <MapView 
              style={styles.mapStyle}
              mapType='satellite'
              customMapStyle={mapstyle}
              initialRegion={startingLocation}
              provider='google'
              showsCompass = {true}
              showsBuildings = {true}
              >
              {this.state.markersList.map((marker, key)=> (
                    <Marker
                      key={key}
                      coordinate={marker.coordinates}
                      onPress={() => this._onPressVideo(marker.name, marker.videoFileName)}> 
                      <Image source={require('../assets/marker.png')} style={{height: 35, width:35 }} />
                    </Marker>
              ))}
              </MapView>
              {
                !(this.state.hasMarkerBeenPressed)
                ? <Text style={styles.overlay}>Tap on a marker to hear about a part of the world you are curious about!</Text>
                : null
              }
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
  },
  mapStyle: {
    width: Dimensions.get('window').width, 
    height: Dimensions.get('window').height - 25, 
  }, 
  overlay: {
    position: 'absolute',
    top: 50,
    color: 'white',
    fontSize: 18,
    fontWeight: "600",
    padding: 5,
    textAlign: 'center'
  },
});


