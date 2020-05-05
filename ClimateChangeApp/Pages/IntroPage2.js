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
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
} from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import InfoModal from "../Components/InfoModal";
import { Left } from "native-base";

export default class IntroPage extends Component {
  // "main method"

  // constructor(props) {
  //   super(props);
  //   this.onPressInfoButton = this.onPressInfoButton.bind(this);
  // }

  // onPressInfoButton() {
  //   this.refs.infoModal.showInfoModal();
  // }

  render() {
    return (
      <View style={styles.mainContainer}>
        <Text style={styles.topText}>What is CarbonXD?</Text>

        <TouchableOpacity
          style={styles.modalButtonContainer}
          onPress={() => this.refs.infoModal.showInfoModal()}
        >
          <Image
            style={styles.infoImage}
            source={require("../assets/informationbutton.png")}
          />
        </TouchableOpacity>

        <Text style={styles.bottomText}>
          CarbonXD is an educational app created to bring awareness to the
          importance of global internconnectedness of human activity and the
          environment.
        </Text>

        <AsafNextButton
          onPress={() => this.props.navigation.navigate("IntroPage3")}
          style={styles.buttonDesign}
        >
          Next
        </AsafNextButton>

        <InfoModal
          ref={"infoModal"}
          parentObject={this}
          style={StyleSheet.modalText}
        >
          Asaf Is a virgin
        </InfoModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: "#F6F8EF",
    width: "100%",
    height: "100%",
  },
  topText: {
    marginTop: 100,
    fontSize: 50,
    fontWeight: "bold",
    color: "#73A388",
    textAlign: "left",
    alignContent: "center",
  },
  modalButtonContainer: {
    width: "20%",
    height: "10%",
    backgroundColor: "yellow",
    alignItems: "center",
    margin: "15%",
  },
  infoImage: {
    height: 70,
    width: 70,
  },
  bottomText: {
    color: "#73A388",
    fontSize: 23,
    alignItems: "center",
    textAlign: "left",
  },
  buttonDesign: {},
});
