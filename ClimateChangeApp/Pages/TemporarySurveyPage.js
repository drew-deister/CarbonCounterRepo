import React, {Component} from 'react';
import {ScrollView, View, StyleSheet, Image, Text} from 'react-native';
import SurveyCard from '../Components/SurveyCard';



export default class TempPage extends Component {
    render() {

        return (
            <SurveyCard
                title='Transportation'
                imageName='Transportation'
                style={{backgroundColor: '#F0F5DF'}}
                titleStyle={{color: '#73A388'}} >
                    
                <Text>Hello</Text>
            </SurveyCard>
            // <View style={styles.safeView}>
            //     <ScrollView style={styles.scrollViewStyle} contentContainerStyle = {styles.containerStyle}>
            //         <Image style = {styles.image} source = {require('../assets/Household.png')} />
            //         <Text style={styles.pageTitle}>Household</Text>

            //     </ScrollView>
            // </View>
        );
    }

}

const styles = StyleSheet.create({
    safeView: {
        flex: 1,
    },
    scrollViewStyle: {
        marginTop: 35,
        backgroundColor: '#FCCCC0',
        borderTopRightRadius: 40,
        borderTopLeftRadius: 40
    },
    imageContainer: {
        height: 163,
        width: 280,
        backgroundColor: 'green',
    },
    image: {
        marginTop: 32,
        height: 163,
        width: 280,
    },
    containerStyle: {
        flexGrow: 1,
        marginTop: 0,
        padding: 0,
        //justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'center'
    },
    pageTitle: {
        marginTop: 20,
        color: 'white',
        fontSize: 50,
        height: 33,
        width: 224,
        fontWeight: '600',
        height: 80,
        width: 282,
        textAlign: 'center'
    }
});