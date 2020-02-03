// Drew Deister & Shirom Makkad
// 1.17.2020


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {diagonalScale} from '../Utilities/Scaling';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';


class SliderQuestion extends React.Component {
    state = {
        sliderValue: 1,
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}>{this.props.question}</Text>
                <Text style={{
                            color: 'white',
                            fontSize: diagonalScale(4.5),
                            fontWeight: 'bold'
                        }}>{this.state.sliderValue}</Text>
                <Slider style={styles.slider}
                        maximumValue={this.props.max}
                        minimumValue={this.props.min}
                        step={1} value={this.state.sliderValue}
                        onValueChange={(sliderValue) => this.setState({sliderValue})}/>
            </View>   
        )
    }
}


export {SliderQuestion};

const styles = StyleSheet.create({ 
    text: {
        marginVertical: 8,
        color: 'white',
        fontSize: 24,
        fontWeight: '300'
    },   
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    slider: {
        alignSelf: 'stretch',
        marginHorizontal: 15,
    }
});











