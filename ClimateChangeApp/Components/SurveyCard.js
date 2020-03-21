//Ethan
//3/21/2020
// Survey card is essentially a scrollview contained an image and page title.
//             It represents one screen of the Carbon Counter Survey

import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';



const images = {
    household: {source: require('../assets/Household.png')}
}

class SurveyCard extends React.Component {
    static propTypes = {
        title: PropTypes.string,
        imageSrc: PropTypes.string,
    }
    static defaultProps = {
        title: 'Household',
        imageSrc: '../assets/Household.png',
    }


    render() {
        return (
            <View style={styles.safeView}>
                <ScrollView style={styles.scrollViewStyle} contentContainerStyle = {styles.containerStyle}>
                    <Image style = {styles.image} source = {require('../assets/Household.png')} />
                    <Text style={styles.pageTitle}>{this.props.title}</Text>

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
    imageContainer: {
        height: 163,
        width: 280,
        backgroundColor: 'green',
    },
    image: {
        marginTop: 32,
        height: 163,
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
        fontSize: 50,
        height: 33,
        width: 224,
        fontWeight: '600',
        height: 80,
        width: 282,
        textAlign: 'center'
    }
});

export default SurveyCard;