import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardHousing} from './QuestionCard1Housing';
import INFORMATION from '../Utilities/text.json'; // import JSON file

const HOUSEHOLD_INFO = INFORMATION["carbonCounterScreens"]["household"];



const Household = {
    title: "Household",
    backgroundColor: '#FCCCC0',
    secondary: '#EB5B6D'
}

function HeaderNext() {
    return (
        //this should be replaced with right facing arrow but did not receive from jenna
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/Logo.png")}
      />
    );
  }

export default class HouseholdSurvey extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        //title: 'hello',
        // headerRight: HeaderNext,
    };

    render() {

        return (
            <SurveyCard
                title={HOUSEHOLD_INFO["title"]}
                imageName={HOUSEHOLD_INFO["title"]}
                style={{backgroundColor: Household.backgroundColor}}
                navigation = {this.props.navigation}
                nextScreen='Transportation'
                infoArr={HOUSEHOLD_INFO["info"]}
                infoTypeArr={HOUSEHOLD_INFO["infoTypes"]}
                modalBackgroundColor = {Household.secondary}
                modalTextColor = "white">
                    
                <QuestionCardHousing
                    navigation={this.props.navigation}
                    backgroundColor={Household.backgroundColor}
                    secondary={Household.secondary}
                    />
            </SurveyCard>
            
        );
    }

}
