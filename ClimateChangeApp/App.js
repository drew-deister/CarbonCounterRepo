import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from './Pages/Home';
import Results from './Pages/Results';
import GeoVideo1 from './Pages/GeoVideo1';
import GeoVideo2 from './Pages/GeoVideo2';
import IntroPage1 from "./Pages/IntroPage1";
import IntroPage2 from "./Pages/IntroPage2";
import IntroPage3 from "./Pages/IntroPage3";
import TempPage from './Pages/TemporarySurveyPage';
import SurveyHousehold from './Pages/SurveyHousehold';
import SurveyTransportation from './Pages/SurveyTransportation';
import SurveyDiet from './Pages/SurveyDiet';
import SurveyShopping from './Pages/SurveyShopping';


// shirom code
global.theme = {
  colors: {
    primary: "#0B7310"
  },
  Slider: {
    // maximumTrackTintColor: '#6C757D',
    minimumTrackTintColor: "#6C757D",
    thumbStyle: {
      backgroundColor: "#0B7310",
      width: 25,
      height: 25,
      borderRadius: 25 / 2
    },
    thumbTouchSize: {
      width: 50,
      height: 50
    },
    trackStyle: {
      height: 10,
      borderRadius: 10 / 2
    }
  },
  Card: {
    containerStyle: {
      borderRadius: 3
    }
  }
};

export default class App extends React.Component {
  // this is like the main method of the project
  render() {
    return <AppContainer />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

function LogoTitle() {
  return (
    <Image
      style={{ width: 50, height: 50 }}
      source={require("./assets/Logo.png")}
    />
  );
}

// this is very important, use this as reference when you don't understand navigation
const AppNavigator = createStackNavigator(
  {
    // road map for the different parts of our navigation
    Home: { screen: Home, },
    TempPage: {screen: TempPage},
    Household: {screen: SurveyHousehold},
    Transportation: {screen: SurveyTransportation},
    Diet: {screen: SurveyDiet},
    Shopping: {screen: SurveyShopping},
    Results: { screen: Results },
    GeoVideo1: { screen: GeoVideo1 },
    GeoVideo2: { screen: GeoVideo2 },
    IntroPage1: { screen: IntroPage1 },
    IntroPage2: { screen: IntroPage2 },
    IntroPage3: { screen: IntroPage3 }
  },
  {
    initialRouteName: "IntroPage1", // For functioning app, use "IntroPage1"
    //headerMode: "None",
    headerLayoutPreset: "center",
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
    defaultNavigationOptions: {
      // these will be augmented by the navigation options of the respective screens
      // https://reactnavigation.org/docs/en/headers.html
      headerStyle: {
        backgroundColor: "white"
      },
      headerBackTitle: " ",
      headerTitle: LogoTitle,
      headerTintColor: "#73A388"
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
