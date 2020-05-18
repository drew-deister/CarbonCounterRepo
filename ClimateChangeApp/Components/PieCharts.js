import React, { Component, useState } from 'react';
import {View, Dimensions} from "react-native";
import {
  PieChart,
} from 'react-native-chart-kit'

const chartConfig = {
  backgroundGradientFrom: "#1E2923",
  backgroundGradientFromOpacity: 0,
  backgroundGradientTo: "#08130D",
  backgroundGradientToOpacity: 0.5,
  color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
  strokeWidth: 2, // optional, default 3
  barPercentage: 0.5
};

class PieCharts extends React.PureComponent {

    render() {

        return (
          <View>
          <PieChart
            data={[
              {
                name: 'Housing',
                percent: 40,
                color: 'rgba(131, 167, 234, 1)',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'Transportation',
                percent: 25,
                color: '#7fffd4',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'Diet',
                percent: 15,
                color: 'red',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
              {
                name: 'Shopping',
                percent: 20,
                color: '#7fff00',
                legendFontColor: '#7F7F7F',
                legendFontSize: 12,
              },
            ]}
            width={Dimensions.get('window').width}
            height={220}
            chartConfig={chartConfig}
            accessor="percent"
            backgroundColor="transparent"
            paddingLeft="15"
          />
          </View>
        )
    }
}


export default PieCharts;
