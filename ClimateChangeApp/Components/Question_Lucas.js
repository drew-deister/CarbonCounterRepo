import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Question = (props) => {
  return (
    <View style={styles.questionBody}>
      <Text style={styles.questionText}>{props.children}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  questionText:{
    color: '#fffff0',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Georgia',
  },
  questionBody: {
    backgroundColor: '#a9a9a9',
    padding: 12,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
    width: '100%',
    marginVertical: 8,
  },
  });

export {Question};