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



class InputQuestion extends React.Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style = {styles.text}>{this.props.data.zipCode}</Text>
        <TextInput 
           placeholder={this.props.data.zipCodePlaceholder}
           style={styles.questionInput}></TextInput>
      </View>
     
    )
  }
    
}

export { InputQuestion };


const styles = StyleSheet.create({
  text: {
    marginVertical: 8
  },
  view: {
    marginVertical: 8,
    flexDirection: 'column'
  },
  mainText: {
    // backgroundColor: 'white',
    padding: 10,
  },
  questionInput: {
    borderColor: 'green',
    borderWidth: 1,
    padding: 10
  }
});