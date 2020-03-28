// Drew Deister
// important notes
// 1) make sure to use push for navigation
// use wp and hp for layout if you need it 

// _______________HOUSING QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard1} from './QuestionCard1';

class Question1 extends React.Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: ' ',
    };

    

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Housing
                </Header>
                <Separator />
                <QuestionCard1 navigation = {this.props.navigation} data = {data}/>
            </View>
            
        )
    }
}

const data = {

    zipCode: 'Zip Code', 
    zipCodePlaceholder: 'Enter your zipcode',

    homeSize: 'How big is your home (in square feet)?',

    numPeople: 'How many people do you live with?',
    numPeoplePlaceholder: 'Enter a number',

    homeSizeMin: 0,
    homeSizeMax: 4000,

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