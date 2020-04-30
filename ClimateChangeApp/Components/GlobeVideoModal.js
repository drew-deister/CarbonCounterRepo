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
            name: '',
        }
    }

    showGlobeVideoModal = (url, name) => {
        this.setState({url: url, name: name}); // set the url
        this.refs.myModal.open();
    }

    render() {
        const { width } = Dimensions.get('window');
        return (
            <Modal 
                ref = {"myModal"}
                style = {styles.Modal}
                position = 'center'
                backdrop={true}
            >
                <View style={styles.MainContainer}>
                    <Text style = {styles.text}>{this.state.name}</Text>
                    <Video
                    source={{ uri: this.state.url }}
                    style={styles.Video}
                    resizeMode="cover"      //fill container bounds while preserving aspect ratio
                    shouldPlay
                    useNativeControls={true}
                    rate={1.0}
                    isMute={false}
                    volume={1.0}
                    />
                </View>
            </Modal>
        );
    }   

}

const styles = StyleSheet.create({
    text: {
        color: "white",
        fontSize: 20,
        fontWeight: "200",
        
    }, 
    MainContainer: {
        flexDirection: "column",
        alignItems: 'center',
        justifyContent: 'space-around',
        padding: 0,
        // borderColor: 'black',
        // borderWidth: 1
      },
    
    Modal: {
        justifyContent: 'center',
        borderRadius: Platform.OS === 'ios' ? 30 : 0,
        shadowRadius: 10, 
        width: wp("85%"),
        height: hp("60%"),
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
        height: '85%', // i believe this is 85% of the parent container
        width: '100%'
    }
  });
