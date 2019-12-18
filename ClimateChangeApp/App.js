import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button} from './Components/Button';
import {Question} from './Components/Question';
import {Separator} from './Components/Separator';


const text = 'Tap me';


export default function App() {
  return (
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
        Only Meat
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    //justifyContent: 'space-around',
    padding: 20,
  },
});
