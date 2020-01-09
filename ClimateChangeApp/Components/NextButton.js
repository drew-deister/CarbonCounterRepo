// Lucas 
// adapted by drew 

import React from 'react';
import {Text, StyleSheet, TouchableOpacity, Image} from 'react-native';

const NextButton = (props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.buttonBody}>
        <Text style={styles.buttonText}>{props.children}</Text>
        <Image style = {styles.image} source = {require('../assets/right-arrow.png')} />
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#00aeef',
    width: '100%',
    padding: 20,
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
    // need to figure out how to resize the image 
    marginLeft: 10,
    padding: 20,
  }
});

export {NextButton};