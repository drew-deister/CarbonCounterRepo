// Drew Deister & Shirom Makkad
// 1.17.2020

// This slider updates continuosly onChange, but only changes its parent component on slidingComplete (prevents lag)
// See use of ternary operator: super cool


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {diagonalScale} from '../Utilities/Scaling';
import { QuestionText } from './QuestionText';
import PropTypes from 'prop-types';

class SliderQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 1,
        }
    }

    static propTypes = {
        question: PropTypes.string,
        minTrackColor: PropTypes.string,
        thumbColor: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
    }

    static defaultProps = {
        question: "",
        secondaryColor: '#EB5B6D',
        min: 1,
        max: 100,
        step: 1,
    }

    render() {
        return (            
            <View style={styles.container}>
                <QuestionText
                    lines={this.props.questionLines}
                    question={this.props.question}
                    style={this.props.questionStyle}
                    >
                </QuestionText>
                
                <Slider style={styles.slider}
                        maximumTrackTintColor='white'
                        minimumTrackTintColor={this.props.secondaryColor}
                        trackStyle={styles.track}
                        thumbStyle={[styles.thumb, {backgroundColor: this.props.secondaryColor}]}
                        maximumValue={this.props.max}
                        minimumValue={this.props.min}
                        value = {this.state.sliderValue}
                        step={this.props.step} 
                        onValueChange={(value) => this.setState({sliderValue: value})}
                        onSlidingComplete={(value) => this.props.callback(value)}/>

                { 
                this.props.shouldDisplay ? // this is called a ternary operator: the text element will display if true
                    <Text style={styles.sliderValue}>
                        {this.state.sliderValue} 
                    </Text>
                : null
                }
            </View>   
        )
    }
}


export {SliderQuestion};

const styles = StyleSheet.create({
    thumb: {
        marginTop: -15,
    },
    track: {
        height: 5,
    },
    sliderValue: {
        color: 'white',
        fontSize: 20, //diagonalScale(4.5),
        fontWeight: '600',
    },
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    slider: {
        width: 270,//wp('72%'),   //equivalent to 270 from jenna's design
        height: 10,
    }
});











