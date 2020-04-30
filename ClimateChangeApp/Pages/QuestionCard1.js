// Drew Deister
// 1.14.2020

// new

// TODO: add a query for the information when the sreen is loaded?
// note: Creating child components is generally best practices for everything on this screen.
//       However, QuestionCard needs access to all child states, and since a child Slider component
//       would need to update almost continuously, I have chosen to leave it as part of this parent.

// _______________HOUSING QUESTION CARD__________________


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';
import * as SecureStore from 'expo-secure-store';
import {diagonalScale} from '../Utilities/Scaling';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
import { SliderQuestion } from '../Components/SliderQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";



const HOUSEHOLD_INFO = INFORMATION["carbonCounterScreens"]["household"];


class QuestionCard1 extends React.Component {

    constructor(props) {
        super(props);
        // this holds the state of the sub components 
        // it is superior to letting the subcompents manage themselves because we can access their states
        // and save them when the next button is pushed
        this.state = { 
            zipCode: 0,
            numPeople: 0,
            sliderValue: 1,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this); // make sure these are both correct
        this.callbackFunction2 = this.callbackFunction2.bind(this);
        this.updateSliderState = this.updateSliderState.bind(this);


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
            this.props.navigation.push('Transportation')
        } else {
            alert("Please enter a valid zipcode.")
        }
    }

    // checks whether current inputs are valid
    checkValid() {
        return true;((this.state.zipCode.length == 5) && (this.state.sliderValue != 1)) 
    }

    render() {
        return(
            // <View style = {styles.view}>
            //     <ScrollView style = {styles.scrollView}>
                    <View style = {styles.view}>
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
                        max={3000} min={800} step={1}
                        shouldDisplay={true}
                        callback = {this.updateSliderState} />

                        <AsafNextButton
                            onPress={() => this.saveAndPush()}
                            textStyle={{color: this.props.backgroundColor}}
                            // style={{backgroundColor: this.props.backgroundColor,
                            //         borderWidth: 1, borderTopWidth: 1, borderBottomWidth: 1}}
                            >
                            Next
                        </AsafNextButton>
                        {/* <Button
                            icon={<Icon name="arrow-forward" color="white"/>}
                            iconRight
                            buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                            title='Next '
                            onPress= {() => this.saveAndPush()}
                        />  */}
                    </View>
            //     </ScrollView>
            // </View>
        )    
    }

}


const styles = StyleSheet.create({
    text: {
        marginVertical: 8,
        color: 'white',
        fontSize: 24,
        fontWeight: '300'
    },
    view: {
        alignItems: 'center'
    },
    scrollView: {
        backgroundColor: '#0B7310',
        width: wp('100%'),
        padding: 20,
        borderRadius: 50,
    }
})


export {QuestionCard1};