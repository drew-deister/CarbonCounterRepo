// Question2.js
// Author: Ethan Shifrin and Drew Deister
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// parent files: This Questions page is the first page of the Carbon Counter, accessed from the home page (../App.js)
// purpose: Display the _____* survey, the first of the Carbon Counter survey page.

// 1/13/2020: This file was merged manually with the Housing file. 

// _________________This is dummy file__________________

import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';



class Question2 extends React.Component {
    constructor(props) {
      super(props); // this line is very important 
      this.state = {
        first: 0 // give it a default value 
      };
    }

    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Housing',
    };


    changeFirst(newValue) {
      this.setState({
        first: newValue,
      });
    }
   
    render() {
        return(
          <View >
              
          </View>
        )
    }

}




export default Question2;