import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';
import {QuestionCardDiet} from './QuestionCard3Diet';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import HeaderRightArrow from '../Components/HeaderRightArrow';
import HeaderBackArrow from '../Components/HeaderBackArrow';
import HeaderLeafLogo from '../Components/HeaderLeafLogo';

const DIET_INFO = INFORMATION["carbonCounterScreens"]["diet"];

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
        headerTitle: <HeaderLeafLogo tintColor='#73A388'/>,
        headerStyle: {backgroundColor: 'white', height: 45, borderBottomWidth: 0},
        headerTintColor: '#73A388',
        headerRight: <HeaderRightArrow  tintColor='#73A388'
                                        onPress={() => console.log("Hello")}/>,
        headerBackImage: <HeaderBackArrow tintColor='#73A388'/>
    };

    render() {

        return (
            <SurveyCard
                title={Diet.title}
                imageName={Diet.title}
                style={{backgroundColor: Diet.backgroundColor}}
                titleStyle={{color: Diet.secondary}}
                infoImageStyle={{tintColor: '#73A388'}}
                navigation = {this.props.navigation}
                infoArr={DIET_INFO["info"]}
                infoTypeArr={DIET_INFO["infoTypes"]}
                infoImageArr={DIET_INFO["infoImages"]}
                modalBackgroundColor = {Diet.backgroundColor}
                modalTextColor = {Diet.secondary}>

                    
                <QuestionCardDiet 
                    navigation = {this.props.navigation} 
                    backgroundColor={Diet.backgroundColor}
                    secondaryColor = {Diet.secondary}/>
            </SurveyCard>
            
        );
    }

}