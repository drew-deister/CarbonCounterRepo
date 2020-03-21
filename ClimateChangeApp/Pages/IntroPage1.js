import React, { Component } from 'react';
import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {ScrollView, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { NextButton } from '../Components/NextButton';
import {Button, Text, Card, Icon} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';



export default class IntroPage extends Component {
    

    // "main method"
    render() {
        const {navigate} = this.props.navigation;
        return (
           
         // make tucgabke opeacity ebntire page


        //    <View style = {styles.container}>

        //     <NextButton onPress= {() =>  
        //             this.props.navigation.navigate('Home')} style = {styles.nextButton}>
        //             Next

        //     </NextButton>

               
        //     <Image 
        //         style = {styles.image}
        //         source = {require('../assets/Logo.png')} />
               

        //         <View style = {styles.penis}> 
        //         <Text style = {styles.words}> Hello </Text>
        //         </View>


        //     </View>   



        <TouchableOpacity 
            style = {styles.container} 
            onPress= {() => this.props.navigation.navigate('Home')} style = {styles.container}> 

            <Image style = {styles.image} source = {require('../assets/Logo.png')} />


        </TouchableOpacity>
           
        );
    }
}


const styles = StyleSheet.create({
    container: { // dont need this but keep it for reference sake 
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#F6F8EF',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },
    image: {
        backgroundColor: 'transparent',
        height: 133.48,
        width: 147.19,
        resizeMode: 'cover',
        alignItems: 'center',
    },
    penis: {
        backgroundColor: 'black',
    },
    words: {
        color: 'white', 
    }, 
    
    
   
});
