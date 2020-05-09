import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardShopping} from './QuestionCard4Shopping';
import INFORMATION from '../Utilities/text';

const SHOPPING_INFO = INFORMATION["carbonCounterScreens"]["shopping"]

const Shopping = {
    title: "Shopping",
    backgroundColor: '#9AD1F2'
}

export default class ShoppingSurvey extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: ' ',
    };

    render() {

        return (
            <SurveyCard
                title={Shopping.title}
                imageName={Shopping.title}
                style={{backgroundColor: Shopping.backgroundColor}}
                navigation = {this.props.navigation}
                infoArr={SHOPPING_INFO["info"]}
                infoTypeArr={SHOPPING_INFO["infoTypes"]}
                modalBackgroundColor = {Shopping.backgroundColor}
                modalTextColor = "white">
                    
                <QuestionCardShopping
                    navigation={this.props.navigation}
                    backgroundColor={Shopping.backgroundColor}/>
            </SurveyCard>
            
        );
    }

}