import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from './Pages/Home';
import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import Question3 from './Pages/Question3';
import Question4 from './Pages/Question4';


// shirom code 
global.theme = {
  colors: {
      primary: '#0B7310',
  },
  Slider: {
      // maximumTrackTintColor: '#6C757D',
      minimumTrackTintColor: '#6C757D',
      thumbStyle: {
          backgroundColor: '#0B7310',
          width: 25,
          height: 25,
          borderRadius: 25 / 2,
      },
      thumbTouchSize: {
          width: 50,
          height: 50,
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


export default class App extends React.Component { // this is like the main method of the project
  render() {
      return (
          <AppContainer/>
      );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


// this is very important, use this as reference when you don't understand navigation
const AppNavigator = createStackNavigator(
    { // road map for the different parts of our navigation
      Home: {screen: Home},
      Question1: {screen: Question1},
      Question2: {screen: Question2},
      Question3: {screen: Question3},
      Question4: {screen: Question4},
    },
    {
        initialRouteName: 'Home',
        headerLayoutPreset: 'center',
        transitionConfig: () => ({
            screenInterpolator: StackViewStyleInterpolator.forHorizontal
        }),
        defaultNavigationOptions: { // these will be augmented by the navigation options of the respective screens
            headerStyle: {
                backgroundColor: '#0B7310',
            },
            headerTitleStyle: {
                color: 'white',
                fontWeight: '500',
            },
            headerTintColor: '#ffffff'
        },
    },
)

const AppContainer = createAppContainer(AppNavigator);
