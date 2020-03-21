import React, { Component } from 'react';
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {ScrollView, View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { AsafNextButton } from '../Components/AsafNextButton';
// import {Button, Text, Card, Icon} from 'react-native-elements';
// import {
//     widthPercentageToDP as wp,
//     heightPercentageToDP as hp,
//     listenOrientationChange, removeOrientationListener
// } from 'react-native-responsive-screen';



export default class IntroPage extends Component {
    

    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        return (
           
        
           <View style = {styles.container}>

             <AsafNextButton onPress= {() => this.props.navigation.navigate('Home')}>
                   Next
             </AsafNextButton>

            <Text style = {styles.topText}>
                What is Climate Cultivation?
            </Text>

            <Text style = {styles.bottonText}>
            Climate Cultivation is an educational app created to bring awareness to the importance of global interconnectedness of human activity and the environment.
            </Text>




             </View>   

           
        );
    }
}


const styles = StyleSheet.create({
    container: { 
        flex: 1,
        backgroundColor: '#F6F8EF',
        justifyContent: 'center',
        alignItems: 'center', 
        borderWidth: 1, 
        borderColor: '#707070', 
        
    },
    nextButton: {
        color: '#73A388', 
        paddingTop: 680
    },
    topText: {
        color: '#73A388', 
        alignItems: 'center',
    },
    bottonText: {
        color: '#73A388',
        alignItems: 'center',

    }

});
