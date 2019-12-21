import React, { Component } from 'react';
import HomeScreenActivityCard from './HomeScreenActivityCard';
import {ScrollView, View, StyleSheet} from 'react-native';
import {Button, Text, Card, Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    static navigationOptions = {
        title: 'Welcome',
    };

    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        return (
            <ScrollView style = {styles.scrollview}>
                <HomeScreenActivityCard title = {"Count some carbon!"} navigation = {this.props.navigation} />
            </ScrollView>

        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: { // dont need this but keep it for reference sake 
        flexDirection: 'column',
        backgroundColor: 'red',
        marginTop: 30,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    scrollview: {
        marginLeft: 5,
        marginRight: 5,
    }
});