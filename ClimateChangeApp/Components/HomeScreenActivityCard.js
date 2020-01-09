import React, { Component } from 'react';
import {StyleSheet, View, Image} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {HomeScreenActivityButton} from "./HomeScreenActivityButton"
import {Alert} from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';


class HomeScreenActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Image style = {styles.image} source = {require('../assets/small-fruit-tree-growing-on-earth.png')} />
                <HomeScreenActivityButton onPress= {() => 
                    this.props.navigation.navigate('Question1')}>
                    {this.props.title}
                </HomeScreenActivityButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        backgroundColor: '#0B7310',
        marginTop: 30,
        height: 150,
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'white',
        marginRight: 10,
        padding: 15,
    },
    image: {
        flex: 1,
        height: '100%',
        padding: 20
    }
});


export default HomeScreenActivityCard;