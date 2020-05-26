// Written by Drew Deister

import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
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

          <View style={{ flex: 200,
                         justifyContent: "flex-end"}}>

              <Text style={styles.topText}>{INFO["title"]}</Text>
              <Text style={styles.bottomText}>Featuring exclusive content from the United Nations Framework Convention on Climate Change</Text>
          </View>
          {/* {INFO["intro"][0]["question"]} */}

          <View style={{ flex: 365,
                               justifyContent: "flex-begin", alignItems: "center", width: wp("80%") }}>
              
            
              <Image source={require("../assets/UNFCCC_Logo.png")}
                    style={{width: 220, height: 220, marginTop: hp("5%")}}></Image>
          </View>

          
          
          <View style={{ flex: 200,
                         justifyContent: "center"}}>
              <AsafNextButton
                onPress={() => this.props.navigation.navigate("WePlanet2")}
              >
            Continue
          </AsafNextButton>
        </View>
        <View style={styles.progressBarContainer}>
                    <Progress.Bar
                        progress={0}
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
    fontSize: 34,
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
