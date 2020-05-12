import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardHousing } from "./QuestionCard1Housing";
import INFORMATION from "../Utilities/text.json"; // import JSON file
import * as Progress from "react-native-progress";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";
import HeaderRightArrow from '../Components/HeaderRightArrow';
import HeaderBackArrow from '../Components/HeaderBackArrow';
import HeaderLeafLogo from '../Components/HeaderLeafLogo';

const HOUSEHOLD_INFO = INFORMATION["carbonCounterScreens"]["household"];



const Household = {
  title: "Household",
  backgroundColor: "#FCCCC0",
  secondary: "#EB5B6D",
};

export default class HouseholdSurvey extends Component {
  constructor(props) {
    super(props);
  }

 

    
    static navigationOptions = { // this is the label in the middle of the nav bar
        headerTitle: <HeaderLeafLogo tintColor="#EB5B6D"/>,
        headerStyle: {backgroundColor: 'white', height: 45, borderBottomWidth: 0},
        headerTintColor: '#EB5B6D',
        headerRight: <HeaderRightArrow  tintColor='#EB5B6D'
                                        onPress={() => console.log("Hello")}/>,
        headerBackImage: <HeaderBackArrow tintColor='#EB5B6D'/>
    };

    render() {

        
        return (
            <SurveyCard
                ref={'survey'}
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
                    ref={"questionCard"}
                    navigation={this.props.navigation}
                    backgroundColor={Household.backgroundColor}
                    secondary={Household.secondary}
                    />
            <View style={styles.progressBar}>
          <Progress.Bar
            progress={0}
            width={null}
            borderColor={"#73A388"}
            borderWidth={1}
          />
        </View>
      </SurveyCard>
            
        );
    }

}     

const styles = StyleSheet.create({
  progressBar: {
    width: wp("100%"),
    //height: wp("100%"),
    backgroundColor: "#FFFFFF",
    padding: 50,
    opacity: 0.8,
    //borderRadius: 100,
  },
});
