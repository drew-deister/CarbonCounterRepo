// Asaf

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";

import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
// import { NextButton } from '../Components/NextButton';
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
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate("IntroPage2")}
      >
        <Image style={styles.image} source={require("../assets/Logo.png")} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8EF",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#707070",
  },
  image: {
    backgroundColor: "transparent",
    height: 133.48,
    width: 147.19,
    resizeMode: "cover",
    alignItems: "center",
  },
});
