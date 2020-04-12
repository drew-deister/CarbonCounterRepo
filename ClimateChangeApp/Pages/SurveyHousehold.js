import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard1} from './QuestionCard1';

const Household = {
    title: "Household",
    backgroundColor: '#FCCCC0',
    secondary: '#EB5B6D'
}

function HeaderNext() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require("../assets/Logo.png")}
      />
    );
  }

export default class HouseHoldSurvey extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        //title: 'hello',
        headerRight: HeaderNext,
    };

    render() {

        return (
            <SurveyCard
                title={Household.title}
                imageName={Household.title}
                style={{backgroundColor: Household.backgroundColor}}
                navigation = {this.props.navigation}
                nextScreen='Transportation'>
                    
                <QuestionCard1
                    navigation={this.props.navigation}
                    data={data}
                    backgroundColor={Household.backgroundColor}
                    secondary={Household.secondary}/>
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
