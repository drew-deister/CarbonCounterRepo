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
            <ScrollView>
                <HomeScreenActivityCard title = {"Count some carbon!"} navigation = {this.props.navigation} />
            </ScrollView>

        )
    }
}

export default Home;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: 'red',
        marginTop: 30,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
});