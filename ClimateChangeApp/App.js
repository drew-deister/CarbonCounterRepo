import React from 'react';
import {StyleSheet, Text, View } from 'react-native';
import {createAppContainer, SafeAreaView} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import {StackViewStyleInterpolator} from 'react-navigation-stack'
import Home from './Pages/Home';
import Question1 from './Pages/Question1';
import Question2 from './Pages/Question2';
import GeoVideo1 from './Pages/GeoVideo1';
import GeoVideo2 from './Pages/GeoVideo2';


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
      Question1: {screen: GeoVideo2},
      Question2: {screen: Question2}
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
