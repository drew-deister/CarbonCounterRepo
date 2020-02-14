// Drew Deister
// 1.14.2020

// TODO: add a query for the information when the sreen is loaded?

// _______________HOUSING QUESTION CARD__________________


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

class QuestionCard1 extends React.Component {
    constructor(props) {
        super(props);
        // this holds the state of the sub components 
        // it is superior to letting the subcompents manage themselves because we can access their states
        // and save them when the next button is pushed
        this.state = { 
            zipCode: "",
            numPeople: ""
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this) // allows child to update this.state
        this.callbackFunction2 = this.callbackFunction2.bind(this)

    }

    callbackFunction1(data) { 
        this.setState({zipCode: data})
    }
    callbackFunction2(data) { 
        this.setState({numPeople: data})
    }

    saveAndPush() { // figure out how to save slider value
        SecureStore.setItemAsync("zipCode", this.state.zipCode) // save to async
        SecureStore.setItemAsync("numPeople", this.state.numPeople) // save to async
        this.props.navigation.push('Question2')
    }


    render() {
        return(
            <View style = {styles.view}>
                <ScrollView style = {styles.scrollView}>
                    <InputQuestion parentCallBack = {this.callbackFunction1} question = {this.props.data.zipCode} placeholder = {this.props.data.zipCodePlaceholder}/>
                    <InputQuestion parentCallBack = {this.callbackFunction2} question = {this.props.data.numPeople} placeholder = {this.props.data.numPeoplePlaceholder}/>
                    <SliderQuestion question = {this.props.data.homeSize} min = {this.props.data.homeSizeMin} max = {this.props.data.homeSizeMax}/>
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
        borderRadius: 50,
    }
})


export {QuestionCard1};