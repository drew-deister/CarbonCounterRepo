import React, { Component } from 'react';
import {StyleSheet, View, Picker} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {Button} from '../Components/Button';
import {Question} from '../Components/Question_Lucas';
import {Separator} from '../Components/Separator';
import PieCharts from '../Components/PieCharts';
import BarCharts from '../Components/BarCharts';



class Results extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Results',
    };
    constructor(props) {
       super(props);
       this.state = {
         state: 'Pounds of CO2 Burned'
       }
     }
    render() {
        return(
          <View>
            <View style={styles.container}>
                <Question>
                    These are your results
                </Question>
                <Separator />
            </View>
            <Picker
             style={{height: 100, width: 250}}
             selectedValue={this.state.language}
             onValueChange={(lang) => this.setState({language: lang})}>
             <Picker.Item label = 'Pounds of CO2 Burned' value = 'lbs' />
             <Picker.Item label = 'Solar Panel Equivalence' value = 'spe' />
             <Picker.Item label = 'Human Equivalence' value = 'he' />
             <Picker.Item label = 'Temp Rise in 50 Years' value = 'temp' />
           </Picker>
            <BarCharts />
            <PieCharts/>
          </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      //flex: 1,
      backgroundColor: '#00ffff',
      alignItems: 'center',
      justifyContent: 'center',
    //   justifyContent: 'space-around',
      padding: 20,
    },
  });

export default Results;
