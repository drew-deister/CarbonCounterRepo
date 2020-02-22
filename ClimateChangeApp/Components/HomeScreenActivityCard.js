import React, { Component } from 'react';
import {StyleSheet, View, Image} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {HomeScreenActivityButton} from "./HomeScreenActivityButton"
import {Alert} from "react-native";
import { heightPercentageToDP } from 'react-native-responsive-screen';
import PropTypes from 'prop-types';


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
        navigateToActivity: 'Question1',
    }

    render() {
        return (
            <View style={styles.container}>
                {/*<Image style = {styles.image} source = {require('../assets/small-fruit-tree-growing-on-earth.png')} />*/}
                <View style={styles.blankView}></View>
                <HomeScreenActivityButton 
                    style = {{flex: 2}} 
                            onPress= {() => 
                    this.props.navigation.navigate(this.props.navigateToActivity)}>
                    {this.props.title}
                {/* <Image style = {styles.image} source = {require('../assets/small-fruit-tree-growing-on-earth.png')} /> */}
                {/* <HomeScreenActivityButton onPress= {() => 
                    this.props.navigation.navigate(this.props.navigateToActivity)}>
                    {this.props.title} */}
                </HomeScreenActivityButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        width: '80%',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#73A388',//'#0B7310',
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
    },
    blankView: {
        flex: 3,
    }
    
});


export default HomeScreenActivityCard;