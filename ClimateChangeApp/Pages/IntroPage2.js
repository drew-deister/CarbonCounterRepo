// Asaf

import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import { View, Text, StyleSheet } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import { widthPercentageToDP } from "react-native-responsive-screen";
// import {Button, Text, Card, Icon} from 'react-native-elements';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     listenOrientationChange, removeOrientationListener
// } from 'react-native-responsive-screen';

const INFO = INFORMATION["introScreens"]["page2"];

export default class IntroPage extends Component {

  
  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>{INFO["title"]}</Text>

        <Text style={styles.bottonText}>
          {INFO["description"]}
          {/* Climate Cultivation is an educational app created to bring awareness
          to the importance of global interconnectedness of human activity and
          the environment. */}
        </Text>

        <View style={styles.surroundingButton}>
          <AsafNextButton
            onPress={() => this.props.navigation.navigate("IntroPage3")}
          >
            Next
          </AsafNextButton>
        </View>
      </View>
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
  topText: {
    color: "#73A388",
    fontSize: 34,
    fontWeight: "600",
    width: 300,
    height: 100,
  },
  bottonText: {
    color: "#73A388",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 23,
    width: 300,
    height: 230
  },
  surroundingButton: {
    paddingTop: 60
  }
});
