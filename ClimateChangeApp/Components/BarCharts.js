import React, { Component, useState } from 'react';
import {StyleSheet, View, Dimensions} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import {
  BarChart,
} from 'react-native-chart-kit'

const chartConfig = {
    backgroundColor: '#1cc910',
    backgroundGradientFrom: '#eff3ff',
    backgroundGradientTo: '#efefef',
    decimalPlaces: 2,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    style: {
      borderRadius: 16,
    },};

class BarCharts extends React.PureComponent {

    render() {

        return (
          <View>
          <BarChart
            data={{
              labels: [
                'Housing',
                'Transportation',
                'Diet',
                'Shopping',
              ],
              datasets: [
                {
                  data: [45,
                    12,
                    34,
                    76]
                },
              ],
            }}
            width={Dimensions.get('window').width - 16}
            height={220}
            yAxisLabel={'%'}
            chartConfig={chartConfig}
            style={{
              marginVertical: 8,
              borderRadius: 16,
            }}
          />
          </View>
        )
    }
}


export default BarCharts;
