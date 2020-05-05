import Modal from "react-native-modalbox";
import React, { Component, useState } from "react";
import { Text, Platform } from "react-native";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
  }
  showInfoModal = () => {
    this.refs.myModal.open();
  };
  render() {
    return (
      <Modal
        visible={false}
        ref={"myModal"}
        style={styles.modalBody}
        position="center"
        backdrop={true}
      >
        <View style={styles.textContainer}>
          <Text style={styles.modalText}>{this.props.children} </Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBody: {
    justifyContent: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 0,
    shadowRadius: 10,
    width: wp("80%"),
    height: hp("40%"),
    backgroundColor: "#F6F8EF",
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  modalText: {
    // color: "#73A388",
    color: "black",
    fontSize: 23,
    width: "100%",
    textAlign: "left",
  },
});

export { InfoModal };
