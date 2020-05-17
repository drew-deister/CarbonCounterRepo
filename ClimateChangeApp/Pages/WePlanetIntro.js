// Drew

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';


export default class WePlanetIntroPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (

      <View style={styles.container}>

          <View style={{ flex: 200,
                         justifyContent: "flex-end"}}>

              <Text style={styles.topText}>Climate Change is a global issue.</Text>
          </View>


          <View style={{ flex: 365,
                               justifyContent: "flex-begin" }}>
              <Text style={styles.bottomText}>
                In order to effectively stop it, we all need to do our part. Thankfully, countries all around the world are actively 
                working to use their resources to help the issue. Use this map to see 
                how different countries are approaching it. 
              </Text>
          </View>
          
          <View style={{ flex: 200,
                         justifyContent: "center"}}>
              <AsafNextButton
                onPress={() => this.props.navigation.navigate("WePlanetMain")}
                // style={styles.buttonDesign}
              >
            Go to Map
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
    backgroundColor: "#F6F8EF",
    alignItems: "center"
  },
  topText: {
    color: "#73A388",
    fontSize: 34,
    paddingBottom: 20,
    textAlign: 'center',
    fontWeight: "bold",
    width: wp("82%"),
  },
  bottomText: {
    color: "#73A388",
    textAlign: "center",
    paddingTop: 20,
    fontWeight: "600",
    fontSize: 18,
    width: wp("82%") //300,
  },
  surroundingButton: {
    paddingTop: 60
  }
});
