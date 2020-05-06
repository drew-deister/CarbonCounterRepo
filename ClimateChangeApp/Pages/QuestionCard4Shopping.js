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
            articlesPerShop: -1,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
        this.callbackFunction2 = this.callbackFunction2.bind(this);
    }

    callbackFunction1(value) {
        this.setState({shoppingFrequency: value})
    }

    callbackFunction2(value) {
        this.setState({articlesPerShop: value})
    }

    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("shoppingFrequency", JSON.stringify(this.state.shoppingFrequency))
            SecureStore.setItemAsync("articlesPerShop", JSON.stringify(this.state.articlesPerShop))
            this.props.navigation.push('Results')            
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { // do some sort of error checking here
        return true;//(this.state.articlesPerShop != -1 && this.state.shoppingFrequency != -1)
    }


    render() {
        return(
                <View style = {styles.view}>
                    <InputQuestion 
                        questionLines={3}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}                             
                        question = {SHOPPING_INFO["questions"][0]} 
                        placeholder = {SHOPPING_INFO["placeholders"][0]}/>

                    {/* LUCAS       -       Leah had us delete this question. 
                                            Once you see this, if you agree, delete the following commented out code*/ } 
                    {/* <InputQuestion 
                        questionLines={2}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction2}                             
                        question = {this.props.data.articlesPerShop} 
                        placeholder = {this.props.data.articlesPerShopPlaceholder}/> */}

                    <AsafNextButton
                        onPress={() => this.saveAndPush()}
                        viewStyle={{marginTop: 16}}
                        textStyle={{color: this.props.backgroundColor}} >
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


export {QuestionCardShopping};