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
import { ScrollView } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';
import * as SecureStore from 'expo-secure-store';
import {diagonalScale} from '../Utilities/Scaling';
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
            zipCode: 0,
            numPeople: 0,
            sliderValue: 1,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this); // make sure these are both correct
        this.callbackFunction2 = this.callbackFunction2.bind(this);

    }

    callbackFunction1(value) {
        this.setState({zipCode: value})
    }

    callbackFunction2(value) {
        this.setState({numPeople: value})
    }
    onChange(values) {
        this.setState({sliderValue: values})
    }

    // called when next button is pushed
    saveAndPush() {
        if (this.checkValid()) {
            SecureStore.setItemAsync("zipCode", this.state.zipCode) // save to async
            SecureStore.setItemAsync("numPeople", toString(this.state.numPeople))
            SecureStore.setItemAsync("squareFootage", toString(this.state.sliderValue))
            this.props.navigation.push('Question2')
        } else {
            alert("Please enter a valid zipcode.")
        }
    }

    // called when next button is pushed
    saveAndPush() {
        if (this.checkValid()) { // change this to CHECK VALID
            SecureStore.setItemAsync("zipCode", JSON.stringify(this.state.zipCode)) // save to async
            SecureStore.setItemAsync("numPeople", JSON.stringify(this.state.numPeople))
            // SecureStore.setItemAsync("squareFootage", toString(this.state.sliderValue))
            this.props.navigation.push('Question2')
        } else {
            alert("Please answer all questions.")
        }
    }

    // checks whether current inputs are valid
    checkValid() {
        return true
        // return ((this.state.zipCode.length >= 5) && (this.state.sliderValue != 1)) 
    }


    render() {
        return(
            <View style = {styles.view}>
                <ScrollView style = {styles.scrollView}>
                    <View style = {styles.view}>
                        <InputQuestion 
                            keyboardType = {'numeric'}
                            parentCallBack = {this.callbackFunction1} 
                            question = {this.props.data.zipCode} 
                            placeholder = {this.props.data.zipCodePlaceholder}/>
                        <InputQuestion 
                            keyboardType = {'numeric'}
                            parentCallBack = {this.callbackFunction2} 
                            question = {this.props.data.numPeople} 
                            placeholder = {this.props.data.numPeoplePlaceholder}/>
                        <Text style = {styles.text}>{this.props.data.homeSize}</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: diagonalScale(4.5),
                            fontWeight: 'bold'}}>{this.state.sliderValue}</Text>
                        <Slider 
                                width = {wp('80%')} 
                                minimumValue={0} maximumValue={100} step = {1}
                                value={this.state.sliderValue}
                                onValueChange={(sliderValue) => this.setState({sliderValue})}/>
                        <Button
                            icon={<Icon name="arrow-forward" color="white"/>}
                            iconRight
                            buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                            title='Next '
                            onPress= {() => this.saveAndPush()}
                        /> 
                    </View>
                </ScrollView>
            </View>
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