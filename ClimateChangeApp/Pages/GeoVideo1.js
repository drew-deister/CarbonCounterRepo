import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import MapView from 'react-native-maps';
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
//import { Video } from 'expo-av';
import { NextButton } from '../Components/NextButton';
//import { WebView } from 'react-native';


var markers = [
  {
    latitude: 42.65,
    longitude: 87.90,
    title: 'Foo Place',
    subtitle: '1234 Foo Drive',
    animateDrop: true,
    hasLeftCallout: true,
  }
];

class GeoVideo1 extends React.Component {
    static navigationOptions = {
      title: 'Around the World',
    };

    render () {
      return(
        <View style={styles.mainContainer}>
          <Text>Zoom to a region of the world you are curious about</Text>
          <View style={styles.mapContainer}>
            <MapView 
              style={styles.mapStyle}
              annotations={markers}
              mapType='satellite'
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


