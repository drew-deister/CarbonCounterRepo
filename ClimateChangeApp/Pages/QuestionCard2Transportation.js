// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Icon, Button, Slider, Text} from 'react-native-elements';
import {SliderQuestion} from '../Components/SliderQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";
import {MCQuestion} from '../Components/MCQuestion'
import * as SecureStore from 'expo-secure-store';
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


const TRANSPORTATION_INFO = INFORMATION["carbonCounterScreens"]["transportation"];


class QuestionCardTransportation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            numMiles: 1,
            greenAmount: 1,
            summerChange: 1,
            mode: '',
            color: ['red', 'red', 'red', 'red', 'red'],
        }
        this.updateSliderState1 = this.updateSliderState1.bind(this)
        this.updateSliderState2 = this.updateSliderState2.bind(this)
        this.updateSliderState3 = this.updateSliderState3.bind(this)
        this.updateMCState = this.updateMCState.bind(this)
    }

    // MARK: Update functions for slider children
    updateSliderState1(value) {
        this.setState({numMiles: value})
    }
    updateSliderState2(value) {
        this.setState({greenAmount: value})
    }
    updateSliderState3(value) {
        this.setState({summerChange: value})
    }

    updateMCState(mode) {
        this.setState({mode: mode})
    }
    

    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("numMiles", JSON.stringify(this.state.numMiles)) // save to async
            SecureStore.setItemAsync("greenAmount", JSON.stringify(this.state.greenAmount)) // save to async
            SecureStore.setItemAsync("summerChange", JSON.stringify(this.state.summerChange))
            SecureStore.setItemAsync("mode", JSON.stringify(this.state.mode))
            this.props.navigation.push('Diet')
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { 
        return (this.state.numMiles != 0)
    } 

    render() {
        return(
                    <View style = {styles.view}>
                        <SliderQuestion   
                            question={TRANSPORTATION_INFO["questions"][0]}
                            questionLines={3}
                            questionStyle={{fontSize: 18}}
                            secondaryColor='#F0F5DF'
                            //max = {100} min = {0} step = {1}      //these are now default props
                            shouldDisplay = {true}
                            callback = {this.updateSliderState1}
                        />

                        {/* LUCAS       -       Leah had us delete this question. 
                                                Once you see this, if you agree, delete the following commented out code*/ }
                        {/* <View style = {styles.rowStyleView}>
                            <SliderQuestion
                                question={this.props.data.greenAmount}
                                questionLines={2}
                                //max = {100} min = {1} step = {1}      //these are now default props
                                shouldDisplay = {false}
                                callback = {this.updateSliderState2}
                                secondaryColor='#F0F5DF'
                                minLabel="no other mode of transport"
                                maxLabel="about half my travel is greener"
                            />
                        </View> */}


                        {/* FIXME       -------------------------------------/*
                                    -   Problem: Some of the answer options
                                        don't fit well on the screens
                                    -   We need to ask Leah if its possible to
                                        shorten the MCOptions (the answers to
                                        he transportation question)
                                    -   Alternatively, we could add an "info"
                                        button to a few of the answers
                                        */
                                        }
                        <MCQuestion
                            question={TRANSPORTATION_INFO["questions"][1]} 
                            questionLines={2}
                            questionStyle={{fontSize: 18}}
                            answerOptions={TRANSPORTATION_INFO["MCOptions"]}
                            answerStyle={[{}, {fontSize: 14}, {fontSize: 12}, 
                                {}, {fontSize: 16}, {}, ]}
                            callback={this.updateMCState}
                            secondaryColor='rgba(252, 205, 193, .85)'
                        ></MCQuestion>


                        <View style = {styles.rowStyleView}>
                            <SliderQuestion
                                question={TRANSPORTATION_INFO["questions"][2]}
                                questionLines={3}
                                questionStyle={{fontSize: 18}}
                                max = {100} min = {1} step = {1}
                                shouldDisplay = {false}
                                callback = {this.updateSliderState3}
                                secondaryColor='#F0F5DF'
                                minLabel={TRANSPORTATION_INFO["sliderMin"][2]}
                                maxLabel={TRANSPORTATION_INFO["sliderMax"][2]}
                            />
                        </View>

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
    rowStyleView: {
        flexDirection: 'row',
    },
    view: {
        alignItems: 'center',
    },    
})


export {QuestionCardTransportation};