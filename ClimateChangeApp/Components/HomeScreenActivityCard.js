//Originally created by Drew
//Edited by Ethan

import React, { Component } from 'react';
import {StyleSheet, View, Image} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {Alert} from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


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
            <View style={[styles.container, this.props.containerStyle]}>
                <TouchableOpacity style={[styles.button, this.props.style]}
                    onPress={() => this.props.navigation.navigate(this.props.navigateToActivity)}>
                    <Text style={styles.activityTitle}
                              allowFontScaling={false}
                              >
                                  {this.props.title}
                    </Text>
     
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 16,
        shadowOpacity: .2,
    },
    button: {
        width: wp("75%"), //271
        height: 146,//hp("22%"),
        borderRadius: 30,
        backgroundColor: '#9AD1F2', 
        alignItems: 'center',
        justifyContent: "flex-end",
        // shadowOpacity: .2,
        // shadowRadius: 2,
        // backgroundColor: 'blue'
    },
    activityTitle:{
        marginBottom: 18,
        // height: 26,
        width: "75%", //211,
        color: 'white',
        fontSize: 23,
        fontWeight: '600',
        // backgroundColor: 'blue' 
      }
    
});


export default HomeScreenActivityCard;