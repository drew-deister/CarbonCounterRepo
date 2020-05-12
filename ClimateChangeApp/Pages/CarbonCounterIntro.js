import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import * as SecureStore from 'expo-secure-store';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';

const INFO = INFORMATION["carbonCounterScreens"]["intro"];


export default class CarbonCounterIntroPage extends Component {

    constructor(props) {
        super(props);
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        //title: 'hello',
        //headerRight: HeaderNext,
    };

    resume() {
        this.props.navigation.navigate("Household")
        // I'm not sure if there will ever be an edge case where this is necessary, but just in case.
        SecureStore.setItemAsync("hasHousingBeenAccessed", JSON.stringify("true"))
        SecureStore.setItemAsync("hasTransportationBeenAccessed", JSON.stringify("true"))
        SecureStore.setItemAsync("hasDietBeenAccessed", JSON.stringify("true"))
        SecureStore.setItemAsync("hasShoppingBeenAccessed", JSON.stringify("true"))
        // Do this no matter what
        SecureStore.setItemAsync("hasResultsBeenAccessed", JSON.stringify("false"))
    }

    newSurvey() {
        this.props.navigation.navigate("Household")
        SecureStore.setItemAsync("hasHousingBeenAccessed", JSON.stringify("false"))
        SecureStore.setItemAsync("hasTransportationBeenAccessed", JSON.stringify("false"))
        SecureStore.setItemAsync("hasDietBeenAccessed", JSON.stringify("false"))
        SecureStore.setItemAsync("hasShoppingBeenAccessed", JSON.stringify("false"))
        // Do this no matter what
        SecureStore.setItemAsync("hasResultsBeenAccessed", JSON.stringify("false"))
    }

    render() {

        return (

            <View style={styles.container}>
                <View style={{
                            flex: 200,
                            justifyContent: "flex-end",
                            }}>
                    <Text style={styles.topText}>{INFO["title"]}</Text>
                </View>

                <View style={{flex: 365, justifyContent: "flex-begin"}}>
                    <Text style={styles.bottomText}>
                        {INFO["description"]}
                    </Text>
                </View>
            

                <View style={{flex: 200, justifyContent: "center"}}>
                    <AsafNextButton 
                        style = {{marginBottom: 0}}
                        // onPress={() => this.props.navigation.navigate("Household")}
                    >
                        Why Carbon?
                    </AsafNextButton>
                    <AsafNextButton
                        style = {{marginBottom: 0}}
                        onPress={() => this.newSurvey()}
                    >
                        New Survey
                    </AsafNextButton>
                    <AsafNextButton
                        onPress={() => this.resume()}
                    >
                        Resume
                    </AsafNextButton>
                </View>
            </View>
            
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      backgroundColor: "#F6F8EF",
  
      alignItems: "center"
    },
    topText: {
      color: "#73A388",
      fontSize: 34,
      paddingBottom: 20,
      textAlign: 'center',
      fontWeight: "bold",
      width: wp("82%"),
    },
    bottomText: {
      color: "#73A388",
      textAlign: "center",
      paddingTop: 20,
      fontWeight: "600",
      fontSize: 18,
      width: wp("82%") //300,
    },
  });