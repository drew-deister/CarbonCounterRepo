import React, { Component } from "react";
import HomeScreenActivityCard from "../Components/HomeScreenActivityCard";
import { ScrollView, View, StyleSheet, Image, TouchableOpacity } from "react-native";
import { Button, Text, Card, Icon } from "react-native-elements";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange,
  removeOrientationListener,
} from "react-native-responsive-screen";
import InfoModal from '../Components/InfoModal';
import ParagraphView from '../Components/ParagraphView';
import INFORMATION from '../Utilities/text.json';
import TextLink from '../Components/TextLink';

const INFO = INFORMATION["homeScreen"]

//import { black } from 'react-native-paper/lib/typescript/src/styles/colors';

function LogoTitle() {
  return (
    <Image
      style={{ width: 200, height: 40 }}
      source={require("../assets/CarbonXP_Logos/NameLogo_Light.png")}
    />
  );
}

export default class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
        showingModal: false
    };
  }

  static navigationOptions = {
    title: " ",
    headerTitle: LogoTitle,
    headerStyle: {backgroundColor: '#73A388',  height: 45, borderBottomWidth: 0},
    // headerLeft: null
  };

  setScrollView = scrollView => {
    // NOTE: scrollView will be null when the component is unmounted
    this._scrollView = scrollView;
  };

  componentDidMount() {
    this.flashScroll();
    
  }

  flashScroll() {
    setTimeout(() => {
        this._scrollView.flashScrollIndicators();
    }, 200)
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

    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        
 
        return (
            <View style={styles.safeView}>
                
                <ScrollView style = {styles.scrollview}
                            contentContainerStyle = {styles.containerStyle}
                            ref={this.setScrollView}
                            // parentObject={this}
                            >
                    {/* <View style={styles.mainContainer}> */}
                    <View style = {styles.imageContainer}>
                            <Image style = {styles.image} source = {require('../assets/Home.png')} />
                    </View>

                    <View style={styles.headerTextContainer}>
                        <Text style={styles.pageTitle}
                              allowFontScaling={false}
                              >
                                  Activities
                        </Text>
                            
                        <View style={[styles.infoButtonContainer]}>
                            <TouchableOpacity
                            style={styles.modalButtonContainer}
                            onPress={() => this.showInfoModalAndDisableScroll()}
                            >
                                <Image
                                    style={styles.infoImage}
                                    source={require("../assets/informationbutton.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {/* <View style={styles.headerTextContainer}>
                        <Text style={styles.pageTitle}>Activities</Text>
                    </View> */}
                    
                    <HomeScreenActivityCard 
                        title = {"Carbon Counter"}      
                        navigateToActivity = 'CarbonCounter'
                        navigation = {this.props.navigation}
                        style = {{backgroundColor: '#FCCCC0'}}
                        />
                        
                    <HomeScreenActivityCard
                        title = {"WePlanet"}
                        navigateToActivity = 'WePlanet'
                        navigation = {this.props.navigation}
                        style = {{backgroundColor: '#73A388'}}
                        />

                        
               
                    <View style={styles.creditButtonContainer}>
                        <TouchableOpacity style={styles.creditButton}
                                            onPress={() => 
                                            this.props.navigation.navigate("Credit")
                                            }>
                            <Text style={styles.creditText}
                              allowFontScaling={false}
                              >
                                  Credit
                            </Text>

                        </TouchableOpacity>

                    </View>

                    
                </ScrollView>
                <InfoModal
                        ref={"infoModal"}
                        parentObject={this}
                        onClosed={() => this.enableScroll()}
                        modalStyle={{backgroundColor: "#F6F8EF"}}
                        xMarkStyle={{color: "#73A388"}}
                     >
                        <ParagraphView 
                            infoArr={INFO["info"]}
                            infoTypeArr={INFO["infoTypes"]}
                            textStyle={{color: "#73A388"}}
                            />
                        
                </InfoModal>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
        // marginBottom: 20,
    },
    // mainContainer: {
    //     width: wp('100%'),
    //     backgroundColor: 'white'
    // },
    imageContainer: {
        height: wp("38.85%"), // ratio of height : width should be 
        width: wp("92%"),     //       wp("38%") : wp("90%")
    },
    containerStyle: {
        flexGrow: 1,
        paddingTop: 25,
        padding: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center',
        backgroundColor: 'white'
    },
    scrollview: {
        paddingTop: 0,
        backgroundColor: "white",//"#F0F5DF"
    },
    image: {
        height: '130%',
        width: '100%',
    },
    headerTextContainer: {
        flexDirection: "row",
        alignItems: "center",
        // justifyContent: "center",
        paddingTop: 16,
        width: wp("62%"),
    },
    modalButtonContainer: {
        width: "100%",
        height: "100%",
        alignItems: "center",
    },
    infoImage: {
        height: "100%",
        width: "100%",
        tintColor: '#73A388'
      },
    infoButtonContainer: {
        marginLeft: 5,
        marginTop: 5,
        height: 25,
        width: 25,
    },
    // titleContainer: {
    //     flexDirection: "row",
    //     alignItems: "center",
    //     justifyContent: "center",
    //     marginTop: 15,
    //     height: 60,
    //     width: 280,
    // },
    pageTitle: {
        color: '#73A388',   //green
        fontSize: 30,
        // textAlign: "center",
        // height: 33,
        // width: wp("62%"), //224
        fontWeight: '700',
    },
    creditButtonContainer: {
        paddingTop: 16,
        paddingBottom: 30,
    },
    creditButton: {
        width: wp("75%"), //271
        height: 35,//hp("6%"),//146,
        borderRadius: 30,
        backgroundColor: '#F0F5DF', 
        alignItems: 'center',
        borderColor: '#73A388',
        // shadowRadius: 4,
        shadowOpacity: .2,
        // borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
        // justifyContent: "flex-end"
    },
    creditText: {
        // width: "75%", //211,
        color: '#73A388',
        fontSize: 20,
        fontWeight: '600',
        
    }
});
