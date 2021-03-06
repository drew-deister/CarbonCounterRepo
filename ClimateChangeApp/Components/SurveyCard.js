//Ethan
//3/21/2020
// Survey card is essentially a scrollview contained an image and page title.
//             It represents one screen of the Carbon Counter Survey

import React, { Component } from 'react';
import {ScrollView, Text, StyleSheet, View, Image, TouchableOpacity} from "react-native";
import PropTypes from 'prop-types';
import { InfoModal } from "./InfoModal";
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import ParagraphView from "./ParagraphView";
import * as Progress from "react-native-progress";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange,
    removeOrientationListener,
  } from "react-native-responsive-screen";


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
            //used to determine whether ScrollView can be scrolled
            showingModal: false
        };
    }
    static propTypes = {
        title: PropTypes.string,
        imageSrc: PropTypes.string,
    }
    static defaultProps = {
        title: 'Household',
        imageName: 'Household',
        infoImageStyle: {},
        style: {},                      //used to change backgroundColor
        titleStyle: {},                 //used to change title text color
    }

    showInfoModalAndDisableScroll() {
        this.setState({showingModal: true})
        this.refs.infoModal.showInfoModal()
    }

    enableScroll() {
        this.setState({showingModal: false})
    }

    setScrollView = scrollView => {
        // NOTE: scrollView will be null when the component is unmounted
        this._scrollView = scrollView;
    };


    render() {
        return (
            <View style={styles.safeView}>
                <KeyboardAwareScrollView // this is similar to scrollview
                    resetScrollToCoords={{x: 0, y:0}}
                    extraScrollHeight={-30}
                    style={[styles.scrollViewStyle, this.props.style]}
                    contentContainerStyle = {styles.containerStyle}
                    scrollEnabled={!this.state.showingModal}
                    ref={this.setScrollView}>
                    <Image style = {styles.image} source = {images[this.props.imageName]} />
                    <View style={styles.titleContainer}>
                        <Text style={[styles.pageTitle, this.props.titleStyle]}
                              allowFontScaling={false}
                              >
                                {this.props.title}
                        </Text>
                            
                        <View style={styles.infoButtonContainer}>
                            <TouchableOpacity
                            style={styles.modalButtonContainer}
                            onPress={() => this.showInfoModalAndDisableScroll()}
                            >
                                <Image
                                    style={[styles.infoImage, this.props.infoImageStyle]}
                                    source={require("../assets/informationbutton.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <View>
                        {this.props.children}
                    </View>

                </KeyboardAwareScrollView>

                <View style={styles.progressBarContainer}>
                    <Progress.Bar
                        progress={this.props.progress}
                        width={null}
                        borderColor={"#F0F5DF"}
                        borderWidth={2}
                        color={"#F0F5DF"}
                    />
                </View>

                <InfoModal
                        ref={"infoModal"}
                        parentObject={this}
                        onClosed={() => this.enableScroll()}
                        modalStyle={{backgroundColor: this.props.modalBackgroundColor}}
                        xMarkStyle={{color: this.props.modalTextColor}}
                     >
                        <ParagraphView 
                            infoArr={this.props.infoArr}
                            infoTypeArr={this.props.infoTypeArr}
                            infoImageArr={this.props.infoImageArr}
                            textStyle={{color: this.props.modalTextColor}}
                            />
                        
                </InfoModal>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        shadowOpacity: .2,
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    scrollViewStyle: {
        marginTop: 18,
        backgroundColor: '#FCCCC0',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40,
    },
    image: {
        marginTop: 8,
        height: 180,
        width: 295,
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        alignItems: 'center',
        alignContent: 'center',
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
        fontWeight: '600',
        textAlign: 'center',
    },
    modalButtonContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    infoImage: {
        height: "100%",
        width: "100%",
      },
    infoButtonContainer: {
        marginLeft: 5,
        marginTop: 5,
        height: 25,
        width: 25,
    },
    progressBarContainer: {
        height: wp('12%'),
        justifyContent: 'center',
        paddingHorizontal: wp("8%"),
        opacity: .8,
        backgroundColor: "#73A388"
    }
    });

export default SurveyCard;