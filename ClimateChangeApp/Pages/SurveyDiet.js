import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard3} from './QuestionCard3';

const Diet = {
    title: "Diet",
    backgroundColor: '#F0F5DF',
    secondary: '#73A388'
}

export default class DietSurvey extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: ' ',
    };

    render() {

        return (
            <SurveyCard
                title={Diet.title}
                imageName={Diet.title}
                style={{backgroundColor: Diet.backgroundColor}}
                titleStyle={{color: Diet.secondary}}>

                    
                <QuestionCard3 
                    navigation = {this.props.navigation} 
                    data = {data}
                    secondaryColor = {Diet.secondary}/>
            </SurveyCard>
            
        );
    }

}



// DIET DATA
const data = {

    beefServings: 'How many servings of beef do you have in a typical week?', 

    beefServingsPlaceholder: 'Enter a number...',
    
    dairyServings: 'How many servings of dairy do you have in a typical week?',

    dairyServingsPlaceholder: 'Enter a number...',

}