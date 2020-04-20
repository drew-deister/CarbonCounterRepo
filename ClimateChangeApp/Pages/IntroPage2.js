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

import { widthPercentageToDP } from "react-native-responsive-screen";
// import {Button, Text, Card, Icon} from 'react-native-elements';
// import {
//   widthPercentageToDP as wp,
//   heightPercentageToDP as hp,
//   listenOrientationChange,
//   removeOrientationListener,
// } from "react-native-responsive-screen";

export default class IntroPage extends Component {
  // "main method"

  constructor(props) {
    super(props);
    this.onPressInfoButton = this.onPressInfoButton.bind(this);
  }

  onPressInfoButton() {
    this.refs.infoModal.showInfoModal();
  }

  render() {
    // const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>What is Climate Cultivation?</Text>

        <View style={styles.SurroundingOpacity}>
          <TouchableOpacity
            style={styles.modalContainer}
            onPress={() => this.onPressInfoButton()}
          >
            <Image
              style={styles.infoImage}
              source={require("../assets/informationbutton.png")}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.bottonText}>
          Climate Cultivation is an educational app created to bring awareness
          to the importance of global interconnectedness of human activity and
          the environment.
        </Text>
        {/* <View style={styles.modalContainer}>
          <Image
            onPress={() => this.onPressInfoButton()}
            style={styles.secondimage}
            source={require("../assets/informationbutton.png")}
          />
        </View> */}
        {/* <AsafNextButton
          style={styles.modalButton}
          onPress={() => this.onPressInfoButton()}
          style={styles.modalView}
        >
          <Image style={styles.infoImage} />
        </AsafNextButton> */}

        <View style={styles.surroundingButton}>
          <AsafNextButton
            onPress={() => this.props.navigation.navigate("IntroPage3")}
            style={styles.buttonDesign}
          >
            Next
          </AsafNextButton>
        </View>

        <InfoModal ref={"infoModal"} parentObject={this}></InfoModal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    // padding: 15,
    // paddingTop: 150,
    borderWidth: 1,
    backgroundColor: "#F6F8EF",
    borderColor: "#707070",
    // justifyContent: "space-around",
    // alignItems: "center",
  },
  buttonDesign: {
    color: "#73A388",
    fontSize: 23,
    fontWeight: "600",
    margin: 30,
  },
  topText: {
    paddingTop: 100,
    paddingLeft: 20,
    paddingRight: 20,
    color: "#73A388",
    fontSize: 50,
    fontWeight: "600",
    // width: 300,
    // height: 200,
    width: wp("100%"),
    height: hp("30%"),
    alignItems: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  bottonText: {
    color: "#73A388",
    alignItems: "center",
    fontWeight: "600",
    fontSize: 27,
    // width: 300,
    // height: 230,
    width: wp("70%"),
    height: hp("40%"),
  },
  surroundingButton: {
    paddingTop: 60,
    width: wp("35%"),
    height: hp("40%"),
    //alignContent: "center",
    alignItems: "center",
  },

  infoImage: {
    //padding: 60,
    // flex: 1,
    margin: 5,
    width: wp("10%"),
    height: hp("10%"),
    resizeMode: "stretch",
  },
  modalContainer: {
    flexDirection: "row",
    flex: 1,
    alignItems: "center",
    backgroundColor: "yellow",
    borderWidth: 0.5,
    borderColor: "#fff",
    width: wp("10%"),
    height: hp("10%"),
    borderRadius: 5,
    margin: 5,
  },
  SurroundingOpacity: {
    width: wp("10%"),
    height: hp("10%"),
    backgroundColor: "transparent",
    //padding: 50,
    alignContent: "center",
    alignItems: "center",
    paddingLeft: 100,
  },
});
