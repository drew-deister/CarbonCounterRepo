import React, { Component } from "react";
import { ScrollView, View, StyleSheet, Image, Text } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardTransportation } from "./QuestionCard2Transportation";
import * as Progress from "react-native-progress";

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";

const Transportation = {
  title: "Transportation",
  backgroundColor: "#73A388",
  secondary: "#F0F5DF",
};

export default class TransportationSurvey extends Component {
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
        title={Transportation.title}
        imageName={Transportation.title}
        style={{ backgroundColor: Transportation.backgroundColor }}
        navigation={this.props.navigation}
      >
        <QuestionCardTransportation
          navigation={this.props.navigation}
          backgroundColor={Transportation.backgroundColor}
          secondaryColor={Transportation.secondary}
        />

        <View style={styles.progressBar}>
          <Progress.Bar
            progress={0.25}
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
