import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCard4} from './QuestionCard4';

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
                navigation = {this.props.navigation} >
                    
                <QuestionCard4
                    navigation={this.props.navigation}
                    data={data}
                    backgroundColor={Shopping.backgroundColor}/>
            </SurveyCard>
            
        );
    }

}

// SHOPPING DATA
const data = {

    shoppingFrequency: 'How many times a month do you buy new clothes?',

    shoppingFrequencyPlaceholder: 'Enter a number...',
    
    articlesPerShop: 'How many articles of clothing per shopping experience?',   

    articlesPerShopPlaceholder: 'Enter a number...',

}