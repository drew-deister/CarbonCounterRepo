// DONT NEED ANYMORE

import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");

class GlobeVideo extends React.Component {

    render() {
        const { width } = Dimensions.get('window');
        return(
            <View style={styles.MainContainer}>
                <Video
                //popeye uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'
                source={{ uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4' }}
                //source={ require('../assets/germany.mp4') }
                style={styles.Video}
                resizeMode="cover"      //fill container bounds while preserving aspect ratio
                shouldPlay
                useNativeControls={true}
                rate={1.0}
                isMute={false}
                volume={1.0}
                >
                    <Text style={styles.Caption}>Do you like this video?</Text>
                </Video>
            </View>
        )
    }
}



const styles = StyleSheet.create({
    MainContainer: {
        width: wp('60%'),
        height: hp('30%'),
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        borderColor: 'black',
        borderWidth: 1
      },
    Caption: {
        borderColor: 'black',
        borderWidth: 1,
        textAlign: 'center',
        //textAlignVertical: 'bottom'
    },
    Video: {
        //flex: 3,
        backgroundColor: 'white',
        //justifyContent: 'center',
        //width: '100%',
        borderColor: 'black',
        borderWidth: 1,
        height: '55%',
        width: '90%'
    }
  });

  export {GlobeVideo}