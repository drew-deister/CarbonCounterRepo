import React, { Component, useState } from 'react';
import {StyleSheet} from "react-native";
import {Text} from 'react-native-elements';

const ratio = {
    1: {aspectRatio: 100/11},
    2: {aspectRatio: 100/20},
    3: {aspectRatio: 100/28},
}

class QuestionText extends React.Component {
    render() {
        return (
            <Text style = {[styles.text, ratio[this.props.lines], this.props.style]}
                  allowFontScaling={false}
                  >
                    {this.props.question}
            </Text>
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