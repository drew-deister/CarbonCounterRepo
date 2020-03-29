import React, { Component, useState } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';


const ratio = {
    1: {aspectRatio: 100/12},
    2: {aspectRatio: 100/22},
    3: {aspectRatio: 100/32},
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
        aspectRatio: 100/ 12,
        color: 'white',
        fontSize: 19,
        fontWeight: '600',
        textAlignVertical: 'center',
        
    }
})