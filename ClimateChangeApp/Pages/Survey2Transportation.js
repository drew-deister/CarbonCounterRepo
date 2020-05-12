import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardTransportation } from "./QuestionCard2Transportation";
import * as Progress from "react-native-progress";
import INFORMATION from '../Utilities/text';
import HeaderRightArrow from '../Components/HeaderRightArrow';
import HeaderBackArrow from '../Components/HeaderBackArrow';
import HeaderLeafLogo from '../Components/HeaderLeafLogo';

const TRANSPORTATION_INFO = INFORMATION["carbonCounterScreens"]["transportation"];


import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";

const Transportation = {
  title: "Transportation",
  backgroundColor: "#73A388",
  secondary: "#F0F5DF",
};

export default class TransportationSurvey extends Component {
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
                title={Transportation.title}
                imageName={Transportation.title}
                style={{backgroundColor: Transportation.backgroundColor}}
                navigation = {this.props.navigation}
                infoArr={TRANSPORTATION_INFO["info"]}
                infoTypeArr={TRANSPORTATION_INFO["infoTypes"]}
                modalBackgroundColor = {Transportation.secondary}
                modalTextColor = {Transportation.backgroundColor}
                >
                    
                <QuestionCardTransportation
                    navigation={this.props.navigation}
                    backgroundColor={Transportation.backgroundColor}
                    secondaryColor={Transportation.secondary}/>

           <View style={styles.progressBar}>
           <Progress.Bar
             progress={0.25}
             width={null}
             borderColor={"#73A388"}
             borderWidth={1}
             color={"#73A388"}
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
