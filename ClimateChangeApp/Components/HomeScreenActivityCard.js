//Originally created by Drew
//Adopted by Ethan

import React, { Component } from 'react';
import {StyleSheet, View, Image} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
// import {HomeScreenActivityButton} from "./HomeScreenActivityButton"
import {Alert} from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';


class HomeScreenActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        //nextScreen: props.children;
    }
    static propTypes = {
        title: PropTypes.string,
        navigateToActivity: PropTypes.string
    }
    static defaultProps = {
        title: 'Activity',
        navigateToActivity: 'Household',    //options route? does something similar
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity style={[styles.button, this.props.style]}
                    onPress={() => this.props.navigation.navigate(this.props.navigateToActivity)}>
                    <Text style={styles.activityTitle}>{this.props.title}</Text>
     
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
    },
    button: {
        width: 271,
        height: 146,
        borderRadius: 30,
        backgroundColor: '#9AD1F2', 
        alignItems: 'center',
    },
    activityTitle:{
        marginTop: 100,
        height: 33,
        width: 211,
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
      }
    
});


export default HomeScreenActivityCard;