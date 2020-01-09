import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon} from 'react-native-elements';
import {Button} from '../Components/Button';
import {NextButton} from '../Components/NextButton';
import {Question} from '../Components/Question_Lucas';
import {Separator} from '../Components/Separator';


class Question1 extends React.Component {
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Eating Habits',
    };

    render() {
        return(
            <View style={styles.container}>
                <Question>
                    What are your eating habits?
                </Question>
                <Separator />
                <Button onPress= {() =>
                    alert('Vegatarian')}>
                    Vegatarian
                </Button>
                <Button onPress= {() => 
                    alert('Everything')}>
                    I eat everything
                </Button>
                <Button onPress= {() => 
                    alert('Carnivore')}>
                    Only meat
                </Button>
                <NextButton onPress= {() =>  
                    this.props.navigation.navigate('Question2')}>
                    Next
                </NextButton>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    //   justifyContent: 'space-around',
      padding: 20,
    },
  });

export default Question1;