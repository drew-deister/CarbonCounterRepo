// Question2.js
// Author: Ethan Shifrin and Drew Deister
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// this file is intended ONLY FOR EDUCATIONAL PURPOSES: ignore all names

// 1/13/2020: This file was merged manually with the Housing file. 


import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';

import * as SecureStore from 'expo-secure-store';

class Question2 extends React.Component {
    constructor() {
      super();
      this.state = {
        zipCode: 'dummyText', // this will be updated when the promise object is resolved
        numPeople: 'dummyText'
      }
    }
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Housing',    
    };

    componentDidMount() { // this is automatically called by the compiler
      this.fetchData().done() 
    }

    async fetchData() { // should probably add some error handling here 
      const zipCode = await SecureStore.getItemAsync("zipCode")  
      const numPeople = await SecureStore.getItemAsync("numPeople")
      this.setState({zipCode: zipCode, numPeople: numPeople}); // this not only changes the state but also 
      // rerenders the components in view
    }
    
    render() {
      return(
        <View >
            <Text>{this.state.zipCode}</Text>
            <Text>{this.state.numPeople}</Text>
        </View>
      )
    }

}


export default Question2;