import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardDiet} from './QuestionCard3Diet';
import INFORMATION from '../Utilities/text.json'; // import JSON file

const INFO = INFORMATION["carbonCounterScreens"]["household"];

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
        title: 'hello',
    };

    render() {

        return (
            <SurveyCard
                title={Diet.title}
                imageName={Diet.title}
                style={{backgroundColor: Diet.backgroundColor}}
                titleStyle={{color: Diet.secondary}}
                navigation = {this.props.navigation} >

                    
                <QuestionCardDiet 
                    navigation = {this.props.navigation} 
                    backgroundColor={Diet.backgroundColor}
                    secondaryColor = {Diet.secondary}/>
            </SurveyCard>
            
        );
    }

}