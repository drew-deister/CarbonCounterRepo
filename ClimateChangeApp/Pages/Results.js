import React, { Component } from 'react';
import {Button, StyleSheet, View, Picker} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {Question} from '../Components/Question_Lucas';
import {Separator} from '../Components/Separator';
import PieCharts from '../Components/PieCharts';
import BarCharts from '../Components/BarCharts';
import QuickPicker from 'quick-picker';
import Pick from '../Components/Pick';
import ZipCode from '../Components/ZipCode';


class Results extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Results',
    };


    render() {

        return(
          <View>
            <View style={styles.container}>
                <Question>
                    These are your results
                </Question>
                <Separator />
                <Text>{six}</Text>
            </View>
            //<Pick />
            <BarCharts />
            <PieCharts/>
          </View>
        )
    }
}

// const styles = StyleSheet.create({
//     container: {
//       //flex: 1,
//       backgroundColor: '#00ffff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     //   justifyContent: 'space-around',
//       padding: 20,
//     },
//   });

export default Results;
