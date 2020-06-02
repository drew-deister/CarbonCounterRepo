// Asaf

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
import AsafNextButton from "../Components/AsafNextButton";
import InfoModal from "../Components/InfoModal";
import { Left } from "native-base";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

const INFO = INFORMATION["introScreens"][1];

export default class IntroPage extends Component {


  static navigationOptions = {
    // headerTitle: 'new title',
    headerShown: false
  }
  
  render() {

    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={{
                    flex: 295,
                    justifyContent: "flex-end", alignItems: "center"
                    }}>
              <Image style={{height: 200, width: 200}} source={require("../assets/CarbonXP_Logos/LeafLogo_2_Dark.png")}></Image>
          </View>

          <View style={{flex: 270, justifyContent: "center"}}>
               <Text style={styles.topText}
                    allowFontScaling={false}>{INFO["title"]}</Text>
              <Text style={styles.bottomText}
                    allowFontScaling={false}>
                  {INFO["description"]}
              </Text>
          </View>
      

          <View style={{flex: 200, justifyContent: "center"}}>
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
    backgroundColor: "#F6F8EF",
    alignItems: "center"
  },
  topText: {
    color: "#73A388",
    fontSize: 34,
    paddingBottom: 20,
    fontWeight: "bold",
    // backgroundColor: "blue"
  },
  bottomText: {
    color: "#73A388",
    textAlign: "left",
    fontWeight: "600",
    fontSize: 20,
    width: wp("82%") //300,
  },
});
