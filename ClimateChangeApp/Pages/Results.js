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
        zipCode: 0,
        numPeople: 0,
        squareFootage: 0,
        numMiles: 0,
        greenAmount: 0,
        summerChange: 0,
        mode: '',
        beefServings: 0,
        dairyServings: 0,
        shoppingFrequency: 0,
        articlesPerShop: 0,
      }
    }
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Results',    
    };

    componentDidMount() { // this is automatically called by the compiler
      this.fetchData().done() 
    }

    async fetchData() { // should probably add some error handling here 
      // housing
      const zipCode = JSON.parse(await SecureStore.getItemAsync("zipCode"))
      const numPeople = JSON.parse(await SecureStore.getItemAsync("numPeople"))
      const squareFootage = JSON.parse(await SecureStore.getItemAsync("squareFootage"))

      // transportation
      const numMiles = JSON.parse(await SecureStore.getItemAsync("numMiles"))
      const greenAmount = JSON.parse(await SecureStore.getItemAsync("greenAmount"))
      const summerChange = JSON.parse(await SecureStore.getItemAsync("summerChange"))
      const mode = JSON.parse(await SecureStore.getItemAsync("mode"))

      // diet
      const beefServings = JSON.parse(await SecureStore.getItemAsync("beefServings"))
      const dairyServings = JSON.parse(await SecureStore.getItemAsync("dairyServings"))

      // shopping
      const shoppingFrequency = JSON.parse(await SecureStore.getItemAsync("shoppingFrequency"))
      const articlesPerShop = JSON.parse(await SecureStore.getItemAsync("articlesPerShop"))

      // this not only changes the state but also 
      // rerenders the components in view
      this.setState({zipCode: zipCode, numPeople: numPeople, squareFootage: squareFootage, 
                     numMiles: numMiles, greenAmount: greenAmount, summerChange: summerChange, mode: mode,
                     beefServings: beefServings, dairyServings: dairyServings, 
                     shoppingFrequency: shoppingFrequency, articlesPerShop: articlesPerShop});
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