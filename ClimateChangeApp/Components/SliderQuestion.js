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
        questionLines: PropTypes.number,
        secondaryColor: PropTypes.string,
        min: PropTypes.number,
        max: PropTypes.number,
        step: PropTypes.number,
        shouldDisplay: PropTypes.bool,
        minLabel: PropTypes.string,
        maxLabel: PropTypes.string,
    }

    static defaultProps = {
        question: "",
        questionLines: 1,
        secondaryColor: '#EB5B6D',
        min: 1,
        max: 100,
        step: 1,
        shoudlDisplay: true,
        minLabel: "",
        maxLabel: ""
    }

    changeValue(value) {
        this.setState({sliderValue: value})
        // impportant: Ensures parent state is updated every time sliderState is updated
        this.props.callback(value)
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
                
                <View style={styles.sliderContainer}>
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
                </View>

                <View style={styles.sliderLabelContainer}>
                    <Text style={styles.sliderLabel}>{this.props.minLabel}</Text>
                    { 
                    this.props.shouldDisplay ? // this is called a ternary operator: the text element will display if true
                        <Text style={styles.sliderValue}>
                            {this.state.sliderValue} 
                        </Text>
                    : null
                    }
                    <Text style={[styles.sliderLabel, {textAlign: 'right'}]}>{this.props.maxLabel}</Text>
                </View>
                
            </View>   
        )
    }
}

const ratio = {
    1: {aspectRatio: 100/8},
    2: {aspectRatio: 100/20},
    3: {aspectRatio: 100/29},
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
        marginVertical: 16,
    },
    sliderContainer: {
        marginTop: 5,
        marginBottom: 5,
        width: wp('74%'),
    },
    slider: {
        width: '100%',//wp('72%'),   //equivalent to 270 from jenna's design
        height: 10,
    },
    sliderLabelContainer: {
        flexDirection: 'row',
        width: wp('74%'),
        justifyContent: 'space-between'
    },
    sliderLabel: {
        width: wp('26%'),
        //backgroundColor: 'blue',
        color: 'white',
        fontSize: 13, //diagonalScale(4.5),
        fontWeight: '600',
    }
});











