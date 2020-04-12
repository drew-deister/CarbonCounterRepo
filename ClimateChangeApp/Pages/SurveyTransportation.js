import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard2} from './QuestionCard2';

const Transportation = {
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
                title={Transportation.title}
                imageName={Transportation.title}
                style={{backgroundColor: Transportation.backgroundColor}}
                navigation = {this.props.navigation} >
                    
                <QuestionCard2
                    navigation={this.props.navigation}
                    data={data}
                    backgroundColor={Transportation.backgroundColor}
                    secondaryColor={Transportation.secondary}/>
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

