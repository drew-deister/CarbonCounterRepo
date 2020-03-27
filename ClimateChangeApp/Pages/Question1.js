// Drew Deister
// important notes
// 1) make sure to use push for navigation
// use wp and hp for layout if you need it 

// _______________HOUSING QUESTIONS_______________

import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Text, Icon, Button, Slider} from 'react-native-elements';
import {Header} from '../Components/Header';
import {Separator} from '../Components/Separator';
import {QuestionCard1} from './QuestionCard1';

class Question1 extends React.Component {

    constructor(props) {
        super(props);
        // this.state = {
        //     pressStatus: false,
        // }

    }
    
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: ' ',
    };

    // _onHideUnderlay() {
    //     this.setState({ pressStatus: false });
    // }
    // _onShowUnderlay() {
    //     this.setState({ pressStatus: true });
    // }

    // note that the navigation prop must be passed to the Question Card
    render() {
        return(
            <View style={styles.container}>
                <Header>
                    Housing
                </Header>
                <Separator />
                <QuestionCard1 navigation = {this.props.navigation} data = {data}/>
            </View>
            // <View style={styles.container}>
            //     <TouchableHighlight
            //         activeOpacity={1}
            //         style={
            //             this.state.pressStatus
            //                 ? styles.buttonPress
            //                 : styles.button
            //         }
            //         onHideUnderlay={this._onHideUnderlay.bind(this)}
            //         onShowUnderlay={this._onShowUnderlay.bind(this)}
            //     >
            //         <Text
            //             style={
            //                 this.state.pressStatus
            //                     ? styles.welcomePress
            //                     : styles.welcome
            //             }
            //         >
            //             {this.props.text}
            //         </Text>
            //     </TouchableHighlight>
            // </View>
        )
    }
}

const data = {

    zipCode: 'Zip Code', 
    zipCodePlaceholder: 'Enter your zipcode',

    homeSize: 'How big is your home (in square feet)?',

    numPeople: 'How many people do you live with?',
    numPeoplePlaceholder: 'Enter a number',

    homeSizeMin: 0,
    homeSizeMax: 4000,

}



// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: "center",
//         alignItems: "center",
//         backgroundColor: "#F5FCFF"
//     },
//     welcome: {
//         fontSize: 20,
//         textAlign: "center",
//         margin: 10,
//         color: "#000066"
//     },
//     welcomePress: {
//         fontSize: 20,
//         textAlign: "center",
//         margin: 10,
//         color: "#ffffff"
//     },
//     button: {
//         borderColor: "#000066",
//         borderWidth: 1,
//         borderRadius: 10
//     },
//     buttonPress: {
//         borderColor: "#000066",
//         backgroundColor: "#000066",
//         borderWidth: 1,
//         borderRadius: 10
//     }
// });





  
const styles = StyleSheet.create({    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 0,
    },
});



export default Question1;