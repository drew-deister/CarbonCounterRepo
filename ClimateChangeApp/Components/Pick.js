import React, { Component, useState } from 'react';
import { View, Text, Picker, StyleSheet, TouchableOpacity } from 'react-native'
import QuickPicker from 'quick-picker';

export default class Pick extends React.Component {
  state = {
    item: {
      value: 'Pounds of CO2 Burned',
      label: 'salut',
    },
  };

  _onPressButton = () => {
    QuickPicker.open({
      onChange: item => this.setState({ item }),
      items: [
        {
          value: 'Pounds of CO2 Burned',
          label: 'lbs',
        },
        {
          value: 'Solar Panel Equivalence',
          label: 'spe',
        },
        {
          value: 'Human Equivalence',
          label: 'he',
        },
        {
          value: 'Temp Rise in 50 Years',
          label: 'temp',
        },
      ],
      item: this.state.item,
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this._onPressButton}>
          <Text>Click to choose your metric{this.state.item.label}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
