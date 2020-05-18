// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {SliderQuestion} from '../Components/SliderQuestion';
import { AsafNextButton } from "../Components/AsafNextButton";
import {MCQuestion} from '../Components/MCQuestion'
import * as SecureStore from 'expo-secure-store';
import INFORMATION from '../Utilities/text.json'; 
import { throwIfAudioIsDisabled } from 'expo-av/build/Audio/AudioAvailability';


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
            hasResultsBeenAccessed: "false",
            hasTransportationBeenAccessed: "false",
        }
        this.updateSliderState1 = this.updateSliderState1.bind(this)
        this.updateSliderState2 = this.updateSliderState2.bind(this)
        this.updateSliderState3 = this.updateSliderState3.bind(this)
        this.updateMCState = this.updateMCState.bind(this)
    }

    componentDidMount() {
        this.fetchData().done()
        // the contents of this listener execute every time the screen is focused, i.e. shown 
        this.props.navigation.addListener('didFocus', () => { 
            this.fetchData().done()
        });
    }

    async fetchData() {
        const results = JSON.parse(await SecureStore.getItemAsync("hasResultsBeenAccessed"))
        const thisPage = JSON.parse(await SecureStore.getItemAsync("hasTransportationBeenAccessed"))
        this.setState({hasResultsBeenAccessed: results, hasTransportationBeenAccessed: thisPage})
        if (results == "true" || thisPage == "true") { // change the children to what the user selected if the user has accessed Results
            const numMiles = JSON.parse(await SecureStore.getItemAsync("numMiles"))
            const greenAmount = JSON.parse(await SecureStore.getItemAsync("greenAmount")) // don't need?
            const summerChange = JSON.parse(await SecureStore.getItemAsync("summerChange"))
            const mode = JSON.parse(await SecureStore.getItemAsync("mode"))
            this.setState({numMiles: numMiles, greenAmount: greenAmount, summerChange: summerChange, mode: mode})
            this.refs.slider1.changeValue(numMiles)
            this.refs.slider2.changeValue(summerChange)
            this.refs.MCQuestion.updateButtonAfterResultsAccessed(TRANSPORTATION_INFO["MCOptions"].indexOf(mode), mode)
        }
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
            SecureStore.setItemAsync("hasTransportationBeenAccessed", JSON.stringify("true"))
            this.props.navigation.navigate('Diet')
            } else {
            alert('Please answer all questions.')
        }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        SecureStore.setItemAsync("numMiles", JSON.stringify(this.state.numMiles)) // save to async
        SecureStore.setItemAsync("greenAmount", JSON.stringify(this.state.greenAmount)) // save to async
        SecureStore.setItemAsync("summerChange", JSON.stringify(this.state.summerChange))
        SecureStore.setItemAsync("mode", JSON.stringify(this.state.mode))
        this.props.navigation.navigate('Diet')
        this.props.navigation.navigate('Shopping')
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    checkValid() {
        return (this.state.numMiles != 0)
    } 

    render() {
        var access = this.state.hasResultsBeenAccessed
        return(
                    <View style = {styles.view}>
                        { 
                            (access == "true") ?
                            <AsafNextButton 
                                onPress= {() => this.saveAndGoBackToResults()}
                                style={{backgroundColor: this.props.secondaryColor, marginBottom: 0}}
                                textStyle={{color: this.props.backgroundColor}}>

                                Back to results
                            </AsafNextButton>
                            : null // don't do anything
                        } 
                        <SliderQuestion   
                            ref = {'slider1'}
                            question={TRANSPORTATION_INFO["questions"][0]}
                            questionLines={3}
                            questionStyle={{fontSize: 18}}
                            secondaryColor='#F0F5DF'
                            shouldDisplay = {true}
                            callback = {this.updateSliderState1}
                        />

                        <MCQuestion
                            ref = {'MCQuestion'}
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
                                ref = {'slider2'}
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
