// Asaf

import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {
  ScrollView,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from "react-native";


export default class IntroPage extends Component {

  // constructor(props) {
  //   super(props);
  //   this.props.navigation.setOptions
  // }
  static navigationOptions = {
    title: 'new title'
  }

  // "main method"
  render() {
    //const { navigate } = this.props.navigation;
    return (
      <TouchableOpacity
        style={styles.container}
        onPress={() => this.props.navigation.navigate("IntroPage2")}
      >
        <Image style={styles.image} source={require("../assets/Logo.png")} />
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F6F8EF",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    backgroundColor: "transparent",
    height: 133.48,
    width: 147.19,
    resizeMode: "cover",
    alignItems: "center"
  }
});
