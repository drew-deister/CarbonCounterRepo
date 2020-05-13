import React, {Component} from 'react';
import {View, StyleSheet, Text, Image} from 'react-native';
import { AsafNextButton } from "../Components/AsafNextButton";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
  } from 'react-native-responsive-screen';
import { InfoModal } from "../Components/InfoModal";
import ParagraphView from "../Components/ParagraphView";

const INFO = INFORMATION["carbonCounterScreens"]["intro"];


function LogoTitle() {
    return (
        //this should be replaced with right facing arrow but did not receive from jenna
      <Image
        style={{ width: 43, height: 43 }}
        source={require("../assets/CarbonXP_Logos/LeafLogo_2_Light.png")}
      />
    );
  }


export default class CarbonCounterIntroPage extends Component {

    constructor(props) {
        super(props);
        
    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        headerTitle: LogoTitle,
        headerStyle: {backgroundColor: "#73A388", height: 45},
        
    };

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
                        
                        onPress={() => this.refs.infoModal.showInfoModal()}
                    >
                        Why Carbon?
                    </AsafNextButton>
                    <AsafNextButton
                        onPress={() => this.props.navigation.navigate("Household")}
                    >
                        Continue
                    </AsafNextButton>
                </View>
                <InfoModal
                    ref={"infoModal"}
                    parentObject={this}
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