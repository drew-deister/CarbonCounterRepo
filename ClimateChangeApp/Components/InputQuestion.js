// Question.js
// Author: Ethan Shifrin
// Email: Ethan.Shifrin@Vanderbilt.edu
// Date: 12/19/19
// parent files: This question component is built with the housing survey in mind (../Surveys/Housing.js)
// purpose: Display a single question and text input on a Carbon Counter survey screen.
//          For now, it is just used in the Housing component, but hopefully will be extended to other categories
//          note: author had difficulty implementing state, therefore state is not yet used

import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import { TextInput } from 'react-native-gesture-handler';
import { QuestionText } from './QuestionText';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';


class InputQuestion extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      keyboardType: this.props.keyboardType,
      txt: "",
    }
  }

  sendData = (message) => { 
    this.setState({txt: message})
    this.props.parentCallBack(message); // call the function that was binded to QuestionCard and passed through props
  }

  // there may be a problem here will saving not sure 
  changeText(value) { // parent will call this to manually override 
    this.setState({txt: value});
  }


  render() {
    return (
      <View style={styles.view}>
        <QuestionText
            lines={this.props.questionLines}
            question={this.props.question}
            style={this.props.questionStyle}
        ></QuestionText>
        <TextInput 
          ref = {'textInput'}
          style={styles.questionInput}
          returnKeyType = {'done'}
          keyboardType = {this.state.keyboardType}
          placeholder={this.props.placeholder}
          value = {this.state.txt}
          placeholderTextColor = {'#898d91'}
          onChangeText={text => this.sendData(text)} // update parent state (QuestionCard)
          allowFontScaling={false}
          >
            
          
        </TextInput>
      </View>
    )
  }
}

export { InputQuestion };


const styles = StyleSheet.create({
  text: {
    width: wp('65%'),
    aspectRatio: 100/ 12,
    color: 'white',
    fontSize: 20,
    fontWeight: '600',
    textAlignVertical: 'center',
    
  },
  view: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 16,
  },
  questionInput: {
    backgroundColor: 'white',
    width: wp('74%'),
    height: 40.5,
    borderRadius: 20,
    padding: 10,
  }
});