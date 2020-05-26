// Written by Drew Deister

import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import AsafNextButton from "../Components/AsafNextButton";
import * as Progress from "react-native-progress";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import INFORMATION from '../Utilities/text.json';
import ParagraphView from '../Components/ParagraphView';

const INFO = INFORMATION["wePlanetScreens"]


export default class WePlanetIntroPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

          <View style={{ flex: 100,
                         justifyContent: "flex-end"}}>

              <Text style={styles.topText}>WePlanet and the COP</Text>
          </View>
          {/* {INFO["intro"][0]["question"]} */}

          <View style={{ flex: 465,
                               justifyContent: "flex-begin", width: wp("80%") }}>
              {/* <Text style={styles.bottomText}>
                  {INFO["intro"]["climateChangeConferenceBackground"]["buttonText"]}
              </Text> */}
              <ScrollView>
                  <ParagraphView
                    infoArr={INFO["intro"]["climateChangeConferenceBackground"]["info"]}
                    infoTypeArr={INFO["intro"]["climateChangeConferenceBackground"]["infoTypes"]}
                    textStyle={{color: "#73A388"}}
                />
              </ScrollView>
            
              
          </View>
          
          <View style={{ flex: 200,
                         justifyContent: "center"}}>
              <AsafNextButton
                onPress={() => this.props.navigation.navigate("WePlanet3")}
              >
            Continue
          </AsafNextButton>
        </View>
        <View style={styles.progressBarContainer}>
                    <Progress.Bar
                        progress={1/3}
                        width={wp("85%")}
                        borderColor={"#F0F5DF"}
                        borderWidth={2}
                        color={"#F0F5DF"}
                    />
          </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#F6F8EF",
    alignItems: "center"
  },
  topText: {
    color: "#73A388",
    fontSize: 28,
    marginBottom: 10,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: "bold",
    width: wp("82%"),
  },
  bottomText: {
    color: "#73A388",
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "600",
    fontSize: 18,
    width: wp("82%") //300,
  },
  surroundingButton: {
    paddingTop: 60
  },
  progressBarContainer: {
    height: wp('12%'),
    justifyContent: 'center',
    paddingHorizontal: wp("8%"),
    opacity: .8,
    backgroundColor: "#73A388"
}
});
