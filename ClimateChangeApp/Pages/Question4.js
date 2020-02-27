// Drew Deister
// created 2/26/2020

// _______________SHOPPING QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard4} from './QuestionCard4';

class Question4 extends React.Component {
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Shopping Information',
    };

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Shopping
                </Header>
                <Separator/>
                <QuestionCard4 navigation = {this.props.navigation} data = {data}/>
            </View>
        )
    }
}

// SHOPPING DATA
const data = {

    shoppingFrequency: 'How many times a month do you buy new clothes?',

    shoppingFrequencyPlaceholder: 'Enter a number...',
    
    articlesPerShop: 'How many articles of clothing per shopping experience?',   

    articlesPerShopPlaceholder: 'Enter a number...',

}
  
const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 0,
    },
});



export default Question4;