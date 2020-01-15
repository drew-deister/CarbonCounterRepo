// Drew Deister
// 1.14.2020

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import { InputQuestion } from '../Components/InputQuestion';
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
                    <InputQuestion styles = {this.props.zipCodeStyle} data = {this.props.data}></InputQuestion>
                    <Button
                        icon={<Icon name="arrow-forward" color="white"/>}
                        iconRight
                        buttonStyle={{marginLeft: 0, marginRight: 0, marginBottom: 8, marginTop: 15}}// update this to move lower 
                        title='OPEN '
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