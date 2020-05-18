// Lucas 
// adapted by drew 

import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const NextButton = (props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={[styles.buttonBody, props.style]}>
        <Text style={styles.buttonText}>{props.children}</Text>
        <Image style = {styles.image} source = {require('../assets/right-arrow.png')} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#0B7310',
    width: 100,
    height: 50,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginVertical: 8
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  },
  image: {
    marginLeft: 10,
    padding: 20,
    width: 5,
    height: 5,
  }
});

export {NextButton};