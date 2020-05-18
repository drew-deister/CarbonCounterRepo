// Asaf's Button

import React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class AsafNextButton extends React.Component {



  render() {
    return (
      <View style={[styles.shadow, this.props.viewStyle]}>
        <TouchableOpacity
          onPress={this.props.onPress}
          style={[styles.buttonBody, this.props.style]}
        >
          <Text style={[styles.buttonText, this.props.textStyle]}>{this.props.children}</Text>
        </TouchableOpacity>
      </View>
    );

  }
  
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
    marginTop: 8,
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


