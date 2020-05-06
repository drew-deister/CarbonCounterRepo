// Author: Lucas Goldman
// Email: lucas.r.goldman@vanderbilt.edu
// Date: 5/05/20

//Change++ Logo Component
//Props:
// developedBy: boolean - true if would like it say "Devloped By" above the logo
// diameter: number - logo diameter *Required
// fontSize: number
// alignItems: string - has the values as alignItems in the flexbox
//source: number - link to logo in project *Required
// Note: when passing source, must require the source
// Ex: source = require('../assets/changeplusplus.png')


import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

const logo = require('../assets/changeplusplus.png');

class ChangeLogo extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        developedBy: PropTypes.bool,
        diameter: PropTypes.number,
        fontSize: PropTypes.number,
        alignItems: PropTypes.string,
        source: PropTypes.number,
    }
    static defaultProps = {
        developedBy: true, //true if would like it say Devloped By above the logo
        diameter: wp("50%"), //diameter of logo
        fontSize: 20,
        alignItems: 'center', //has the values as alignItems in the flexbox
        source: logo,
    }

    developedBy() {
      if(this.props.developedBy){
        return "Developed By";
      }
      else
      {
        return "";
      }
    }
    render() {


        return (
          <View style={[styles.container, {alignItems: this.props.alignItems}]}>
            <Text style = {[styles.text, {fontSize: this.props.fontSize}]}>
            {this.developedBy()}
            </Text>
            <View style={styles.shadow}>
              <Image style =
                {{width: this.props.diameter, height: this.props.diameter}}
               source = {this.props.source} />
            </View>
          </View>
        )
      }
    }





const styles = StyleSheet.create({
    container: {
        width: wp("100%"),
    },
    text: {
        marginBottom: 5,
        color: 'black',
        fontWeight: '600',
      },
    shadow: {
        shadowOpacity: .1,
    }
});
export default ChangeLogo;
