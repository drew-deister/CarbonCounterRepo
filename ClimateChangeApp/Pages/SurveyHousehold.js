import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard1} from './QuestionCard1';

const Household = {
    title: "Household",
    backgroundColor: '#FCCCC0'
}

export default class HouseHoldSurvey extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: ' ',
    };

    render() {

        return (
            <SurveyCard
                title={Household.title}
                imageName={Household.title}
                style={{backgroundColor: Household.backgroundColor}} >
                    
                <QuestionCard1 navigation = {this.props.navigation} data = {data}/>
            </SurveyCard>
            
        );
    }

}

//HOUSEHOLD DATA
const data = {

    zipCode: 'Zip Code', 
    zipCodePlaceholder: 'Enter your zipcode',

    homeSize: 'House Size (square feet)?',

    numPeople: 'How many people do you live with?',
    numPeoplePlaceholder: 'Enter a number',

    homeSizeMin: 0,
    homeSizeMax: 4000,

}
