import React, { Component } from "react";
import HomeScreenActivityCard from "../Components/HomeScreenActivityCard";
import { ScrollView, View, StyleSheet, Image } from "react-native";
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
      style={{ width: 50, height: 50 }}
      source={require("../assets/Logo.png")}
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
  };

    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.safeView}>
                
                <ScrollView style = {styles.scrollview} contentContainerStyle = {styles.containerStyle}>
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
                        navigateToActivity = 'GeoVideo1'
                        navigation = {this.props.navigation}
                        style = {{backgroundColor: '#73A388'}}
                        />
                        
                    <HomeScreenActivityCard 
                        // default title: 'Activity'
                        // default navigateToActivity: 'Question1'
                        //navigateToActivity = 'Question1'
                        navigation = {this.props.navigation}
                        /> 
                    <HomeScreenActivityCard navigation = {this.props.navigation} />
                    {/*<HomeScreenActivityCard navigation = {this.props.navigation} />*/}
                </ScrollView>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    imageContainer: {
        height: wp("38.85%"), // ratio of height : width should be 
        width: wp("92%"),     //       wp("38%") : wp("90%")
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    scrollview: {
        paddingTop: 25,
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
        width: 224,
        fontWeight: '600',
    }
});
