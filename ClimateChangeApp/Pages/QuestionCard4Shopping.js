// Drew Deister
// 2.26.2020

// see QuestionCard1 for more thorough documentation

// _______________SHOPPING QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { InputQuestion } from '../Components/InputQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

const SHOPPING_INFO = INFORMATION["carbonCounterScreens"]["shopping"];


class QuestionCardShopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shoppingFrequency: -1,
            hasResultsBeenAccessed: "false",
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
    }

    componentDidMount() {
        this.fetchData().done()
        this.props.navigation.addListener('didFocus', () => { // runs every time the screen is seen
            // The screen is focused
            this.fetchData().done()
        });
    }

    async fetchData() {
        const results = JSON.parse(await SecureStore.getItemAsync("hasResultsBeenAccessed"))
        this.setState({hasResultsBeenAccessed: results})
        if (results == "true") { // change the children to what the user selected if the user has accessed Results
            const shoppingFrequency = JSON.parse(await SecureStore.getItemAsync("shoppingFrequency"))
            this.setState({shoppingFrequency: shoppingFrequency})
            this.refs.q1.changeText(shoppingFrequency)
        }
    }

    callbackFunction1(value) {
        this.setState({shoppingFrequency: value})
    }


    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("shoppingFrequency", JSON.stringify(this.state.shoppingFrequency))
            SecureStore.setItemAsync("articlesPerShop", JSON.stringify(this.state.articlesPerShop)) // dont need this
            this.props.navigation.navigate('Results')
            }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        SecureStore.setItemAsync("shoppingFrequency", JSON.stringify(this.state.shoppingFrequency))
        SecureStore.setItemAsync("articlesPerShop", JSON.stringify(this.state.articlesPerShop))
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    checkValid() { // do some sort of error checking here
      if (this.state.shoppingFrequency < 0)
      {
        alert ("Please enter your shopping frequency.")
        return false;
      }
      if (isNaN(this.state.shoppingFrequency))
      {
        alert ("Please enter a number for your shopping frequency.")
        return false;
      }
      return true
    }


    render() {
        var access = this.state.hasResultsBeenAccessed
        return(
                <View style = {styles.view}>

                    <InputQuestion
                        ref = {'q1'}
                        questionLines={3}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}
                        question = {SHOPPING_INFO["questions"][0]}
                        placeholder = {SHOPPING_INFO["placeholders"][0]}/>


                    { // can move this where we want it
                        (access == "true") ?
                        <AsafNextButton
                                onPress= {() => this.saveAndGoBackToResults()}
                                style={{backgroundColor: "#73A388", marginBottom: 0}}
                                textStyle={{color: "white"}}>

                                Back to results
                        </AsafNextButton>
                        :
                        <AsafNextButton
                        onPress={() => this.saveAndPush()}
                        viewStyle={{marginTop: 16}}
                        textStyle={{color: this.props.backgroundColor}} >
                            Next
                        </AsafNextButton>
                    }

                </View>
        )
    }

}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    }
})


export {QuestionCardShopping};
