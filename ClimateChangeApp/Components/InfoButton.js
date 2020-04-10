import React, { Component, useState } from "react";
import {
  Modal,
  Text,
  TouchableHighlight,
  View,
  Alert,
  Image,
} from "react-native";

import { StyleSheet, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const InfoButton = (props) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <View style={[styles.viewstyle]}>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Image
          style={styles.image}
          source={require("../assets/informationbutton.png")}
        />
      </TouchableOpacity>

      <Modal visible={modalOpen}>
        <TouchableOpacity onPress={() => setModalOpen(false)}>
          <Image
            style={styles.secondimage}
            source={require("../assets/informationbutton.png")}
          />
        </TouchableOpacity>

        <Text style={styles.textModal}> shiffrin is a virgin</Text>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBody: {
    // transparent={true:
    // backdrop={true:,
  },
  image: {
    backgroundColor: "transparent",
    //   flex: 1,
    height: 30,
    width: 30,
    resizeMode: "cover",
    alignItems: "center",
  },
  textModal: {
    alignItems: "center",
    color: "#73A388",
    fontSize: 50,
    fontWeight: "600",
    width: 300,
    height: 200,
    alignContent: "center",
  },
  secondimage: {
    height: 100,
    width: 100,
    alignItems: "center",
  },
  viewstyle: {
    width: 100,
    height: 100,
  },
});

export { InfoButton };
