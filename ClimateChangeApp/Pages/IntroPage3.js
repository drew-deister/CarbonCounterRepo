// Asaf

import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";

export default class IntroPage extends Component {
  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <React.Fragment>
        <View style={styles.container}>
          <Image style={styles.clouds} source={require("../assets/Home.png")} />

          <Text style={styles.Text}>
            Use this platform to learn about your effect on the Earth, other
            country’s stand on climate change, and what you can do to help!
          </Text>
          <View style={styles.surroundingButton}>
            <AsafNextButton
              onPress={() => this.props.navigation.navigate("Home")}
              style={styles.buttonDesign}
            >
              Let's Get Started
            </AsafNextButton>
          </View>
        </View>
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    padding: 15,
    paddingTop: 150,
    backgroundColor: "#F6F8EF",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonDesign: {
    color: "#73A388",
    fontSize: 23,
    fontWeight: "600",
    margin: 30
  },
  Text: {
    color: "#73A388",
    fontSize: 27,
    fontWeight: "600",
    height: 170,
    width: 290
  },
  clouds: {
    backgroundColor: "transparent",
    height: 210,
    width: 300,
    resizeMode: "cover",
    alignItems: "center"
  },
  surroundingButton: {
    paddingTop: 60
  }
});
