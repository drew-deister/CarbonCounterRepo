import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from './Pages/Home';
import Results from './Pages/Results';
import WePlanetIntroPage1 from './Pages/WePlanetIntro1';
import WePlanetIntroPage2 from './Pages/WePlanetIntro2';
import WePlanetIntroPage3 from './Pages/WePlanetIntro3';
import WePlanetMain from './Pages/WePlanetMain';
// import WePlanetSelectionBar from './Pages/WePlanetSelectionBar';
import Credit from './Pages/Credit';
import IntroPage1 from "./Pages/IntroPage1";
import IntroPage2 from "./Pages/IntroPage2";
import IntroPage3 from "./Pages/IntroPage3";
import SurveyHousehold from './Pages/Survey1Household';
import SurveyTransportation from './Pages/Survey2Transportation';
import SurveyDiet from './Pages/Survey3Diet';
import SurveyShopping from './Pages/Survey4Shopping';
import CarbonCounterIntroPage from './Pages/CarbonCounterIntro';

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
      style={{ width: 200, height: 40 }}
      source={require("./assets/CarbonXP_Logos/NameLogo_Light.png")}
    />
  );
}

function backArrow() {
  return (
    <Image
        style={{ width: 30, height: 30, tintColor: '#F0F5DF'}}
        source={require("./assets/LeftBlueArrow.png")}/>
  );
}

// this is very important, use this as reference when you don't understand navigation
const AppNavigator = createStackNavigator(
  {
    // road map for the different parts of our navigation
    IntroPage1: { screen: IntroPage1 },
    IntroPage2: { screen: IntroPage2 },
    IntroPage3: { screen: IntroPage3 },
    Home: { screen: Home },
    CarbonCounter: {screen: CarbonCounterIntroPage},
    Household: {screen: SurveyHousehold},
    Transportation: {screen: SurveyTransportation},
    Diet: {screen: SurveyDiet},
    Shopping: {screen: SurveyShopping},
    Results: { screen: Results },
    WePlanet: {screen: WePlanetIntroPage1},
    WePlanet2: {screen: WePlanetIntroPage2},
    WePlanet3: {screen: WePlanetIntroPage3},
    WePlanetMain: {screen: WePlanetMain},
    Credit: {screen: Credit},
    IntroPage1: { screen: IntroPage1 },
    IntroPage2: { screen: IntroPage2 },
    IntroPage3: { screen: IntroPage3 },
    // WePlanetSelectionBar: { screen: WePlanetSelectionBar }
  },
  {
    cardStyle: {
        // shadowColor: 'black',
        // shadowOpacity: .5,
        // shadowRadius: 10,
    },
    initialRouteName: "IntroPage2", // For functioning app, use "IntroPage1"
    //headerMode: "None",
    headerLayoutPreset: "center",
    transitionConfig: () => ({
      screenInterpolator: StackViewStyleInterpolator.forHorizontal
    }),
    defaultNavigationOptions: {
      // these will be augmented by the navigation options of the respective screens
      // https://reactnavigation.org/docs/en/headers.html
      headerStyle: {
        backgroundColor: "#73A388",
        borderBottomWidth: 0,
      },
      headerBackTitle: " ",
      headerTitle: LogoTitle,
      headerTintColor: '#F0F5DF',
      headerBackImage: backArrow
    }
  }
);

const AppContainer = createAppContainer(AppNavigator);
