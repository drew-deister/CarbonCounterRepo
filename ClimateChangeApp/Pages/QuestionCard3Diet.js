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
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
        this.callbackFunction2 = this.callbackFunction2.bind(this);
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
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { // do some sort of error checking here
        return true;//(this.state.beefServings != -1 && this.state.beefServings != -1)
    }


    render() {
        return(

                <View style = {styles.view}>
                    <InputQuestion 
                        questionStyle={{color: this.props.secondaryColor}}
                        questionLines={2}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}                             
                        question = {DIET_INFO["questions"][0]} 
                        placeholder = {DIET_INFO["placeholders"][0]}/>
                    <InputQuestion 
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