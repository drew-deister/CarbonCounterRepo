// Drew Deister
// created 2/3/2020

// _______________TRANSPORTATION QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard2} from './QuestionCard2';

class Question2 extends React.Component {
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Travel Information',
    };

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Transportation
                </Header>
                <Separator/>
                <QuestionCard2 navigation = {this.props.navigation} data = {data}/>
            </View>
        )
    }
}

// TRANSPORTATION DATA
const data = {
    numMiles: 'How many miles do you travel on a typical school day?', 
    
    greenAmount: 'How much of your daily travel to school is by a \'greener\' form of transportation?' 

}
  
const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 0,
    },
});



export default Question2;