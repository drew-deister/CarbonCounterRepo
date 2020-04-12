import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

const images = {
    'SolarPanel': require('../assets/SolarPanel.png'),
    'Car': require('../assets/Car.png'),
    'Tree': require('../assets/Logo.png'),
    'SmartPhone': require('../assets/iPhone.png'),
}

const info = {
    SolarPanel: {
        part1: "On a sunnay day, ",
        part2: " solar panels will offset your footprint.",
    },
        
    Tree: {
        part1: "Over the course of a year, ",
        part2: " 10-year-old trees would offset your emmissions",
    },
    Car: {
        part1: "Your emissions are similar to driving ",
        part2: " miles in an average sedan",
    },
    SmartPhone: {
        part1: "In one day, charging ",
        part2: " smartphones would produce a similar amount of CO2"
    },
}

class MetricView extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        metricName: PropTypes.string,
    }
    static defaultProps = {
        metricName: 'Tree',
        textStyle: {},
    }


    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.shadow}>
                        <Image style = {styles.image} source = {images[this.props.metricName]} />
                    </View>
                    <Text style={[styles.text, this.props.textStyle]}>
                        {info[this.props.metricName].part1}23,700{info[this.props.metricName].part2}
                    </Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        width: wp("80%"),
        // borderColor: 'black',
        // borderWidth: 1,
        alignItems: 'center'
    },
    image: {
        width: wp("35%"),
        height: wp("25%"),//100,
    },
    text: {
        marginTop: 5,
        color: '#73A388',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
      },
    shadow: {
        shadowOpacity: .1,
    }
});

export default MetricView;