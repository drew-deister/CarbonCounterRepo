// Drew Deister
// created 2/3/2020

// _______________DIET QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard3} from './QuestionCard3';

class Question3 extends React.Component {
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Diet Information',
    };

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Diet
                </Header>
                <Separator/>
                <QuestionCard3 navigation = {this.props.navigation} data = {data}/>
            </View>
        )
    }
}

// TRANSPORTATION DATA
const data = {

    beefServings: 'How many servings of beef do you have in a typical week?', 

    beefServingsPlaceholder: 'Enter a number...',
    
    dairyServings: 'How many servings of dairy do you have in a typical week?',

    dairyServingsPlaceholder: 'Enter a number...',

}
  
const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 0,
    },
});



export default Question3;