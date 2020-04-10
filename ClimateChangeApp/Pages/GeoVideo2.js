import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
//import { WebView } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
////////////////////////////////////////////////
// THIS FILE IS WORTHESS AND NEVER USED. ONLY KEEPING FOR FUTURE REFERENCE
////////////////////////////////////////////////

class GeoVideo2 extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Around the world',
    };

    render() {
        const { width } = Dimensions.get('window');
        return(
          <View style={styles.screen}>
              <View style={styles.MainContainer}>
                  <Text style={styles.Title}>Popeye</Text>
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
          </View>
        )
    }
}



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#D0F0C0',
        padding: 10
    },
    MainContainer: {
        //flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        //height: DEVICE_HEIGHT,
        //width: DEVICE_WIDTH,
        borderColor: 'black',
        borderWidth: 1
      },
    Title: {
        color: 'black',
        fontSize: 20,
        //justifyContent: 'center',
        //alignItems: 'center',
        //flex: 1,
        backgroundColor: 'white',
        borderColor: 'black',
        borderWidth: 1,
        height: '10%',
        width: '60%',
        textAlign: 'center',
        textAlignVertical: 'center'
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

  export default GeoVideo2