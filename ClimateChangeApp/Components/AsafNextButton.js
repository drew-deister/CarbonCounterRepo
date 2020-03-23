// Asaf's Button

import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener
} from "react-native-responsive-screen";
import { shadow } from "react-native-paper";

const AsafNextButton = props => {
  return (
    <TouchableOpacity
      onPress={props.onPress}
      style={[styles.buttonBody, props.style]}
    >
      <Text style={styles.buttonText}>{props.children}</Text>
    </TouchableOpacity>
  );
};

// this is good style
const styles = StyleSheet.create({
  buttonBody: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: wp("50%"),
    shadowColor: "#F0F0F0",
    //margin around words
    borderBottomWidth: 5,
    borderColor: "white",
    borderTopWidth: 5
  },
  buttonText: {
    color: "#73A388",
    fontSize: 23,
    fontWeight: "600",
    textAlign: "center"
  }
});

export { AsafNextButton };
