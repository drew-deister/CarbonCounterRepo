//FIle is Useless

import React, { Component, useState } from "react";
import {
  Modal,
  Text,
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

const InfoButton = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { width } = Dimensions.get("window");

  return (
    <View style={styles.viewstyle}>
      <TouchableOpacity onPress={() => setModalOpen(true)}>
        <Image
          style={styles.image}
          source={require("../assets/informationbutton.png")}
        />
      </TouchableOpacity>

      <Modal
        visible={modalOpen}
        style={styles.modalBody}
        position="center"
        backdrop={true}
      >
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
    justifyContent: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 0,
    shadowRadius: 10,
    width: wp("85%"),
    height: hp("60%"),
    backgroundColor: "#73A388",
  },
  image: {
    backgroundColor: "transparent",
    //flex: 1,
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
    backgroundColor: "blue",
  },
});

export { InfoButton };
