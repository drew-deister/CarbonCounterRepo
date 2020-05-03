// Drew

import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";


export default class MapIntroPage extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.topText}>Climate Change is a Global Issue.</Text>

        <Text style={styles.buttonText}>
          In order to effectively stop it, we all need to do our part. Thankfully, countries all around the world are actively 
          working to use their resources to help the issue. Use this map to see 
          how different countries are approaching it. 
        </Text>

        <View style={styles.surroundingButton}>
          <AsafNextButton
            onPress={() => this.props.navigation.navigate("GeoVideo1")}
            style={styles.buttonDesign}
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
    padding: 15,
    paddingTop: 100,
    borderWidth: 1,
    backgroundColor: "#F6F8EF",
    borderColor: "#707070",
    justifyContent: "space-around",
    alignItems: "center"
  },
  buttonDesign: {
    color: "#73A388",
    fontSize: 23,
    fontWeight: "600",
    margin: 30
  },
  topText: {
    color: "#73A388",
    fontSize: 40,
    fontWeight: "600",
    marginVertical: 20,
    marginHorizontal: 10,
  },
  buttonText: {
    color: "#73A388",
    alignItems: "center",
    fontWeight: "600",
    fontSize: 27,
    marginVertical: 10,
    marginHorizontal: 10, 
  },
  surroundingButton: {
    paddingTop: 60
  }
});
