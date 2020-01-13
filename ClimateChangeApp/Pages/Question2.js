// Question2.js
// Author: Ethan Shifrin and Drew Deister
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// parent files: This Questions page is the first page of the Carbon Counter, accessed from the home page (../App.js)
// purpose: Display the Housing* survey, the first of the Carbon Counter survey page.
//          
// To Do:
//    1. Implement state to keep track of user input (see Question component)
//    2. Learn about inheritance to simplify styles (see Housing)
//    3. look into stack warning (seen when running the code: "Accessing view manager configs directly off UIManager via UIManager['getConstants']
//                                                             is no longer supported.
//                                                             Use UIManager.getViewManagerConfig('getConstants') instead"
//    4. Fill out page with title, progress bar, further navigation


import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Housing } from '../Components/Housing';

// import AsyncStorage from '@react-native-community/async-storage';


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
    
    // to do: figure out how to change the Question2 state whenever the housing 
    // component is changed,probably by binding
    render() {
        return(
          <View style={styles.housingScreen}>
            <Housing first={this.state.first} changeFirst={this.changeFirst.bind(this)} />
          </View>
        )
    }

    // should save data if there is anything to be saved
    // currently a problem with linkage 
    // saveData() {
    //   let user = 'John Doe';
    //   AsyncStorage.setItem('user', user);
    // }
}

const styles = StyleSheet.create({
  // The housing screen currently holds the housingContainer (aka Housing component)
  // it will eventually hold the progress bar and potentially the navigation features
  housingScreen: {
    paddingTop: 50,
    paddingHorizontal: 5,
    paddingBottom: 5,
    height: '100%',
    //backgroundColor: 'black'
  },
});

export default Question2;