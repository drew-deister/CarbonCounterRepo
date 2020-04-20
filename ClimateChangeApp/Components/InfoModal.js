import Modal from "react-native-modalbox";
import React, { Component, useState } from "react";
import {
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
  Dimensions,
  Platform,
} from "react-native";
import { StyleSheet, TouchableOpacity } from "react-native";
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
        <Text> shiffrin is a virgin</Text>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBody: {
    justifyContent: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 0,
    shadowRadius: 10,
    width: wp("70%"),
    height: hp("40%"),
    backgroundColor: "#73A388",
  },
});

export { InfoModal };
