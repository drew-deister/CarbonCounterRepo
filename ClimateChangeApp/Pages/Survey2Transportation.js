import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import SurveyCard from "../Components/SurveyCard";
import { QuestionCardTransportation } from "./QuestionCard2Transportation";
import INFORMATION from "../Utilities/text";
import HeaderRightArrow from "../Components/HeaderRightArrow";
import HeaderBackArrow from "../Components/HeaderBackArrow";
import HeaderLeafLogo from "../Components/HeaderLeafLogo";

const TRANSPORTATION_INFO =
  INFORMATION["carbonCounterScreens"]["transportation"];

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
    headerTitle: <HeaderLeafLogo tintColor="#73A388" />,
    headerStyle: { backgroundColor: "white", height: 45, borderBottomWidth: 0 },
    headerTintColor: "#73A388",
    headerRight: (
      <HeaderRightArrow
        tintColor="#73A388"
        onPress={() => console.log("Hello")}
      />
    ),
    headerBackImage: <HeaderBackArrow tintColor="#73A388" />,
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <SurveyCard
          title={Transportation.title}
          imageName={Transportation.title}
          style={{ backgroundColor: Transportation.backgroundColor }}
          navigation={this.props.navigation}
          infoArr={TRANSPORTATION_INFO["info"]}
          infoTypeArr={TRANSPORTATION_INFO["infoTypes"]}
          modalBackgroundColor={Transportation.secondary}
          modalTextColor={Transportation.backgroundColor}
          progress={.25}
        >
          <QuestionCardTransportation
            navigation={this.props.navigation}
            backgroundColor={Transportation.backgroundColor}
            secondaryColor={Transportation.secondary}
          />
        </SurveyCard>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewContainer: {
    flex: 1,
  },
  progressBar: {
    backgroundColor: "#FFFFFF",
    padding: "2%",
    paddingLeft: "3%",
    paddingRight: "3%",
    opacity: 0.7,
    flex: 0.1,
    justifyContent: "center",
    alignContent: "center",
  },
});
