// Lucas 

import React from 'react';
import {Text, StyleSheet, TouchableOpacity} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

const CustomizableButton = (props) => {
  return (
    <TouchableOpacity
        onPress={props.onPress}
        style={styles.buttonBody}>
        <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  )
}

// this is good style 
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: '#00aeef',
    padding: 20,
    borderRadius: 8,
    marginVertical: 8,
    width: wp('80%')
  },
  buttonText:{
    color: 'white',
    fontSize: 18,
    fontWeight: '600',
  }
});

export {CustomizableButton};