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
import INFORMATION from "../Utilities/text";
import HeaderRightArrow from "../Components/HeaderRightArrow";
import HeaderBackArrow from "../Components/HeaderBackArrow";
import HeaderLeafLogo from "../Components/HeaderLeafLogo";

const SHOPPING_INFO = INFORMATION["carbonCounterScreens"]["shopping"];

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
    headerTitle: <HeaderLeafLogo tintColor="#2F5A8A" />,
    headerStyle: { backgroundColor: "white", height: 45, borderBottomWidth: 0 },
    headerTintColor: "#2F5A8A",
    // headerRight: (
    //   <HeaderRightArrow
    //     tintColor="#2F5A8A"
    //     onPress={() => console.log("Hello")}
    //   />
    // ),
    headerBackImage: <HeaderBackArrow tintColor="#2F5A8A" />,
  };

  render() {
    return (
      <View style={styles.viewContainer}>
        <SurveyCard
          title={Shopping.title}
          imageName={Shopping.title}
          style={{
            backgroundColor: Shopping.backgroundColor,
          }}
          navigation={this.props.navigation}
          infoArr={SHOPPING_INFO["info"]}
          infoTypeArr={SHOPPING_INFO["infoTypes"]}
          modalBackgroundColor={Shopping.backgroundColor}
          modalTextColor="white"
          progress={.75}
        >
          <QuestionCardShopping
            navigation={this.props.navigation}
            backgroundColor={Shopping.backgroundColor}
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
