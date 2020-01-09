import React from 'react';
import {StyleSheet, View} from 'react-native';

const Separator = () => {
  return (
    <View style={styles.separator}></View>
  )
}

var styles = StyleSheet.create({
  separator: {
    borderBottomColor: '#000000',
    width: '100%',
    borderBottomWidth: 1,
    marginVertical: 8
  },
});

export {Separator};