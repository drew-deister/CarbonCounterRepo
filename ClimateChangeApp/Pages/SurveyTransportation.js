import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard2} from './QuestionCard2';

const Household = {
    title: "Transportation",
    backgroundColor: '#73A388',
    secondary: '#F0F5DF',
}


export default class TransportationSurvey extends Component {

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
                    
                <QuestionCard2
                    navigation = {this.props.navigation}
                    data = {data}
                    secondaryColor = {Household.secondary}/>
            </SurveyCard>
            
        );
    }

}


//TRANSPORTATION DATA
const data = {
    numMiles: 'How many miles do you travel on a typical school day?', 
    
    greenAmount: 'How much of your daily travel to school is by a \'greener\' form of transportation?' ,

    transportationMode: 'What is closest to your main mode of transportation?',

    summerChange: 'How does your summer travel compare to your school year travel?'

}

