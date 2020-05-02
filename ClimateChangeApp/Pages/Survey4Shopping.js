import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardShopping} from './QuestionCard4Shopping';

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
                    
                <QuestionCardShopping
                    navigation={this.props.navigation}
                    backgroundColor={Shopping.backgroundColor}/>
            </SurveyCard>
            
        );
    }

}