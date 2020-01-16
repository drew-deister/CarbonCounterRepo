import React, { Component } from 'react';
import {Dimensions, StyleSheet, View, WebView} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import { TextInput } from 'react-native-gesture-handler';
import { Video } from 'expo-av';
//import { WebView } from 'react-native';

const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get("window");
const BACKGROUND_COLOR = "#FFF8ED";
const DISABLED_OPACITY = 0.5;
const FONT_SIZE = 14;
const LOADING_STRING = "... loading ...";
const BUFFERING_STRING = "...buffering...";
const RATE_SCALE = 3.0;
const VIDEO_CONTAINER_HEIGHT = (DEVICE_HEIGHT * 2.0) / 5.0 - FONT_SIZE * 2;

const LOOPING_TYPE_ALL = 0;
const LOOPING_TYPE_ONE = 1;

class GeoVideo2 extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Around the world',
    };

    render() {
        const { width } = Dimensions.get('window');
        return(
          <View style={styles.screen}>
              <View style={styles.VideoContainer}>
                <Text style={styles.Title}>The non-best game ever played was on a Wednesday in Chicago</Text>
                <View style={styles.Video}>
                <View style={styles.videoContainer}>
                    {/* <WebView
                        style={{flex:1}}
                        javaScriptEnabled={true}
                        source={{html: '<h1>Hello world</h1>'}}
                    /> */}
                    <Video 
                        //popeye uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'
                        //youtube uri does not work
                        source={{ uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"  //fill container bounds while preserving aspect ratio
                        useNativeControls={true}
                        shouldPlay
                        style={{ width, height: 260}}
                    />

                </View>
                {/* <Text style={styles.Video}>The video should play here</Text> */}
              </View>
            
            
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
    VideoContainer: {
        //flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        height: DEVICE_HEIGHT,
        width: DEVICE_WIDTH
        //borderColor: 'black',
        //borderWidth: 13
      },
    Title: {
        color: 'black',
        fontSize: 20,
        justifyContent: 'center',
        alignItems: 'center',
        //flex: 1,
        backgroundColor: 'white',
        height: '20%'
    },
    Video: {
        //flex: 3,
        backgroundColor: 'white',
        justifyContent: 'center',
        width: '100%',
        height: '60%'
    }
  });

  export default GeoVideo2