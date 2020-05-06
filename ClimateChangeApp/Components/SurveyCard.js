//Ethan
//3/21/2020
// Survey card is essentially a scrollview contained an image and page title.
//             It represents one screen of the Carbon Counter Survey

import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import { AsafNextButton } from "./AsafNextButton";
import { InfoModal } from "./InfoModal";
import { Row } from 'native-base';



const images = {
    'Household': require('../assets/Household.png'),
    'Transportation': require('../assets/Transportation.png'),
    'Diet': require('../assets/Diet.png'),
    'Shopping': require('../assets/Shopping.png')
}

var household = require('../assets/Household.png');

class SurveyCard extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            imageSrc: '../assets/Household.png'
        };
        //nextScreen: props.children;
    }
    static propTypes = {
        title: PropTypes.string,
        imageSrc: PropTypes.string,
        // nextScreen: PropTypes.string,
    }
    static defaultProps = {
        title: 'Household',
        imageName: 'Household',
        style: {},                      //used to change backgroundColor
        titleStyle: {},                 //used to change title text color
        // nextScreen: 'Home',
    }

    //     <TouchableOpacity
    //       style={styles.modalButtonContainer}
    //       onPress={() => this.refs.infoModal.showInfoModal()}
    //     >
    //       <Image
    //         style={styles.infoImage}
    //         source={require("../assets/informationbutton.png")}
    //       />
    //     </TouchableOpacity>

    //     <Text style={styles.bottomText}>
    //       CarbonXD is an educational app created to bring awareness to the
    //       importance of global internconnectedness of human activity and the
    //       environment.
    //     </Text>

    //     <AsafNextButton
    //       onPress={() => this.props.navigation.navigate("IntroPage3")}
    //       style={styles.buttonDesign}
    //     >
    //       Next
    //     </AsafNextButton>

        // <InfoModal
        //   ref={"infoModal"}
        //   parentObject={this}
        //   style={StyleSheet.modalText}
        // >
        //   Asaf Is a virgin
        // </InfoModal>


    render() {
        return (
            <View style={styles.safeView}>
                <ScrollView style={[styles.scrollViewStyle, this.props.style]} contentContainerStyle = {styles.containerStyle}>
                    <Image style = {styles.image} source = {images[this.props.imageName]} />
                    <View style={styles.titleContainer}>
                        <Text style={[styles.pageTitle, this.props.titleStyle]}>{this.props.title}</Text>
                            
                        <View style={styles.infoButtonContainer}>
                            <TouchableOpacity
                            style={styles.modalButtonContainer}
                            onPress={() => this.refs.infoModal.showInfoModal()}
                            >
                            <Image
                                style={styles.infoImage}
                                source={require("../assets/informationbutton.png")}
                            />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <InfoModal
                        ref={"infoModal"}
                        parentObject={this}
                        style={StyleSheet.modalText}
                     >
                        Asaf Is cool
                    </InfoModal>

                    <View>
                        {this.props.children}
                    </View>
                    {/* <AsafNextButton
                            onPress={() => this.props.navigation.push(this.props.nextScreen)}
                            >
                            Next
                    </AsafNextButton> */}

                </ScrollView>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        shadowOpacity: .2
    },
    scrollViewStyle: {
        marginTop: 35,
        backgroundColor: '#FCCCC0',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    image: {
        marginTop: 32,
        height: 180,
        width: 295,
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        //justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        //shadowOpacity: .1,
    },
    titleContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginTop: 15,
        height: 60,
        width: 280,
    },
    pageTitle: {
        color: 'white',
        fontSize: 42,
        // paddingLeft: 40,
        //width: 224,
        fontWeight: '600',
        textAlign: 'center',
    },
    modalButtonContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
        margin: "15%",
    },
    infoImage: {
        height: "100%",
        width: "100%",
      },
    infoButtonContainer: {
        height: 20,
        width: 20,
    }
});

export default SurveyCard;