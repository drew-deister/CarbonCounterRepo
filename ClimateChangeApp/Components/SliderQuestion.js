// Drew Deister & Shirom Makkad
// 1.17.2020


import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import _ from 'lodash';
import { Updates } from 'expo';


class SliderQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: 1,
        }
        this.onValueChangeDelayed = _.debounce(this.onChangeValue, 1)
    }

    onChangeValue(value) {
        this.props.updateFunction({value: 2})
    }


    render() {
        return (            
            <View style={styles.container}>
                <Slider style={styles.slider}
                        maximumValue={this.props.max}
                        minimumValue={this.props.min}
                        step={1} 
                        onValueChange={(sliderValue) => this.onValueChangeDelayed}
                        onSlidingComplete={(sliderValue) => this.props.updateFunction(sliderValue)}/>
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











