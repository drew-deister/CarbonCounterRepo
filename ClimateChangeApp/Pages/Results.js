// Author: Drew Deister
// Email: andrew.z.deister@vanderbilt.edu
// Date: 12/26/19

// Results Page: to be edited by Lucas
// NOTE on Asynchronous Functions/Code: Note that componentDidMount() is called automatically by the compiler. 
// So theoretically, state will be re-rendered before the components the values will be fetched and the state will be 
// re-rended automatically. 

// NOTE on JSON: The values are saved with the .stringify() function, so you have to .parse() before you can
// perform calculations on them. 


import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';


import * as SecureStore from 'expo-secure-store';

class Results extends React.Component {
    constructor() {
      super();
      this.state = {
        zipCode: 0, // this will be updated when the promise object is resolved
        numPeople: 0,
        beefServings: 0,
        dairyServings: 0,
        carbonFootprint: 0,
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
      const beefServings = await SecureStore.getItemAsync("beefServings")  
      const dairyServings = await SecureStore.getItemAsync("dairyServings")
     
      // do some test calculations
      const carbonFootprint = JSON.parse(numPeople) * JSON.parse(beefServings); // need to parse before calculations

      // this not only changes the state but also 
      // rerenders the components in view
      this.setState({zipCode: JSON.parse(zipCode), 
                     numPeople: JSON.parse(numPeople), 
                     beefServings: JSON.parse(beefServings),
                     dairyServings: JSON.parse(dairyServings),
                     carbonFootprint: carbonFootprint});
    }
    
    render() {
      return(
        <View>
            <Text>{this.state.zipCode}</Text>
            <Text>{this.state.numPeople}</Text>
            <Text>{this.state.beefServings}</Text>
            <Text>{this.state.dairyServings}</Text>
        </View>
      )
    }

}


export default Results;