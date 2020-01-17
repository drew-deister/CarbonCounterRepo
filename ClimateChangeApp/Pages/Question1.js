// Drew Deister
// important notes
// 1) make sure to use push for navigation
// use wp and hp for layout if you need it 

// _______________HOUSING QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
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
                <QuestionCard navigation = {this.props.navigation} data = {data}/>
            </View>
        )
    }
}

const data = {

    zipCode: 'Zip Code', 
    zipCodePlaceholder: 'Enter your zipcode',

    homeSize: 'How big is your home (in square feet)?',
    homeSizePlaceholder: 'If you\'re not sure, estimate',

    numPeople: 'How many people do you live with?',
    numPeoplePlaceholder: 'Enter a number',

    homeSizeMin: 0,
    homeSizeMax: 1000,


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