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
            numMiles: 0,
            summerChange: 1,
            mode: '',
            color: ['red', 'red', 'red', 'red', 'red'],
            hasResultsBeenAccessed: "false",
        }
        this.updateSliderState1 = this.updateSliderState1.bind(this)
        this.updateMCState = this.updateMCState.bind(this)
        this.updateSliderState2 = this.updateSliderState2.bind(this)
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
        this.setState({hasResultsBeenAccessed: results})
        if (results == "true") { // change the children to what the user selected if the user has accessed Results
            const numMiles = JSON.parse(await SecureStore.getItemAsync("numMiles"))
            const summerChange = JSON.parse(await SecureStore.getItemAsync("summerChange"))
            const mode = JSON.parse(await SecureStore.getItemAsync("mode"))
            this.setState({numMiles: numMiles, summerChange: summerChange, mode: mode})
            this.refs.slider1.changeValue(numMiles)
            this.refs.slider2.changeValue(summerChange)
            this.refs.MCQuestion.updateButtonAfterResultsAccessed(TRANSPORTATION_INFO["MCOptions"].indexOf(mode), mode)
        }
    }

    // MARK: Update functions for slider children
    updateSliderState1(value) {
        this.setState({numMiles: value})
    }

    updateMCState(mode) {
      this.setState({mode: mode})
    }
    updateSliderState2(value) {
        this.setState({summerChange: value})
    }


    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("numMiles", JSON.stringify(this.state.numMiles)) // save to async
            SecureStore.setItemAsync("mode", JSON.stringify(this.state.mode))
            SecureStore.setItemAsync("summerChange", JSON.stringify(this.state.summerChange))
            this.props.navigation.navigate('Diet')
            }
    }

    // only used when back to results button is visible
    saveAndGoBackToResults() {
        this.saveAndPush()
        this.props.navigation.navigate('Shopping')
        this.props.navigation.navigate('Results') // you took results off the stack so must re-push
    }

    checkValid() {
      if (this.state.mode === '')
      {
        alert ("Please enter your primary form of transportation.")
        return false;
      }
      if (this.state.numMiles === 0)
      {
        alert ("Please input how many miles you travel.")
        return false;
      }
      return true;
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
                            fixedDecimals = {1}
                            max = {20} min = {0.5} step = {.5}      //these are now default props
                            shouldDisplay = {true}
                            callback = {this.updateSliderState1}
                        />

                        <MCQuestion
                            ref = {'MCQuestion'}
                            question={TRANSPORTATION_INFO["questions"][1]}
                            questionLines={2}
                            questionStyle={{fontSize: 18}}
                            answerOptions={TRANSPORTATION_INFO["MCOptions"]}
                            answerStyle={[{}, {}, {},
                                {}, {}, {}, ]}
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
                                callback = {this.updateSliderState2}
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
