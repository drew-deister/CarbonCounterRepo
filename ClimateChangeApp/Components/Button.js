// Lucas 

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const Button = (props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.buttonBody}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#00aeef',
    width: '100%',
    padding: 20,
    // bottom: '-25%',
    borderRadius: 8,
    marginVertical: 8,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});

export {Button};