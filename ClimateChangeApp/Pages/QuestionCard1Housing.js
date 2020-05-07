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
import ZipCode from '../Utilities/convertcsv.json'; // import JSON file



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
        SecureStore.setItemAsync("hasResultsBeenAccessed", JSON.stringify("false")); // this only needs to be done once, in one page
    }

    componentDidMount() {
        this.fetchData().done()
        this.props.navigation.addListener('didFocus', () => { // runs every time the screen is seen
            // The screen is focused
            this.fetchData().done()
        });
    }

    async fetchData() {
        const response = JSON.parse(await SecureStore.getItemAsync("hasResultsBeenAccessed"))
        this.setState({hasResultsBeenAccessed: response})
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
        }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        SecureStore.setItemAsync("zipCode", JSON.stringify(this.state.zipCode)) // save to async
        SecureStore.setItemAsync("numPeople", JSON.stringify(this.state.numPeople))
        SecureStore.setItemAsync("squareFootage", JSON.stringify(this.state.sliderValue))
        this.props.navigation.navigate('Results')
    }

    // checks whether current inputs are valid
    checkValid() {
      var averageHomekwhMonth = 0;
      var i;
      for (i in ZipCode) {
          if (ZipCode[i]["Zip"] === parseInt(this.state.zipCode)) {
            averageHomekwhMonth += ZipCode[i]["Avg Home kwh"]["month"];
          }
      }
      if (averageHomekwhMonth === 0)
      {
        alert ("Please enter a valid zip code.")
        return false;
      }
      if (this.state.numPeople <= 0)
      {
        alert ("Please enter a positive number for the number of people that you live with.")
        return false;
      }
      if (this.state.sliderValue === 1)
      {
        alert ("Please enter the size of your home size.")
        return false;
      }
      return true;
    }

    render() {
        access = this.state.hasResultsBeenAccessed
        return(
                // <View style = {styles.view}>
                //     {
                //         (access == "true") ?
                //         <Button icon={<Icon name="arrow-forward" color="white"/>}
                //         iconRight
                //         buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower
                //         title='Back to results'
                //         onPress= {() => this.saveAndGoBackToResults}></Button>
                //         : null // don't do anything
                //     }
                //     <InputQuestion
                //         keyboardType = {'numeric'}
                //         parentCallBack = {this.callbackFunction1}
                //         question = {this.props.data.zipCode}
                //         placeholder = {this.props.data.zipCodePlaceholder}/>
                //     <InputQuestion
                //         keyboardType = {'numeric'}
                //         parentCallBack = {this.callbackFunction2}
                //         question = {this.props.data.numPeople}
                //         placeholder = {this.props.data.numPeoplePlaceholder}
                //         questionLines={2} />

                //     <SliderQuestion
                //         //width = {wp('80%')}
                //         question={this.props.data.homeSize}
                //         max={3000} min={800} step={1}
                //         shouldDisplay={true}
                //         callback = {this.updateSliderState} />
                //     <Button
                //         icon={<Icon name="arrow-forward" color="white"/>}
                //         iconRight
                //         buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower
                //         title='Next '
                //         onPress= {() => this.saveAndPush()}
                //     />
                // </View>
            <View style = {styles.view}>
                {
                    (access == "true") ?
                    <Button icon={<Icon name="arrow-forward" color="white"/>}
                    iconRight
                    buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower
                    title='Back to results'
                    onPress= {() => this.saveAndGoBackToResults}></Button>
                    : null // don't do anything
                }
                <InputQuestion
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction1}
                    question = {HOUSEHOLD_INFO["questions"][0]}
                    placeholder = {HOUSEHOLD_INFO["placeholders"][0]}/>
                <InputQuestion
                    keyboardType = {'numeric'}
                    parentCallBack = {this.callbackFunction2}
                    question = {HOUSEHOLD_INFO["questions"][1]}
                    placeholder = {HOUSEHOLD_INFO["placeholders"][1]}
                    questionLines={2} />

                <SliderQuestion
                    //width = {wp('80%')}
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
