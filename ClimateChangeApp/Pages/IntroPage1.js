import React, { Component } from 'react';
import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {Button, Text, Card, Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';


function LogoTitle() {
    return (
      <Image
        style={{ width: 50, height: 50 }}
        source={require('../assets/Logo.png')}
      />
    );
  }

export default class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: ' ',
        headerTitle: LogoTitle
    };


    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style = {styles.container}>
                <View style = {styles.container}>
                    <Image style = {styles.image} source = {require('../assets/Home.png')} />
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Activities</Text>
                </View>
                
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container: { // dont need this but keep it for reference sake 
        flexDirection: 'column',
        backgroundColor: 'white',
        //marginTop: 25,
        height: '21%',
        width: '100%',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        paddingTop: 20,
        //backgroundColor: 'black',
        height: 200,
        width: 350,
        resizeMode: 'cover',
        
    },
    headerTextContainer: {
        
    },
    headerText: {
        color: '#73A388',   //green
        fontSize: 18,
        fontWeight: '600',
    }
});
