// Housing.js
// Author: Ethan Shifrin
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// parent files: This Housing component is used on the Questions page (../Pages/Questions.js)
// purpose: Display the three chosen housing Questions* on a Carbon Counter survey screen.
//          Use the information stored in this file in the Info* class
//          note: author had difficulty implementing state, therefore state is not yet used
// To Do:
//    1. Implement state to keep track of user input (see Question component)
//    2. Learn about inheritance to simplify styles



import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Question } from '../components/Question';


const Housing = () => {
    return (
        <View style={styles.housingContainer}>
            <Question style={styles.questionContainerRow}>{zipInfo}</Question>
            <Question style={styles.questionContainerColumn}>{sizeInfo}</Question>
            <Question style={styles.questionContainerColumn}>{peopleInfo}</Question>

        </View>
    );
    
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

export { Housing };