// Drew Deister
// 2.26.2020

// see QuestionCard1 for more thorough documentation

// _______________DIET QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import {Text, Icon, Button, Slider} from 'react-native-elements';
import * as SecureStore from 'expo-secure-store';
import { InputQuestion } from '../Components/InputQuestion';

import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


class QuestionCard3 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            beefServings: 0,
            dairyServings: 0,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
        this.callbackFunction2 = this.callbackFunction2.bind(this);
    }

    callbackFunction1(value) {
        this.setState({beefServings: value})
    }

    callbackFunction2(value) {
        this.setState({dairyServings: value})
    }


    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("beefServings", JSON.stringify(this.state.beefServings))
            SecureStore.setItemAsync("dairyServings", JSON.stringify(this.state.dairyServings)) 
            this.props.navigation.push('Question4')            
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { // do some sort of error checking here
        return (true)
    }


    render() {
        return(
            <ScrollView style = {styles.scrollView}>
                <View style = {styles.view}>
                    <InputQuestion 
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}                             
                        question = {this.props.data.beefServings} 
                        placeholder = {this.props.data.beefServingsPlaceholder}/>
                    <InputQuestion 
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction2}                             
                        question = {this.props.data.dairyServings} 
                        placeholder = {this.props.data.dairyServingsPlaceholder}/>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={styles.nextButton}// update this to move lower 
                        title='Next '
                        onPress= {() => this.saveAndPush()}/>
                </View> 
            </ScrollView>
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
    rowStyleView: {
        flexDirection: 'row',
        marginVertical: 20
    },
    view: {
        alignItems: 'center',
    },
    scrollView: {
        backgroundColor: '#0B7310',
        width: wp('100%'),
        padding: 20,
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,

    },
    button: { 
        backgroundColor: 'gray', // change this 
        marginBottom: 20,
        width: wp('40%')
    },
    nextButton: {
        backgroundColor: 'gray',
        marginVertical: 50,
        width: wp('55%')
    },

    
})


export {QuestionCard3};