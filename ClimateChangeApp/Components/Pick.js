import React, { Component, useState } from 'react';
import { View, Text, Picker, StyleSheet } from 'react-native'

class Pick extends React.PureComponent {
   state = {user: ''}
   updateUser = (user) => {
      this.setState({ user: user })
   }
   render() {
      return (
         <View>
            <Picker selectedValue = {this.state.user} onValueChange = {this.updateUser}>
               <Picker.Item label = "Pounds of CO2 Burned" value = "lbs" />
               <Picker.Item label = "Solar Panel Equivalence" value = "spe" />
               <Picker.Item label = "Human Equivalence" value = "he" />
               <Picker.Item label = "Temp Rise in 50 Years" value = "temp" />
            </Picker>
            // <Text style = {styles.text}>
            // {this.state.user}
            // </Text>
         </View>
      )
   }
}
// const styles = StyleSheet.create({
//    text: {
//       fontSize: 30,
//       flex: 1,
//       color: 'red'
//    }
// })

export default Pick;
