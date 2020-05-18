import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image} from "react-native";
import PropTypes from 'prop-types';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';


const images = {
    'Cards': require('../assets/Cards.png'),
    'Baseball': require('../assets/Baseball.png'),
}

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
        infoImageArr: [ ],
        textStyle: {color: "white"},
        
    }

    makeInfoSections() {
        if (this.props.infoImageArr.length === 0) {
            this.setImageArrToNull();
        }

        const infoList = []
        for (let i = 0; i < this.props.infoArr.length; ++i) {
            infoList.push(
                <View key={i} style={styles.individualTextContainer}>
                    <Text style={[styles[this.props.infoTypeArr[i]], this.props.textStyle]}>{this.props.infoArr[i]}</Text>  
                    {
                        this.props.infoImageArr[i] ?
                        <View style={styles.imageContainer}>
                            <Image style={styles.image}
                                source={images[this.props.infoImageArr[i]]}></Image>
                        </View>
                        : null
                    }
                </View>
            )
        }
        return infoList;
    }

    setImageArrToNull() {
        for (let i = 0; i < this.props.infoArr.length; ++i) {
            this.props.infoImageArr.push(null);
        }
    }

    render() {
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
    individualTextContainer: {
        flexDirection: "row",
    },
    image: {
        width: wp("21%"),
        height: wp("21%"),//100,
    },
    imageContainer: {
        flex: 3,
        justifyContent: "center",
        alignItems: "center"
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
        width: "100%"
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
        // width: "60%",
        // width: wp("82%") //300,
        marginBottom: 20,
        flex: 7,
    },
    subbodyWithImage: {

    }
});

export default ParagraphView;
