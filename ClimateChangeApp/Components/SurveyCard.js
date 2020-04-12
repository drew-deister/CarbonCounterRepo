//Ethan
//3/21/2020
// Survey card is essentially a scrollview contained an image and page title.
//             It represents one screen of the Carbon Counter Survey

import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';



const images = {
    'Household': require('../assets/Household.png'),
    'Transportation': require('../assets/Transportation.png'),
    'Diet': require('../assets/Diet.png'),
    'Shopping': require('../assets/Shopping.png')
}

var household = require('../assets/Household.png');

class SurveyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: '../assets/Household.png'
        };
        //nextScreen: props.children;
    }
    static propTypes = {
        title: PropTypes.string,
        imageSrc: PropTypes.string,
    }
    static defaultProps = {
        title: 'Household',
        imageName: 'Household',
        style: {},                      //used to change backgroundColor
        titleStyle: {},                 //used to change title text color
    }


    render() {
        return (
            <View style={styles.safeView}>
                <ScrollView style={[styles.scrollViewStyle, this.props.style]} contentContainerStyle = {styles.containerStyle}>
                    <Image style = {styles.image} source = {images[this.props.imageName]} />
                    <Text style={[styles.pageTitle, this.props.titleStyle]}>{this.props.title}</Text>
                    <View>
                        {this.props.children}
                    </View>

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    scrollViewStyle: {
        marginTop: 35,
        backgroundColor: '#FCCCC0',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    image: {
        marginTop: 32,
        height: 170,
        width: 280,
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        //justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    pageTitle: {
        marginTop: 20,
        color: 'white',
        fontSize: 42,
        height: 33,
        width: 224,
        fontWeight: '600',
        height: 80,
        width: 282,
        textAlign: 'center'
    }
});

export default SurveyCard;