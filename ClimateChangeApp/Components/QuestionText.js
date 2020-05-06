import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';


const ratio = {
    1: {aspectRatio: 100/11},
    2: {aspectRatio: 100/20},
    3: {aspectRatio: 100/28},
}

class QuestionText extends React.Component {

    //== 2 ? {aspectRatio: 100/22} : {aspectRatio: 100/12}

    render() {
        return (
            <Text style = {[styles.text, ratio[this.props.lines], this.props.style]}>{this.props.question}</Text>
    )
  }
}


export { QuestionText };



const styles = StyleSheet.create({
    text: {
        width: 270,
        aspectRatio: 100/ 11,
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        textAlignVertical: 'center',
        
    }
})