import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import {Alert} from "react-native";


class HomeScreenActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style = {styles.text}> Carbon Counter </Text>
                <Button
                    title = {this.props.title}
                    buttonStyle={{marginLeft: 5, marginRight: 5, marginBottom: 5}}
                    onPress={() =>  this.props.navigation.navigate('Questions')} // this is where you navigate
                    // we want this to present a Question page
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        backgroundColor: '#0B7310',
        marginTop: 30,
        height: 100,
        borderRadius: 20,
        justifyContent: 'center',
    },
    button: {
        flex: 1,
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center'
    }
});


export default HomeScreenActivityCard;