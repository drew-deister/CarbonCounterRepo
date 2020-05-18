// Drew Deister
// 2.26.2020

// see QuestionCard1 for more thorough documentation

// _______________SHOPPING QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import * as SecureStore from 'expo-secure-store';
import { InputQuestion } from '../Components/InputQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file

const SHOPPING_INFO = INFORMATION["carbonCounterScreens"]["shopping"];


class QuestionCardShopping extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            shoppingFrequency: -1,
            hasResultsBeenAccessed: "false",
            hasShoppingBeenAccessed: "false",
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
        const thisPage = JSON.parse(await SecureStore.getItemAsync("hasShoppingBeenAccessed"))
        this.setState({hasResultsBeenAccessed: results, hasShoppingBeenAccessed: thisPage})
        if (results == "true" || thisPage == "true") { // change the children to what the user selected if the user has accessed Results
            const shoppingFrequency = JSON.parse(await SecureStore.getItemAsync("shoppingFrequency"))
            this.setState({shoppingFrequency: shoppingFrequency})
            this.refs.q1.changeText(shoppingFrequency)
        }
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
            SecureStore.setItemAsync("hasShoppingBeenAccessed", JSON.stringify("true"))
            this.props.navigation.navigate('Results')            
            } else {
            alert('Please answer all questions.')
        }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        SecureStore.setItemAsync("shoppingFrequency", JSON.stringify(this.state.shoppingFrequency))
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    checkValid() { // do error checking
        return true;//(this.state.articlesPerShop != -1 && this.state.shoppingFrequency != -1)
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

                    { 
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