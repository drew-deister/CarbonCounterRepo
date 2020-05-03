// Asaf

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

const INFO = INFORMATION["introScreens"][2];

export default class IntroPage extends Component {
  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
        <View style={styles.container}>

            <View style={{flex: 295, alignItems: 'center'}}>
                <View style={styles.imageContainer}>
                      <Image style={styles.clouds} source={require("../assets/Introduction.png")} />
                </View>
            </View>

            <View style={{flex: 270, justifyContent: 'center'}}>
                <Text style={styles.Text}>
                  {INFO["description"]}
                </Text>
            </View> 


            <View style={{flex: 200, justifyContent: 'center'}}>
                <AsafNextButton
                  onPress={() => this.props.navigation.navigate("Home")}
                  style={styles.buttonDesign}
                >
                    Let's Get Started
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
    alignItems: "center",
  },
  imageContainer: {
      marginTop: 25,
      alignItems: "center",
      height: wp("53%"), // ratio of height : width should be 
      width: wp("94%"),  //       wp("50%") : wp("90%") ish
  },
  Text: {
    color: "#73A388",
    fontSize: 18,
    fontWeight: "600",
    width: wp("82%"),
  },
  clouds: {
    height: "100%",
    width: "100%",
    marginLeft: 5,
  },
  surroundingButton: {
    paddingTop: 60
  }
});
