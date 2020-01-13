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

// 1/13/2020: This file was merged manually with the Housing file. 

import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';

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
   
    render() {
        return(
          <View style={styles.housingContainer}>
              <InputQuestion style={styles.questionContainerRow}>{zipInfo}</InputQuestion>
              <InputQuestion style={styles.questionContainerColumn}>{sizeInfo}</InputQuestion>
              <InputQuestion style={styles.questionContainerColumn}>{peopleInfo}</InputQuestion>
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


// *********************** Housing Question information ************************* //
// The following information is passed as props to the Question component

  
class info {
  constructor(main, placeholder) {
    this.main = main;
    this.placeholder = placeholder;
  }
}

const housingQs = {
  zip: "enter your zipcode",
  size: "1600 sq ft",
  people: "3 total people"
};

const zipInfo = new info("Zipcode: ", housingQs.zip);
const sizeInfo = new info("How big is your house? ", housingQs.size);
const peopleInfo = new info("How many people do you live with? ", housingQs.people)
// _____________ End Housing Question Information section _______________ //


const styles = StyleSheet.create({
  // The housing screen currently holds the housingContainer (aka Housing component)
  // it will eventually hold the progress bar and potentially the navigation features
  housingScreen: { // don't think I need this
    paddingTop: 50,
    paddingHorizontal: 5,
    paddingBottom: 5,
    height: '100%',
  },

  // ethan code
  // Background color is used during development to help visualize the components
    // The Housing Container holds the Questions (aka Question components)
    housingContainer: {
      flexDirection: 'column',
      justifyContent: 'space-between',
      //alignItems: 'center',
      padding: 15,
      //backgroundColor: 'grey',
      height: '75%'
    },
    questionContainerRow: {
        //FIXME: How to inherit the style?? Only thing that changes between row+column is flexDirection
      flexDirection: "row",    
      padding: 10,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      //backgroundColor: 'blue',
      height: '20%'
    },
    questionContainerColumn: {
      flexDirection: "column",
      padding: 15,
      justifyContent: 'space-evenly',
      alignItems: 'center',
      height: '40%',
      //backgroundColor: 'orange'
    },
});

export default Question2;