import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardShopping} from './QuestionCard4Shopping';
import INFORMATION from '../Utilities/text';
import HeaderRightArrow from '../Components/HeaderRightArrow';
import HeaderBackArrow from '../Components/HeaderBackArrow';
import HeaderLeafLogo from '../Components/HeaderLeafLogo';

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
        headerTitle: <HeaderLeafLogo tintColor='#2F5A8A'/>,
        headerStyle: {backgroundColor: 'white', height: 45, borderBottomWidth: 0},
        headerTintColor: '#2F5A8A',
        headerRight: <HeaderRightArrow  tintColor='#2F5A8A'
                                        onPress={() => console.log("Hello")}/>,
        headerBackImage: <HeaderBackArrow tintColor='#2F5A8A'/>
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