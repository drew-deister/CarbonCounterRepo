import React, { Component, useState } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import MapView, {Marker} from 'react-native-maps';
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
//import { Video } from 'expo-av';
import { NextButton } from '../Components/NextButton';
//import { WebView } from 'react-native';
import { Map } from '../Components/Map';




const alps = 
  {
    latitude: 46.88,
    longitude: 9.65,
    latitudeDelta: 15,
    longitudeDelta: 15,
  }


  let markers = [
    {
      coordinate: {     latitude: 45.65,
        longitude: -78.90,}
    }
  ];

  

const mapstyle = require('../mapstyle.json');



/* const allLocations = [
  {
    name: "Germany",
    longitude: 51,
    latitude: 10.5,
  },
  {
    name: "France",
    longitude: 46.2,
    latitude: 2.2,
  },
  {
    name: "Italy",
    longitude: 41.8,
    latitude: 12.5,
  },
  {
    name: "Egypt",
    longitude: 26.82,
    latitude: 30.8,
  },
] */


class GeoVideo1 extends React.Component {
    static navigationOptions = {
      title: 'Around the World',
    }; 

    constructor(props) {
      super(props);
      this.state = {
        location: alps,
        markers: markers
        //locationsSeen: []
      }
      //console.log("locationsSeen:");
      //console.log(this.state.locationsSeen);
    }

    handleLocationChange = (newLocation) => {
      this.setState({ location: newLocation });
      //this.checkLocationsSeen;
      //console.log("location change:");
      //console.log(this.state.location);
      //console.log("locationsSeen:");
      //console.log(this.state.locationsSeen); 
    }; 

    /*checkLocationsSeen = () => {
      console.log("I gET HERE");
      var latMin = this.state.location.latitude - this.state.location.latitudeDelta;
      var latMax = this.state.location.latitude + this.state.location.latitudeDelta;
      var longMin = this.state.location.longitude - this.state.location.longitudeDelta;
      var longMax = this.state.location.longitude + this.state.location.longitudeDelta;
      console.log("latitude range:", latMin, latMax);
      console.log("longitude range:", longMin, longMax);
      var seenLocations = allLocations.filter(function (location) {
        var latSeen = location.latitude > latMin && location.latidue < latMax;
        var longSeen = location.longitude > longMin && location.longitude < longMax;
        return latSeen && longSeen;
      });
      this.setState({ locationsSeen: seenLocationds});
      console.log(this.state.locationsSeen); 
    }; */

    render () {
      return(
        <View style={styles.mainContainer}>
          <Text>Zoom to a region of the world you are curious about</Text>

          {/* <Map></Map> */}

          <View style={styles.mapContainer}>
            <MapView 
              
              style={styles.mapStyle}
              //annotations={markers}
              //mapType='satellite'
              customMapStyle={mapstyle}
              initialRegion={alps}
              //region={this.state.location}
              //onRegionChange={this.handleLocationChange}
              >
                                 {this.state.markers.map((marker, key)=> (
                    <Marker
                      key={key}
                      coordinate={marker.coordinate}
                    />
                  ))}
              </MapView>
          </View>
          <NextButton onPress= {() =>  
                    this.props.navigation.navigate('GeoVideo2')}>
                    Next
          </NextButton>
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
    //height: DEVICE_HEIGHT,
    //width: DEVICE_WIDTH,
    borderColor: 'black',
    borderWidth: 1
  },
  mapContainer: {
    //flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: 300, //Dimensions.get('window').width,
    height: 400, //Dimensions.get('window').height,
  }
});


