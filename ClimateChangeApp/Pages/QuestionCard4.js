// Drew Deister
// 2.26.2020

// see QuestionCard1 for more thorough documentation

// _______________SHOPPING QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import { ScrollView } from 'react-native-gesture-handler';
import * as SecureStore from 'expo-secure-store';
import { InputQuestion } from '../Components/InputQuestion';
import {Text, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


class QuestionCard4 extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            shoppingFrequency: 0,
            articlesPerShop: 0,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this);
        this.callbackFunction2 = this.callbackFunction2.bind(this);
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
            SecureStore.setItemAsync("articlesPerShop", JSON.stringify(this.state.articlesPerShop))
            this.props.navigation.push('Results')            
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { // do some sort of error checking here
        return (true)
    }


    render() {
        return(
            // <ScrollView style = {styles.scrollView}>
                <View style = {styles.view}>
                    <InputQuestion 
                        questionLines={2}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction1}                             
                        question = {this.props.data.shoppingFrequency} 
                        placeholder = {this.props.data.shoppingFrequencyPlaceholder}/>
                    <InputQuestion 
                        questionLines={2}
                        keyboardType = {'numeric'}
                        parentCallBack = {this.callbackFunction2}                             
                        question = {this.props.data.articlesPerShop} 
                        placeholder = {this.props.data.articlesPerShopPlaceholder}/>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={styles.nextButton}// update this to move lower 
                        title='Results '
                        onPress= {() => this.saveAndPush()}/>
                </View> 
            // </ScrollView>
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
    nextButton: {
        backgroundColor: 'gray',
        marginVertical: 50,
        width: wp('55%')
    },
})


export {QuestionCard4};