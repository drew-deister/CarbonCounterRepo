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

class SliderQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            sliderValue: 1,
        }
    }

    render() {
        return (            
            <View style={styles.container}>
                { 
                    this.props.shouldDisplay ? // this is called a ternary operator: the text element will display if true
                    <Text style={{
                        color: 'white',
                        fontSize: diagonalScale(4.5),
                        fontWeight: 'bold'}}>{this.state.sliderValue} 
                    </Text> : null
                }
                <Slider style={styles.slider}
                        maximumValue={this.props.max}
                        minimumValue={this.props.min}
                        value = {this.state.sliderValue}
                        step={this.props.step} 
                        onValueChange={(value) => this.setState({sliderValue: value})}
                        onSlidingComplete={(value) => this.props.callback(value)}/>
            </View>   
        )
    }
}


export {SliderQuestion};

const styles = StyleSheet.create({   
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    slider: {
        // alignSelf: 'stretch',
        marginHorizontal: 15,
        width: wp('50%')
    }
});











