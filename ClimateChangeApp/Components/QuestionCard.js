// Drew Deister
// 1.14.2020

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';
import { SliderQuestion } from '../Components/SliderQuestion';
import { NextButton } from '../Components/NextButton';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

class QuestionCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }


    render() {
        return(
            <View style = {styles.view}>
                <ScrollView style = {styles.scrollView}>
                    <InputQuestion question = {this.props.data.zipCode} placeholder = {this.props.data.zipCodePlaceholder}/>
                    <InputQuestion question = {this.props.data.homeSize} placeholder = {this.props.data.homeSizePlaceholder}/>
                    <InputQuestion question = {this.props.data.numPeople} placeholder = {this.props.data.numPeoplePlaceholder}/>
                    <SliderQuestion min = {this.props.data.homeSizeMin} max = {this.props.data.homeSizeMax}/>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={{backgroundColor: 'gray', marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                        title='Next '
                        onPress= {() =>  
                            this.props.navigation.push('Question2')}
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


export {QuestionCard};