import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardShopping } from "./QuestionCard4Shopping";
import * as Progress from "react-native-progress";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";

const Shopping = {
  title: "Shopping",
  backgroundColor: "#9AD1F2",
};

export default class ShoppingSurvey extends Component {
  constructor(props) {
    super(props);
  }

  static navigationOptions = {
    // this is the label in the middle of the nav bar
    title: " ",
  };

  render() {
    return (
      <SurveyCard
        title={Shopping.title}
        imageName={Shopping.title}
        style={{ backgroundColor: Shopping.backgroundColor }}
        navigation={this.props.navigation}
      >
        <QuestionCardShopping
          navigation={this.props.navigation}
          backgroundColor={Shopping.backgroundColor}
        />

        <View style={styles.progressBar}>
          <Progress.Bar
            progress={0.75}
            width={null}
            borderColor={"#73A388"}
            borderWidth={1}
            color={"#73A388"}
          />
        </View>
      </SurveyCard>
    );
  }
}

const styles = StyleSheet.create({
  progressBar: {
    width: wp("100%"),
    //height: wp("100%"),
    backgroundColor: "#FFFFFF",
    padding: 50,
    opacity: 0.8,
    //borderRadius: 100,
  },
});
