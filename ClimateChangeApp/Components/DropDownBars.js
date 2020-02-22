import React, { Component, useState } from 'react';
import {StyleSheet, View, Dimensions} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import DropdownMenu from 'react-native-dropdown-menu';

class DropDownBars extends React.PureComponent {

  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  render() {
    var data = [["Select Metric"],["Pounds of CO2 Burned"], ["Solar Panel Equivalence"], ["Human Equivalence"], ["Temp Rise in 50 Years"]];
    //var data = [["Select Metric"],["Pounds of CO2 Burned"], ["Solar Panel Equivalence"], ["Human Equivalence"], ["Temp Rise in 50 Years"]];
    return (
      <View style={{flex: 1}}>
        <View style={{height: 64}} />
        <DropdownMenu
          style={{flex: 1}}
          bgColor={'black'}
          tintColor={'white'}
          activityTintColor={'green'}
          // arrowImg={}
          // checkImage={}
          optionTextStyle={{color: '#333333'}}
          titleStyle={{color: '#333333'}}
          maxHeight={300}
          handler={(selection, row) => this.setState({text: data[selction][row]})}
          data={data}
        >

          <View style={{flex: 1}}>
            <Text>
              {this.state.text} is the best language in the world
            </Text>
          </View>

        </DropdownMenu>
      </View>
    );
  }

}
export default DropDownBars;
