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

class GeoVideo1 extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Around the world',
    };

    constructor(props) {
        super(props);
        this.index = 0;
        this.isSeeking = false;
        this.shouldPlayAtEndOfSeek = false;
        this.playbackInstance = null;
        this.state = {
          showVideo: false,
          muted: false,
          playbackInstancePosition: null,
          playbackInstanceDuration: null,
          shouldPlay: false,
          isPlaying: false,
          isBuffering: false,
          isLoading: true,
          fontLoaded: false,
          shouldCorrectPitch: true,
          volume: 1.0,
          rate: 1.0,
          videoWidth: DEVICE_WIDTH,
          videoHeight: VIDEO_CONTAINER_HEIGHT,
          poster: false,
          useNativeControls: false,
          fullscreen: false,
          throughEarpiece: false
        };
    }

    async _loadNewPlaybackInstance(playing) {
        if (this.playbackInstance != null) {
          await this.playbackInstance.unloadAsync();
          // this.playbackInstance.setOnPlaybackStatusUpdate(null);
          this.playbackInstance = null;
        }
    
        const source = { uri: "https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4" };
        const initialStatus = {
          shouldPlay: playing,
          rate: this.state.rate,
          shouldCorrectPitch: this.state.shouldCorrectPitch,
          volume: this.state.volume,
          isMuted: this.state.muted,
          isLooping: this.state.loopingType === LOOPING_TYPE_ONE
          // // UNCOMMENT THIS TO TEST THE OLD androidImplementation:
          // androidImplementation: 'MediaPlayer',
        };
    
        if (true) {
          console.log(this._onPlaybackStatusUpdate);
          await this._video.loadAsync(source, initialStatus);
          // this._video.onPlaybackStatusUpdate(this._onPlaybackStatusUpdate);
          this.playbackInstance = this._video;
          const status = await this._video.getStatusAsync();
        } else {
          const { sound, status } = await Audio.Sound.createAsync(
            source,
            initialStatus,
            this._onPlaybackStatusUpdate
          );
          this.playbackInstance = sound;
        }
    
        this._updateScreenForLoading(false);
    }

    _mountVideo = component => {
        this._video = component;
        this._loadNewPlaybackInstance(false);
    };

    _updateScreenForLoading(isLoading) {
        if (isLoading) {
          this.setState({
            showVideo: false,
            isPlaying: false,
            playbackInstanceName: LOADING_STRING,
            playbackInstanceDuration: null,
            playbackInstancePosition: null,
            isLoading: true
          });
        } else {
          this.setState({
            playbackInstanceName: "PLAYLIST[this.index].name",
            showVideo: true,
            isLoading: false
          });
        }
    }

    _onPlaybackStatusUpdate = status => {
        if (status.isLoaded) {
          this.setState({
            playbackInstancePosition: status.positionMillis,
            playbackInstanceDuration: status.durationMillis,
            shouldPlay: status.shouldPlay,
            isPlaying: status.isPlaying,
            isBuffering: status.isBuffering,
            rate: status.rate,
            muted: status.isMuted,
            volume: status.volume,
            loopingType: status.isLooping ? LOOPING_TYPE_ONE : LOOPING_TYPE_ALL,
            shouldCorrectPitch: status.shouldCorrectPitch
          });
          if (status.didJustFinish && !status.isLooping) {
            this._advanceIndex(true);
            this._updatePlaybackInstanceForIndex(true);
          }
        } else {
          if (status.error) {
            console.log(`FATAL PLAYER ERROR: ${status.error}`);
          }
        }
    };

    render() {
        return(
          <View style={styles.screen}>
              <View style={styles.VideoContainer}>
                <Text style={styles.Title}>The best game ever played was on a Wednesday in Cleveland</Text>
                <View style={styles.Video}>
                <View style={styles.videoContainer}>
                    {/* <WebView
                        style={{flex:1}}
                        javaScriptEnabled={true}
                        source={{html: '<h1>Hello world</h1>'}}
                    /> */}
                    <Video 
                        source={{ uri: 'https://ia800501.us.archive.org/11/items/popeye_i_dont_scare/popeye_i_dont_scare_512kb.mp4'}}
                        rate={1.0}
                        volume={1.0}
                        isMuted={false}
                        resizeMode="cover"  //fill container bounds while preserving aspect ratio
                        useNativeControls={true}
                        shouldPlay={true}
                    />
                    {/* ############ VIDEO Component ########## */}
                    <Video
                        ref={this._mountVideo}
                        style={[
                        styles.video,
                        {
                            opacity: this.state.showVideo ? 1.0 : 0.0,
                            width: this.state.videoWidth,
                            height: this.state.videoHeight
                        }
                        ]}
                        resizeMode={Video.RESIZE_MODE_CONTAIN}
                        onPlaybackStatusUpdate={this._onPlaybackStatusUpdate}
                        onLoadStart={this._onLoadStart}
                        onLoad={this._onLoad}
                        onError={this._onError}
                        onFullscreenUpdate={this._onFullscreenUpdate}
                        onReadyForDisplay={this._onReadyForDisplay}
                        useNativeControls={this.state.useNativeControls}
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
        flex: 1,
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 20,
        height: DEVICE_HEIGHT
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

  export default GeoVideo1