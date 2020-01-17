import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


const Header = (props) => {
  return (
    <View style={styles.questionBody}>
      <Text style={styles.questionText}>{props.children}</Text>
    </View>
  )
}


// this is good style 
const styles = StyleSheet.create({
  questionText:{
    color: '#fffff0',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  questionBody: {
    backgroundColor: '#0B7310', // should be global.theme.colors.primary but couldn't get it to work
    padding: 12, // space between its border and the text within
    alignItems: 'center',
    marginTop: hp('5%'),
    marginBottom: 8,
    width: wp('80%'),
    borderRadius: 8,
  },
  });

export {Header};