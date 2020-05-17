// Drew Deister
// 2.26.2020

// see QuestionCard1 for more thorough documentation

// _______________DIET QUESTION CARD__________________



import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { InputQuestion } from '../Components/InputQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

const DIET_INFO = INFORMATION["carbonCounterScreens"]["diet"];

class QuestionCardDiet extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            beefServings: -1,
            dairyServings: -1,
            hasResultsBeenAccessed: "false",
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
        this.callbackFunction2 = this.callbackFunction2.bind(this);
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
            const beefServings = JSON.parse(await SecureStore.getItemAsync("beefServings"))
            const dairyServings = JSON.parse(await SecureStore.getItemAsync("dairyServings"))
            this.setState({beefServings: beefServings, dairyServings: dairyServings})
            this.refs.q1.changeText(beefServings)
            this.refs.q2.changeText(dairyServings)
        }
    }


    callbackFunction1(value) {
        this.setState({beefServings: value})
    }

    callbackFunction2(value) {
        this.setState({dairyServings: value})
    }


    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("beefServings", JSON.stringify(this.state.beefServings))
            SecureStore.setItemAsync("dairyServings", JSON.stringify(this.state.dairyServings))
            this.props.navigation.push('Shopping')
            }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        console.log("should be pushing")
        SecureStore.setItemAsync("beefServings", JSON.stringify(this.state.beefServings))
        SecureStore.setItemAsync("dairyServings", JSON.stringify(this.state.dairyServings))
        this.props.navigation.navigate('Shopping')
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    checkValid() { // do some sort of error checking here
      if (this.state.beefServings < 0)
      {
        alert ("Please enter the number of beef servings you consume.")
        return false;
      }
      if (isNaN(this.state.beefServings))
      {
        alert ("Please enter a number for the quantity of beef servings you consume.")
        return false;
      }
      if (this.state.dairyServings < 0)
      {
        alert ("Please enter the number of dairy servings you consume.")
        return false;
      }
      if (isNaN(this.state.dairyServings))
      {
        alert ("Please enter a number for the quantity of dairy servings you consume.")
        return false;
      }
      return true;
    }


    render() {
        var access = this.state.hasResultsBeenAccessed
        return(

                <View style = {styles.view}>
                    { // can move this where we want it
                        (access == "true") ?
                        <AsafNextButton
                                onPress= {() => this.saveAndGoBackToResults()}
                                style={{backgroundColor: this.props.secondaryColor, marginBottom: 0}}
                                textStyle={{color: "white"}}>

                                Back to results
                        </AsafNextButton>
                        : null // don't do anything
                    }
                    <InputQuestion
                        ref = {'q1'}
                        questionStyle={{color: this.props.secondaryColor}}
                        questionLines={2}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}
                        question = {DIET_INFO["questions"][0]}
                        placeholder = {DIET_INFO["placeholders"][0]}/>
                    <InputQuestion
                        ref = {'q2'}
                        questionStyle={{color: this.props.secondaryColor}}
                        questionLines={3}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction2}
                        question = {DIET_INFO["questions"][1]}
                        placeholder = {DIET_INFO["placeholders"][1]}/>

                    <AsafNextButton
                        onPress={() => this.saveAndPush()}
                        viewStyle={{marginTop: 16}}
                        textStyle={{color: this.props.secondaryColor}} >
                            Next
                    </AsafNextButton>

                </View>

        )
    }

}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center',
    }
})


export {QuestionCardDiet};
