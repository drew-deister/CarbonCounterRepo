// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Icon, Button, Slider, Text} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {diagonalScale} from '../Utilities/Scaling';
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
            summerChange: 1,
            mode: '',
        }
    }

    

    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("numMiles", JSON.stringify(this.state.numMiles)) // save to async
            SecureStore.setItemAsync("greenAmount", JSON.stringify(this.state.greenAmount)) // save to async
            SecureStore.setItemAsync("summerChange", JSON.stringify(this.state.summerChange))
            SecureStore.setItemAsync("mode", JSON.stringify(this.state.mode))
            this.props.navigation.push('Question3')
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { // do some sort of error checking here
        // return (this.state.numMiles != 1)
        return true
    }


    render() {
        return(
            <ScrollView style = {styles.scrollView}>
                    <View style = {styles.view}>
                        <Text style = {styles.text}>{this.props.data.numMiles}</Text>
                        <Text style={{
                            color: 'white',
                            fontSize: diagonalScale(4.5),
                            fontWeight: 'bold'}}> {this.state.numMiles}</Text>
                        <Slider style = {styles.slider}
                                onValueChange={(sliderValue) => this.setState({numMiles: sliderValue})} 
                                value={this.state.numMiles}
                                minimumValue={0} maximumValue={100} step = {1}/>

                        <Text style = {styles.text}>{this.props.data.greenAmount}</Text>
                        <View style = {styles.rowStyleView}>
                            <Text style = {styles.sliderText}>Not Green</Text>
                            <Slider style = {styles.slider}
                                onValueChange={(sliderValue) => this.setState({greenAmound: sliderValue})} 
                                value={this.state.greenAmount}
                                minimumValue={.1} maximumValue={2} step = {1}/>
                            <Text style = {styles.sliderText}>Green</Text>
                        </View>

                        <Text style = {styles.text}>{this.props.data.transportationMode}</Text>
                        <Button
                            title='Diesel' buttonStyle={styles.button}// update this to move lower 
                            onPress = {() => this.setState({mode: 'Diesel'})}/>
                        <Button
                            title='Sedan' buttonStyle={styles.button}
                            onPress = {() => this.setState({mode: 'Sedan'})}/>
                        <Button
                            title='Pickup Truck' buttonStyle={styles.button}
                            onPress = {() => this.setState({mode: 'Pickup Truck'})}/>
                        <Button
                            title='Train or Bus' buttonStyle={styles.button} 
                            onPress = {() => this.setState({mode: 'Train or Bus'})}/>
                        <Button
                            title='Bike or Walk' buttonStyle={styles.button} 
                            onPress = {() => this.setState({mode: 'Bike or Walk'})}/>
                        
                        <Text style = {styles.text}>{this.props.data.summerChange}</Text>
                        <View style = {styles.rowStyleView}>
                            <Text style = {styles.sliderText}>Less</Text>
                            <Slider style = {styles.slider}
                                onSlidingComplete={(sliderValue) => this.setState({summerChange: sliderValue})} 
                                value={this.state.summerChange}
                                minimumValue={.1} maximumValue={2} step = {.1}/>
                            <Text style = {styles.sliderText}>More</Text>
                        </View>

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
    sliderText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '300'
    },
    slider: {
        marginLeft: 4,
        marginRight: 4,
        width: wp('60%')
    },
    button: { 
        backgroundColor: 'gray', // change this 
        marginBottom: 20,
        width: wp('40%')
    },
    nextButton: {
        backgroundColor: 'gray',
        marginBottom: 80,
        marginTop: 50,
        width: wp('55%')
    },

    
})


export {QuestionCard2};