// Drew Deister
// 1.14.2020

// TODO: add a query for the information when the sreen is loaded?
// note: Creating child components is generally best practices for everything on this screen.
//       However, QuestionCard needs access to all child states, and since a child Slider component
//       would need to update almost continuously, I have chosen to leave it as part of this parent.

// _______________HOUSING QUESTION CARD__________________


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import { InputQuestion } from '../Components/InputQuestion';
import * as SecureStore from 'expo-secure-store';
// import {diagonalScale} from '../Utilities/Scaling';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
import { SliderQuestion } from '../Components/SliderQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";



const HOUSEHOLD_INFO = INFORMATION["carbonCounterScreens"]["household"];


class QuestionCardHousing extends React.Component {
    constructor(props) {
        super(props);
        // this holds the state of the sub components 
        // it is superior to letting the subcompents manage themselves because we can access their states
        // and save them when the next button is pushed
        this.state = { 
            zipCode: 0,
            numPeople: 0,
            sliderValue: 1,
            hasResultsBeenAccessed: "false",
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this); // make sure these are both correct
        this.callbackFunction2 = this.callbackFunction2.bind(this);
        this.updateSliderState = this.updateSliderState.bind(this);
    }

    componentDidMount() {
        SecureStore.setItemAsync("hasResultsBeenAccessed", JSON.stringify("false")); // this only needs to be done once, in one page
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
            const zipCode = JSON.parse(await SecureStore.getItemAsync("zipCode"))
            const numPeople = JSON.parse(await SecureStore.getItemAsync("numPeople"))
            const squareFootage = JSON.parse(await SecureStore.getItemAsync("squareFootage"))
            this.setState({zipCode: zipCode, numPeople: numPeople, squareFootage: squareFootage})
            this.refs.q1.changeText(zipCode)
            this.refs.q2.changeText(numPeople)
            this.refs.slider.changeValue(squareFootage)
        }
    }

    callbackFunction1(value) {
        this.setState({zipCode: value})
    }

    callbackFunction2(value) {
        this.setState({numPeople: value})
    }
    updateSliderState(value) {
        this.setState({sliderValue: value})
    }
    onChange(values) {
        this.setState({sliderValue: values})
    }

    // called when next button is pushed
    saveAndPush() {
        if (this.checkValid()) {
            SecureStore.setItemAsync("zipCode", JSON.stringify(this.state.zipCode)) // save to async
            SecureStore.setItemAsync("numPeople", JSON.stringify(this.state.numPeople))
            SecureStore.setItemAsync("squareFootage", JSON.stringify(this.state.sliderValue))
            this.props.navigation.navigate('Transportation')
        } else {
            alert("Please enter a valid zipcode.")
        }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        SecureStore.setItemAsync("zipCode", JSON.stringify(this.state.zipCode)) // save to async
        SecureStore.setItemAsync("numPeople", JSON.stringify(this.state.numPeople))
        SecureStore.setItemAsync("squareFootage", JSON.stringify(this.state.sliderValue))
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    // checks whether current inputs are valid
    checkValid() {
        return true;((this.state.zipCode.length == 5) && (this.state.sliderValue != 1)) 
    }

    render() {
        var access = this.state.hasResultsBeenAccessed
        return(
            <View style = {styles.view}>
                { // can move this where we want it
                    (access == "true") ?
                    <Button icon={<Icon name="arrow-forward" color="white"/>}
                    iconRight
                    buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                    title='Back to results'
                    onPress= {() => this.saveAndGoBackToResults()}></Button>
                    : null // don't do anything
                }  
                <InputQuestion 
                    ref = {'q1'}
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction1} 
                    question = {HOUSEHOLD_INFO["questions"][0]} 
                    placeholder = {HOUSEHOLD_INFO["placeholders"][0]}/>
                <InputQuestion 
                    ref = {'q2'}
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction2} 
                    question = {HOUSEHOLD_INFO["questions"][1]} 
                    placeholder = {HOUSEHOLD_INFO["placeholders"][1]}
                    questionLines={2} />
                
                <SliderQuestion
                    ref = {'slider'}
                    question={HOUSEHOLD_INFO["questions"][2]}
                    max={4000} min={600} step={1}
                    shouldDisplay={true}
                    callback = {this.updateSliderState} />

                <AsafNextButton
                    onPress={() => this.saveAndPush()}
                    textStyle={{color: this.props.backgroundColor}}
                    >
                    Next
                </AsafNextButton>
            </View>
        )    
    }

}


const styles = StyleSheet.create({
    view: {
        alignItems: 'center'
    }
})


export {QuestionCardHousing};