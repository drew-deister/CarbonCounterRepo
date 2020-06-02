import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
import INFORMATION from '../Utilities/text.json'

metricViewInfo = INFORMATION["carbonCounterScreens"]["results"]["metricView"];

const images = {
    'SolarPanel': require('../assets/SolarPanel.png'),
    'Car': require('../assets/Car.png'),
    'Tree': require('../assets/Tree.png'),
    'SmartPhone': require('../assets/iPhone.png'),
    'SolidCarbon': require('../assets/Charcoal.png')
}

const multiplier = {
  SolarPanel: 0.00172722,
  Tree: 1/48,
  Car: 1.1,
  SmartPhone: 57.8,
  SolidCarbon: 1/3.7
}

class MetricView extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        metricName: PropTypes.string,
        totalCo2: PropTypes.number,
    }
    static defaultProps = {
        metricName: 'Tree',
        totalCo2: 1,
        textStyle: {},
    }

    // formats numbers by adding commas if necessary, maintains decimals
    addCommas(nStr)
    {
        nStr += '';
        let x = nStr.split('.');
        let x1 = x[0];
        let x2 = x.length > 1 ? '.' + x[1] : '';
        let rgx = /(\d+)(\d{3})/;
        while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
        }
        return x1 + x2;
    }


    render() {
        return (
            <View style={[styles.container, this.props.containerStyle]}>
                    <View style={styles.shadow}>
                        <Image style = {styles.image} source = {images[this.props.metricName]} />
                    </View>
                    <Text style={[styles.text, this.props.textStyle]}
                              allowFontScaling={false}
                              >
                        {metricViewInfo[this.props.metricName][0]}
                        <Text style={styles.number}
                              allowFontScaling={false}
                              >
                            {this.addCommas(parseInt(this.props.totalCo2*multiplier[this.props.metricName]))}
                        </Text>
                        {metricViewInfo[this.props.metricName][1]}
                    </Text>

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        width: wp("80%"),
        alignItems: 'center'
    },
    image: {
        width: wp("35%"),
        height: wp("25%"),
    },
    text: {
        marginTop: 5,
        color: '#73A388',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
    number: {
        color: '#73A388',
        fontSize: 18,
        fontWeight: '700',
    },
    shadow: {
        shadowOpacity: .1,
    }
});

export default MetricView;
