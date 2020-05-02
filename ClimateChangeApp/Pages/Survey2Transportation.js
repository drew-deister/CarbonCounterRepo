import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardTransportation} from './QuestionCard2Transportation';

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
                    
                <QuestionCardTransportation
                    navigation={this.props.navigation}
                    backgroundColor={Transportation.backgroundColor}
                    secondaryColor={Transportation.secondary}/>
            </SurveyCard>
            
        );
    }

}


