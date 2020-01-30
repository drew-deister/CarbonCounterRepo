import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import { NextButton } from '../Components/NextButton';
//import { WebView } from 'react-native';


class GeoVideo1 extends React.Component {
    static navigationOptions = {
      title: 'Around the World',
    };

    render () {
      return (
        <View>
          <Text>This screen will have a map</Text>
          <NextButton onPress= {() =>  
                    this.props.navigation.navigate('Question2')}>
                    Next
          </NextButton>
        </View>
      )
    }
}


export default GeoVideo1