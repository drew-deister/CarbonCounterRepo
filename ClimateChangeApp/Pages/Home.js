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
    this.state = {};
  }

  static navigationOptions = {
    title: " ",
    headerTitle: LogoTitle,
    headerStyle: {backgroundColor: '#73A388',  height: 45, borderBottomWidth: 0},
    headerLeft: null
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
                        <Text style={styles.pageTitle}>Activities</Text>
                    </View>
                    
                    <HomeScreenActivityCard 
                        title = {"Carbon Counter"}      
                        navigateToActivity = 'CarbonCounter'//'Question1'
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
                            <Text style={styles.creditText}>Credit</Text>

                        </TouchableOpacity>

                    </View>

                    
                </ScrollView>
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
        paddingTop: 16,
    },
    pageTitle: {
        color: '#73A388',   //green
        fontSize: 23,
        height: 33,
        width: wp("62%"), //224
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
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
        // justifyContent: "flex-end"
        // backgroundColor: 'blue'
    },
    creditText: {
        // width: "75%", //211,
        color: '#73A388',
        fontSize: 20,
        fontWeight: '500',
        
    }
});
