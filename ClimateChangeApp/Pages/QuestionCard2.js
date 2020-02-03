// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Icon, Button} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';
import { SliderQuestion } from '../Components/SliderQuestion';
import * as SecureStore from 'expo-secure-store';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

class QuestionCard2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            numMiles: "",
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this) // allows child to update this.state

    }

    callbackFunction1(data) { 
        this.setState({numMiles: data})
    }
    

    saveAndPush() { // figure out how to save slider value
        SecureStore.setItemAsync("numMiles", this.state.numMiles) // save to async
    }


    render() {
        return(
            <View style = {styles.view}>
                <ScrollView style = {styles.scrollView}>
                    <SliderQuestion question = {this.props.data.numMiles} min = {this.props.data.homeSizeMin} max = {this.props.data.homeSizeMax}/>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                        title='Next '
                        onPress= {() => this.saveAndPush()}
                    /> 
                </ScrollView>
            </View>
        )    
    }

}


const styles = StyleSheet.create({
    view: {
        marginTop: 20
    },
    scrollView: {
        backgroundColor: '#0B7310',
        width: wp('100%'),
        padding: 20,
        borderRadius: 50
    }
})


export {QuestionCard2};