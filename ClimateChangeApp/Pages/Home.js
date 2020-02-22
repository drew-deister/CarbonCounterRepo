import React, { Component } from 'react';
import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {ScrollView, View, StyleSheet, Image} from 'react-native';
import {Button, Text, Card, Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

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
            <ScrollView style = {styles.scrollview} contentContainerStyle = {styles.containerStyle}>
                <View style = {styles.container}>
                    <Image style = {styles.image} source = {require('../assets/Home.png')} />
                </View>
                <View style={styles.headerTextContainer}>
                    <Text style={styles.headerText}>Activities</Text>
                </View>
                
                

                <HomeScreenActivityCard title = {"Count some carbon!"} navigation = {this.props.navigation} style={styles.carbonCounterButton}/>
                <HomeScreenActivityCard title = {"Around the World"} navigation = {this.props.navigation} />
                <HomeScreenActivityCard title = {"Activity #3"} navigation = {this.props.navigation} />
                <HomeScreenActivityCard title = {"Activity #4"} navigation = {this.props.navigation} />
                <HomeScreenActivityCard title = {"Activity #5"} navigation = {this.props.navigation} />
            </ScrollView>
            
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
    containerStyle: {
        marginTop: 0,
        padding: 0,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    scrollview: {
        paddingTop: '14%',
        marginLeft: 5,
        marginRight: 5,
        //height: '60%'
    },
    image: {
        paddingTop: 20,
        //backgroundColor: 'black',
        height: 200,
        width: 350,
        resizeMode: 'cover',
        
    },
    carbonCounterButton: {
        backgroundColor: '#FCCCC0'  //pink
    },
    headerTextContainer: {
        
    },
    headerText: {
        color: '#73A388',   //green
        fontSize: 18,
        fontWeight: '600',
    }
});