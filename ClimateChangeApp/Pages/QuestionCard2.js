// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Icon, Button, Slider, Text} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {diagonalScale} from '../Utilities/Scaling';
import { InputQuestion } from '../Components/InputQuestion';
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
            numMiles: 1,
            greenAmount: 1,
        }
        this.callbackFunction1 = this.callbackFunction1.bind(this) // allows child to update this.state

    }

    callbackFunction1(data) { 
        this.setState({numMiles: data})
    }
    

    saveAndPush() { // figure out how to save slider value
        SecureStore.setItemAsync("numMiles", toString(this.state.numMiles)) // save to async
        SecureStore.setItemAsync("greenAmount", toString(this.state.greenAmount)) // save to async
    }


    render() {
        return(
            <View style = {styles.view}>
                <ScrollView style = {styles.scrollView}>
                    <View style = {styles.view}>
                        <Text style = {styles.text}>{this.props.data.numMiles}</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: diagonalScale(4.5),
                            fontWeight: 'bold'}}> {this.state.numMiles}</Text>
                        <Slider 
                            width = {wp('80%')}
                            onValueChange={(sliderValue) => this.setState({numMiles: sliderValue})} 
                            value={this.state.numMiles}
                            minimumValue={0} maximumValue={100} step = {1}/>

                        <Text style = {styles.text}>{this.props.data.greenAmount}</Text>
                        <View style = {styles.rowStyleView}>
                            <Text style = {styles.sliderText}>Not Green</Text>
                            <Slider style = {styles.slider}
                                onValueChange={(sliderValue) => this.setState({greenAmount: sliderValue})} 
                                value={this.state.greenAmount}
                                minimumValue={0} maximumValue={100} step = {1}/>
                            <Text style = {styles.sliderText}>Green</Text>
                        </View>
                        
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
        borderRadius: 50
    },
    sliderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300'
    },
    slider: {
        marginLeft: 4,
        marginRight: 4,
        width: wp('60%')
    }

    
})


export {QuestionCard2};