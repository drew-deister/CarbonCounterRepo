import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import MapView from 'react-native-maps';
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
//import { Video } from 'expo-av';
import { NextButton } from '../Components/NextButton';
//import { WebView } from 'react-native';


var alps = 
  {
    latitude: 46.88,
    longitude: 9.65,
    latitudeDelta: 15,
    longitudeDelta: 15,
  }

const mapstyle = require('../mapstyle.json');

class GeoVideo1 extends React.Component {
    static navigationOptions = {
      title: 'Around the World',
    };

    /* constructor(props) {
      super(props);
      this.state = {
        region = {alps}
      }
    } */

    render () {
      return(
        <View style={styles.mainContainer}>
          <Text>Zoom to a region of the world you are curious about</Text>
          <View style={styles.mapContainer}>
            <MapView 
              
              style={styles.mapStyle}
              //annotations={markers}
              //mapType='satellite'
              customMapStyle={mapstyle}
              initialRegion={alps}
              />
          </View>
          <NextButton onPress= {() =>  
                    this.props.navigation.navigate('Question2')}>
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


