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
        part1: "",
        part2: " solar panels operated for a year would offset your emissions.",
    },

    Tree: {
        part1: "A tree is most efficient at CO2 removal when it reaches ten years old. It would take ",
        part2: " 10-year-old trees would offset your emissions",
    },
    Car: {
        part1: "Your emissions are the same as driving ",
        part2: " miles in an average sedan",
    },
    SmartPhone: {
        part1: "Charging ",
        part2: " smartphones would produce a similar amount of CO2"
    },
}
const multiplier = {
  SolarPanel: 0.00172722,
  Tree: 1/48,
  Car: 1.1,
  SmartPhone: 57.8,
}

class MetricView extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        metricName: PropTypes.string,
        totalCO2: PropTypes.number,
    }
    static defaultProps = {
        metricName: 'Tree',
        totalCO2: 1,
        textStyle: {},
    }


    render() {
        return (
            <View style={styles.container}>
                    <View style={styles.shadow}>
                        <Image style = {styles.image} source = {images[this.props.metricName]} />
                    </View>
                    <Text style={[styles.text, this.props.textStyle]}>
                        {info[this.props.metricName].part1}
                        {parseInt(this.props.totalCo2*multiplier[this.props.metricName])}
                        {info[this.props.metricName].part2}
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
