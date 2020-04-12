// originally created by Lucas
// adapted by Drew 
import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';

const HomeScreenActivityButton = (props) => {
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
    backgroundColor: 'blue',//'#73A388',//#0B7310',//'white',
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
    marginRight: 8,
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});

export {HomeScreenActivityButton};