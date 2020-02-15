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


const SliderQuestion = ({onChange, min, max}) => {
   
    return (            
        <View style={styles.container}>
            <Slider style={styles.slider}
                    maximumValue={max}
                    minimumValue={min}
                    step={10} 
                    onValueChange={(sliderValue) => onChange(sliderValue)}/>
        </View>   
    )
    
}


export {SliderQuestion};

const styles = StyleSheet.create({   
    container: {
        alignItems: 'center',
        flexDirection: 'column',
    },
    slider: {
        alignSelf: 'stretch',
        marginHorizontal: 15,
    }
});











