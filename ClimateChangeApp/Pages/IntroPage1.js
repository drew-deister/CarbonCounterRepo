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
import { InfoButton } from "../Components/InfoButton";
import ChangeLogo from '../Components/ChangeLogo';

// import { NextButton } from '../Components/NextButton';
// import {Button, Text, Card, Icon} from 'react-native-elements';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     listenOrientationChange, removeOrientationListener
// } from 'react-native-responsive-screen';

export default class IntroPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.props.navigation.setOptions
  // }
  static navigationOptions = {
      // headerTitle: 'new title',
      headerShown: false
  }

  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.container}
          onPress={() => this.props.navigation.navigate("IntroPage2")}
        >
          <Image style={styles.image} source={require("../assets/CarbonXP_Logos/CxpLogo_Dark.png")} />
        </TouchableOpacity>
        <View style={styles.container}>
          <ChangeLogo />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8EF",
    justifyContent: "center",
    alignItems: "center",
    // borderWidth: 1,
    // borderColor: "#707070",
  },
  image: {
    backgroundColor: "transparent",
    height: 200,//133.48,
    width: 200,//147.19,
    resizeMode: "cover",
    alignItems: "center",
  },
});
