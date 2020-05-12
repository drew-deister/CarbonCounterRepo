import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


class ParagraphView extends React.Component {

    constructor(props) {
        super(props);

    }

    static propTypes = {
        infoArr: PropTypes.array,
        infoTypeArr: PropTypes.array,
    }

    static defaultProps = {
        infoArr: ["Header Info", "Body Info", "Header Info", "Body Info"],
        infoTypeArr: ["header", "body", "header", "body"],
        textStyle: {color: "white"},
        
    }

    makeInfoSections() {
        const infoList = []
        for (let i = 0; i < this.props.infoArr.length; ++i) {
            infoList.push(
                <Text key={i} style={[styles[this.props.infoTypeArr[i]], this.props.textStyle]}>{this.props.infoArr[i]}</Text>
            )
        }
        return infoList;
    }


    makeAllSections() {
        const infoList = []
        for (let i = 0; i < this.props.infoArr.length; ++i) {
            if (this.props.infoTypeArr[i] == "body") {
                infoList.push(this.makeBody(i))
            } else if (this.props.infoTypeArr[i] == "header") {
                infoList.push(this.makeHeader(i))
            } else if (this.props.infoTypeArr[i] == "subheader") {
                infoList.push(this.makeSubheader(i))
            } else if (this.props.infoTypeArr[i] == "subbody") {
                infoList.push(this.makeSubbody(i))
            } else {
                infoList.push(this.makeInvalidTypeError(i))
            } 
            
        }
        return infoList;
    }

    

    makeHeader(i) {
        return (
            <Text key={i} style={styles["header"]}>{this.props.infoArr[i]}</Text>
        )
    }

    makeSubheader(i) {
        return(
            <Text key={i} style={styles.subheader}>{this.props.infoArr[i]}</Text>
        )
    }

    makeBody(i) {
        return (
            <Text key={i} style={styles.body}>{this.props.infoArr[i]}</Text>
        )
    }

    makeSubbody(i) {
        return (
            <Text key={i} style={styles.subbody}>{this.props.infoArr[i]}</Text>
        )
    }

    makeInvalidTypeError(i) {
        console.log("invalid infoTypeArr value at index: ", i)
        return (
            <Text key={i}>invalid infoTypeArr value at index: {i}</Text>
        )
    }


    render() {

        // const formattedInfo = this.makeAllSections();
        const formattedInfo = this.makeInfoSections();

        return (
            <View style={styles.container}>
                {formattedInfo}

            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        alignSelf: "center",
        width: "90%",

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
    },
    header: {
        color: "#73A388",
        fontSize: 26,
        marginBottom: 20,
        textAlign: 'center',
        fontWeight: "700",
        width: "100%",
    },
    subheader: {
        color: "#73A388",
        textAlign: "center",
        fontSize: 22,
        marginBottom: 10,
        fontWeight: "600",
    },
    body: { 
        color: "#73A388",
        textAlign: "left",
        // paddingTop: 20,
        fontWeight: "600",
        fontSize: 18,
        // width: wp("82%") //300,
        marginBottom: 40
    },
    subbody: { 
        color: "#73A388",
        textAlign: "left",
        // paddingTop: 20,
        fontWeight: "600",
        fontSize: 18,
        // width: wp("82%") //300,
        marginBottom: 20
    },
});

export default ParagraphView;
