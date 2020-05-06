// Asaf

import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import { View, Text, StyleSheet } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

const INFO = INFORMATION["introScreens"][1];

export default class IntroPage extends Component {

  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={{
                    flex: 295,
                    justifyContent: "flex-end",
                    }}>
              <Text style={styles.topText}>{INFO["title"]}</Text>
          </View>

          <View style={{flex: 270, justifyContent: "center"}}>
              <Text style={styles.bottomText}>
                  {INFO["description"]}
              </Text>
          </View>
      

          <View style={{flex: 200, justifyContent: "center"}}>
              <AsafNextButton
                onPress={() => this.props.navigation.navigate("IntroPage3")}
              >
                  Next
              </AsafNextButton>
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
    fontWeight: "bold",
  },
  bottomText: {
    color: "#73A388",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 20,
    width: wp("82%") //300,
  },
});
