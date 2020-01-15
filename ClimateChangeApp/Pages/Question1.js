// important notes
// 1) make sure to use push for navigation
// use wp and hp for layout 
// see Question_Lucas and Button for layout guides

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard} from '../Components/QuestionCard';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

class Question1 extends React.Component {
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Eating Habits',
    };

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Housing
                </Header>
                <Separator />
                <QuestionCard navigation = {this.props.navigation} data = {data} zipCodeStyle = {styles.zipCodeStyle}/>
            </View>
        )
    }
}

const data = {
    zipCode: 'Zip Code',
    zipCodePlaceholder: 'Enter your zipcode',
}


  
  
const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 0,
    },
});



export default Question1;