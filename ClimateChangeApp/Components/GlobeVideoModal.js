import React, {Component} from 'react';
import {
    AppRegistry, Flatlist, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableOpacity, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { Audio, Video } from 'expo-av';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, INTERRUPTION_MODE_ANDROID_DUCK_OTHERS } from 'expo-av/build/Audio';

var screen = Dimensions.get('window');

export default class GlobeVideoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '', // may want to add a default here
            name: '',
        }
    }

    showGlobeVideoModal = (url, name) => {
        this.setState({url: url, name: name}); // set the url
        this.refs.myModal.open();
    }

    closeModal() {
        this.refs.myModal.close()
    }

    componentDidMount() {
        Audio.setAudioModeAsync({                                                                                                
            playsInSilentModeIOS: true,                                                                                                           
            allowsRecordingIOS: false,                                                                                                                                                                                   
            interruptionModeIOS: Audio. INTERRUPTION_MODE_IOS_DUCK_OTHERS,                                                                         
            shouldDuckAndroid: true,                                                                                                           
            interruptionModeAndroid: Audio.INTERRUPTION_MODE_ANDROID_DUCK_OTHERS,                                                                 
        });
    }

    

    render() {
        const { width } = Dimensions.get('window');
        return (
            <Modal 
                ref = {"myModal"}
                style = {styles.Modal}
                position = 'center'
                backdrop={true}
                swipeToClose={false}
            >
                <View style={styles.MainContainer}>
                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            right: 22,
                            top: 10,
                            // backgroundColor: 'blue'
                        }}
                        onPress={() => {
                            this.closeModal()}}>
                        <Text style={styles.xMark}
                              allowFontScaling={false}
                              >
                                X
                        </Text>
                    </TouchableOpacity>
                    <Text style = {styles.text}
                          allowFontScaling={false}
                          >
                            {this.state.name}
                    </Text>
                    <Video
                        source={{ uri: this.state.url }}
                        style={styles.Video}
                        resizeMode="cover"      //fill container bounds while preserving aspect ratio
                        shouldPlay
                        useNativeControls={true}
                        rate={1.0}
                        isMuted={false}
                        volume={1.0}
                        playsInSilentModeIOS={true}
                    />
                </View>
            </Modal>
        );
    }   

}

const styles = StyleSheet.create({
    
    topView: {
        width: '100%',
        flexDirection: 'row',
        backgroundColor: 'blue'
    },
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "300",
        paddingTop: 15
    }, 
    MainContainer: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        // backgroundColor: "blue",
        height: "100%",
        paddingBottom: 20,
        // borderColor: 'black',
        // borderWidth: 1
      },
    
    Modal: {
        justifyContent: "space-around",
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10, 
        width: wp("85%"),
        height: wp("75%"),
        backgroundColor: '#73A388',
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
        // borderColor: 'black',
        // borderWidth: 1,
        height: '75%', // i believe this is 85% of the parent container
        width: '90%'
    },
    xMark: {
        color: "white",
        fontSize: 30,
        fontWeight: "700",
      }
  });
