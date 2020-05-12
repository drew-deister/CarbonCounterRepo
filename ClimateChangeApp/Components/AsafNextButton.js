// Asaf's Button

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const AsafNextButton = (props) => {
  return (
    <View style={[styles.shadow, props.viewStyle]}>
      <TouchableOpacity
        onPress={props.onPress}
        style={[styles.buttonBody, props.style]}
      >
        <Text style={[styles.buttonText, props.textStyle]}>{props.children}</Text>
      </TouchableOpacity>
    </View>
  );
};

// this is good style
const styles = StyleSheet.create({
  shadow: {
    shadowOpacity: .2,
    shadowOffset: {width: 0, height: 1},
  },
  buttonBody: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: wp("50%"),
    height: 35,
    shadowColor: "#F0F0F0",
    backgroundColor: "white",
    marginTop: 10,
    marginBottom: 30,
    justifyContent: 'center',
    //shadowOpacity: 1,
  },
  buttonText: {
    color: "#73A388",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    textAlignVertical: "center"
  }
});

export { AsafNextButton };
