// Question.js
// Author: Ethan Shifrin
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// parent files: This question component is built with the housing survey in mind (../Surveys/Housing.js)
// purpose: Display a single question and text input on a Carbon Counter survey screen.
//          For now, it is just used in the Housing component, but hopefully will be extended to other categories
//          note: author had difficulty implementing state, therefore state is not yet used
// To Do:
//    1. Implement state to keep track of user input


import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';


const Question = (props) => {

    // note: I had trouble implementing state.
    //       Everything before 'return' is not actually used
    const [enteredInput, setEnteredInput] = useState('');
    const [zipCollection, setZipCollection] = useState([]);
  
    const inputHandler = (enteredText) => {
      setEnteredInput(enteredText);
      listHandler();
      
    };
  
    const listHandler = () => {
      setZipCollection(currentZips => [...currentZips, enteredInput]);
    }
    // re-note: The above code is not actually used
  
    return (
      <View style={props.style}>
          <Text style={styles.mainText}>{props.children.main}</Text>
          <TextInput 
            placeholder={props.children.placeholder}
            style={styles.questionInput}
            onEndEditing={inputHandler}     // this line is not used due to difficulties manipulating state
          >
          </TextInput>
          <View>
            {/* Tried to display list output zipCollection but having trouble handling state. recieved the error:
            "Warning: Failed prop type: Invalid prop `children` supplied to `TextElement`, expected a ReactNode."
            {zipCollection.map((zip) => <Text key={zip}>{zip}</Text>)} */}
          </View>
          
      </View>
     
    );
  };

  export { Question };


const styles = StyleSheet.create({
  mainText: {
    backgroundColor: 'green',
    padding: 10,
    color: 'white'
  },
  questionInput: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 10
  }
});