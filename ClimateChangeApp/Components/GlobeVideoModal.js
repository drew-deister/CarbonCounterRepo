import React, {Component} from 'react';
import {
    AppRegistry, Flatlist, StyleSheet, Text, View, Image, Alert,
    Platform, TouchableHighlight, Dimensions, TextInput
} from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';
import { Video } from 'expo-av';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

var screen = Dimensions.get('window');

export default class GlobeVideoModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            url: '', // may want to add a default here
        }
    }

    showGlobeVideoModal = (url) => {
        this.setState({url: url}); // set the url
        this.refs.myModal.open();
    }

    render() {
        const { width } = Dimensions.get('window');
        return (
            <Modal 
                ref = {"myModal"}
                style = {{
                    justifyContent: 'center',
                    borderRadius: Platform.OS === 'ios' ? 30 : 0,
                    shadowRadius: 10, 
                    width: wp("80%"),
                    height: hp("40%"),
                }}
                position = 'center'
                backdrop={true}
                // onClosed={() => {
                //     alert("modal closed.");
                // }}
            >
                <View style={styles.MainContainer}>
                    <Video
                    source={{ uri: this.state.url }}
                    style={styles.Video}
                    resizeMode="cover"      //fill container bounds while preserving aspect ratio
                    shouldPlay
                    useNativeControls={true}
                    rate={1.0}
                    isMute={false}
                    volume={1.0}
                    >
                    </Video>
                </View>
            </Modal>
        );
    }

}

const styles = StyleSheet.create({
    MainContainer: {
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
        height: '85%', // i believe this is 85% of the parent container
        width: '90%'
    }
  });
