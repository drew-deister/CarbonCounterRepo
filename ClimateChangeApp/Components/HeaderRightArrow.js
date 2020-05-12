import React, { Component } from "react";
import { Text, View, StyleSheet, TouchableOpacity, Button, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";


export default class HeaderRightArrow extends Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {


        // metricName: PropTypes.string,
        // totalCO2: PropTypes.number,
    }
    static defaultProps = {
        onPress: () => alert('This is not a button!'),
        tintColor: '#F0F5DF'

    }


    render() {
        return (
            <TouchableOpacity
                style={{width: 30, height: 30}}
                onPress={this.props.onPress}>
                <Image
                    style={{width: "100%", height: "100%", tintColor: this.props.tintColor}}
                    source={require("../assets/RightArrow.png")}>

                </Image>

            </TouchableOpacity>
        )
    }
}