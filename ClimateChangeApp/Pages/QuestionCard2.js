// Drew Deister
// 2.3.2020

// see QuestionCard1 for more thorough documentation

// _______________TRANSPORTATION QUESTION CARD__________________

import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Icon, Button, Slider, Text} from 'react-native-elements';
import { ScrollView } from 'react-native-gesture-handler';
import {diagonalScale} from '../Utilities/Scaling';
import {SliderQuestion} from '../Components/SliderQuestion';
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
            color: ['red', 'red', 'red', 'red', 'red'],
        }
        this.updateSliderState1 = this.updateSliderState1.bind(this)
        this.updateSliderState2 = this.updateSliderState2.bind(this)
        this.updateSliderState3 = this.updateSliderState3.bind(this)
    }

    // MARK: Update functions for slider children
    updateSliderState1(value) {
        this.setState({numMiles: value})
    }
    updateSliderState2(value) {
        this.setState({greenAmount: value})
    }
    updateSliderState3(value) {
        this.setState({summerChange: value})
    }
    

    saveAndPush() { // change this to some checkvalue function
        if (this.checkValid()) {
            SecureStore.setItemAsync("numMiles", JSON.stringify(this.state.numMiles)) // save to async
            SecureStore.setItemAsync("greenAmount", JSON.stringify(this.state.greenAmount)) // save to async
            SecureStore.setItemAsync("summerChange", JSON.stringify(this.state.summerChange))
            SecureStore.setItemAsync("mode", JSON.stringify(this.state.mode))
            this.props.navigation.push('Diet')
            } else {
            alert('Please answer all questions.')
        }
    }

    checkValid() { 
        return (this.state.numMiles != 0)
    }

    
    updateButton(index, mode) {
        if (this.state.color[index] == 'red') {
            this.state.color[index] = 'blue'
        } else {
            this.state.color[index] = 'red'
        }
        for (let i = 0; i < 5; i++) { // unselect the other
            if (this.state.color[i] == 'blue' && i != index) { // don't change the one you just updated
                this.state.color[i] = 'red'
            }
        }
        this.setState({color: this.state.color, mode: mode})
    }

    render() {
        return(
            // <ScrollView style = {styles.scrollView}>
                    <View style = {styles.view}>
                        <SliderQuestion   
                            question={this.props.data.numMiles}
                            questionLines={2}
                            secondaryColor='#F0F5DF'
                            //max = {100} min = {0} step = {1}      //these are now default props
                            shouldDisplay = {true}
                            callback = {this.updateSliderState1}
                        />

                        <Text style = {styles.text}>{this.props.data.greenAmount}</Text>
                        <View style = {styles.rowStyleView}>
                            <Text style = {styles.sliderText}>Not Green</Text>
                            <SliderQuestion
                                //max = {100} min = {1} step = {1}      //these are now default props
                                shouldDisplay = {false}
                                callback = {this.updateSliderState2}
                                secondaryColor='#F0F5DF'
                            />
                            <Text style = {styles.sliderText}>Green</Text>
                        </View>

                        <Text style = {styles.text}>{this.props.data.transportationMode}</Text>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[0], width: wp('40%'), marginBottom: 20, alignItems: 'center', }}
                            onPress = {() => this.updateButton(0, 'Car SUV')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[1], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(1, 'Sedan')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[2], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(2, 'Truck SUV')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[3], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(3, 'Minivan')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[4], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(4, 'Pickup Truck')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>

                        <Text style = {styles.text}>{this.props.data.summerChange}</Text>
                        <View style = {styles.rowStyleView}>
                            <Text style = {styles.sliderText}>Less</Text>
                            <SliderQuestion
                                max = {100} min = {1} step = {1}
                                shouldDisplay = {false}
                                callback = {this.updateSliderState3}
                                secondaryColor='#F0F5DF'
                            />
                            <Text style = {styles.sliderText}>More</Text>
                        </View>

                        <Button
                            icon={<Icon name="arrow-forward" color="white"/>}
                            iconRight
                            buttonStyle={styles.nextButton}// update this to move lower 
                            title='Next '
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
    buttonText: {
        color: 'white'
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
    button: { // not being used 
        backgroundColor: 'gray', 
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