// Asaf

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";
import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import { View, Text, StyleSheet } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import { InfoButton } from "../Components/InfoButton";

import { widthPercentageToDP } from "react-native-responsive-screen";
// import {Button, Text, Card, Icon} from 'react-native-elements';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     listenOrientationChange, removeOrientationListener
// } from 'react-native-responsive-screen';

export default class IntroPage extends Component {
  // "main method"
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>What is Climate Cultivation?</Text>

        <Text style={styles.bottonText}>
          Climate Cultivation is an educational app created to bring awareness
          to the importance of global interconnectedness of human activity and
          the environment.
        </Text>

        <InfoButton style={styles.info}></InfoButton>

        <View style={styles.surroundingButton}>
          <AsafNextButton
            onPress={() => this.props.navigation.navigate("IntroPage3")}
            style={styles.buttonDesign}
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
    padding: 15,
    paddingTop: 150,
    borderWidth: 1,
    backgroundColor: "#F6F8EF",
    borderColor: "#707070",
    justifyContent: "space-around",
    alignItems: "center",
  },
  buttonDesign: {
    color: "#73A388",
    fontSize: 23,
    fontWeight: "600",
    margin: 30,
  },
  topText: {
    color: "#73A388",
    fontSize: 50,
    fontWeight: "600",
    width: 300,
    height: 200,
    //width percentage and aspect ratio
  },
  bottonText: {
    color: "#73A388",
    alignItems: "center",
    fontWeight: "600",
    fontSize: 27,
    width: 300,
    height: 230,
  },
  surroundingButton: {
    paddingTop: 60,
  },
  info: {
    height: 5,
    width: 5,
    // resizeMode: "cover",
    // alignItems: "center",
    // justifyContent: "space-around",
    // alignItems: "center",
    // backgroundColor: "transparent",
  },
});
