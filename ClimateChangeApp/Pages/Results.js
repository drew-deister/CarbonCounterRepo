// Author: Drew Deister
// Email: andrew.z.deister@vanderbilt.edu
// Date: 12/26/19

// Results Page: to be edited by Lucas
// NOTE on Asynchronous Functions/Code: Note that componentDidMount() is called automatically by the compiler.
// So theoretically, state will be re-rendered before the components the values will be fetched and the state will be
// re-rended automatically.

// NOTE on JSON: The values are saved with the .stringify() function, so you have to .parse() before you can
// perform calculations on them. However, this returns strings. To get ints, use parseInt()

import React, { Component, useState } from 'react';
import {StyleSheet, View, TouchableHighlight, ScrollView} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import MetricView from '../Components/MetricView';
import ZipCode from '../Utilities/convertcsv.json'; // import JSON file
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {
  PieChart,
} from 'react-native-chart-kit'


import * as SecureStore from 'expo-secure-store';

//Pie chart configuration
  const chartConfig = {
    backgroundGradientFrom: "#1E2923",
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: "#08130D",
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
  }

class Results extends React.Component {
    constructor() {
      super();
      this.state = {
        zipCode: 0,
        numPeople: 0,
        squareFootage: 0,
        numMiles: 0,
        greenAmount: 0,
        summerChange: 0,
        mode: '',
        beefServings: 0,
        dairyServings: 0,
        shoppingFrequency: 0,
        articlesPerShop: 0,
        dummyNumber: 40,
      }
    }
    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Housing',
    };

    componentDidMount() { // this is automatically called by the compiler
      this.fetchData().done()
    }

    async fetchData() { // should probably add some error handling here
      // housing
      const zipCode = JSON.parse(await SecureStore.getItemAsync("zipCode"))
      // use 1/num people because total housing is divided by num people
      const numPeople = 1/JSON.parse(await SecureStore.getItemAsync("numPeople"))
      const squareFootage = JSON.parse(await SecureStore.getItemAsync("squareFootage"))

      // transportation
      const numMiles = JSON.parse(await SecureStore.getItemAsync("numMiles"))
      //multiply by .01 to make decimal
      const greenAmount = .01*JSON.parse(await SecureStore.getItemAsync("greenAmount"))
      const summerChange = .01*JSON.parse(await SecureStore.getItemAsync("summerChange"))
      const mode = JSON.parse(await SecureStore.getItemAsync("mode"))

      // diet
      const beefServings = JSON.parse(await SecureStore.getItemAsync("beefServings"))
      const dairyServings = JSON.parse(await SecureStore.getItemAsync("dairyServings"))

      // shopping
      const shoppingFrequency = JSON.parse(await SecureStore.getItemAsync("shoppingFrequency"))
      const articlesPerShop = JSON.parse(await SecureStore.getItemAsync("articlesPerShop"))

      // this not only changes the state but also
      // rerenders the components in view
      this.setState({zipCode: zipCode, numPeople: numPeople, squareFootage: squareFootage,
                     numMiles: numMiles, greenAmount: greenAmount, summerChange: summerChange, mode: mode,
                     beefServings: beefServings, dairyServings: dairyServings,
                     shoppingFrequency: shoppingFrequency, articlesPerShop: articlesPerShop});


      this.calculateDiet()
      this.calculateShopping()
      this.calculateHousing()
      this.calculateTransportation()
    }

    // MARK: Do calculations
    calculateDiet() { // calculates results with variables in this.state
      const POUNDS_PER_BEEF_SERVING = 6.61
      const POUNDS_PER_CHEESE_SERVING = 2.45

      return ((this.state.beefServings * POUNDS_PER_BEEF_SERVING * 52) +
                (this.state.dairyServings * POUNDS_PER_CHEESE_SERVING * 52))
    }

    calculateShopping() {
      const POUNDS_PER_SHIRT = 12.13
      return (POUNDS_PER_SHIRT * 12 * this.state.shoppingFrequency * this.state.articlesPerShop)
    }

    calculateHousing() { // iterate through JSON file in Utilities
      var averageHomekwhMonth = 0;
      var multiplier = 1.0;
      for (i in ZipCode) {
          if (ZipCode[i]["Zip"] === parseInt(this.state.zipCode)) {
            averageHomekwhMonth += ZipCode[i]["Avg Home kwh"]["month"];
          }
      }
      if (this.state.squareFootage < 800)
      {
        multiplier = 0.5;
      }
      else if (this.state.squareFootage < 1500) {
        multiplier = 0.75;
      }
      else if (this.state.squareFootage < 2500) {
        multiplier = 1.0;
      }
      else if (this.state.squareFootage < 4500) {
        multiplier = 1.25;
      }
      else{
        multiplier = 1.5;
      }
//should be divided by this.state.numPeople
      return (multiplier * averageHomekwhMonth * 12 * this.state.numPeople);
    }

    calculateTransportation() {
      MPG_rate = 1 // dummy bc idk if you have to initialize
      if (this.mode == "Sedan") {
        MPG_rate = 30
      } else if (this.mode == "Car SUV") {
        MPG_rate = 26.2
      } else if (this.mode == "Truck SUV") {
        MPG_rate = 22.4
      } else if (this.mode == "Minivan") {
        MPG_rate = 22.2
      } else { // pickup truck
        MPG_rate = 18.9
      }
      multiplier =  180 * (1/MPG_rate) * 8887 * 0.00220462;
      //.75 from non summer + .25 * the change over the summer
      summer = (.75 + .25 * this.state.summerChange)
      //max greenamount is .5
      green = (this.state.greenAmount + 0.5);
      return multiplier * summer * green * this.state.numMiles;// lbsCO2/yr
    }





    render() {
      const data = [
        {
          name: 'Housing',
          percent: this.calculateHousing(),
          color: '#FCCCC0',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Transportation',
          percent: this.calculateTransportation(),
          color: '#F08080',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Diet',
          percent: this.calculateDiet(),
          color: '#66CDAA',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Shopping',
          percent: this.calculateShopping(),
          color: '#87CEEB',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        }
      ]

      return(
        <View style={styles.safeView}>
               <ScrollView style={styles.scrollViewStyle}
                  contentContainerStyle = {styles.containerStyle}
                  >
                   {/* <Image style = {styles.image} source = {images[this.props.imageName]} /> */}

                   <View style={styles.cardStyle}>
                       <Text style={styles.pageTitle}>Results</Text>
                       <Text style={styles.subTitle}>from each category</Text>
                       <View style={styles.pieChartContainer}>
                       <PieChart
                         data={data}
                         width={wp('90%')}
                         height={200}
                         chartConfig={chartConfig}
                         accessor="percent"
                         backgroundColor="transparent"
                         paddingLeft="15"
                         //absolute //remove to give percentages
                       />
                      </View>
                        <Text style={styles.pageTitle}>Metrics</Text>
                        <MetricView metricName="SolarPanel"></MetricView>
                        <MetricView metricName="Car" textStyle={{marginTop: -15}}></MetricView>
                        <MetricView metricName="Tree"></MetricView>
                        <MetricView metricName="SmartPhone"></MetricView>
                   </View>
               </ScrollView>
          </View>
      )
    }

}

const styles = StyleSheet.create({
  safeView: {
      flex: 1,
  },
  scrollViewStyle: {
      backgroundColor: 'white',//'#FCCCC0',
      // borderTopRightRadius: 40,
      // borderTopLeftRadius: 40
  },
  pageHeaderContainer: {

      height: wp("70%"),
      backgroundColor: 'white',
  },
  cardStyle: {
    //flex: 1,
    borderTopRightRadius: 40,
    borderTopLeftRadius: 40,
    backgroundColor: '#F6F8EF',
    //height: hp('150%'),
    shadowOpacity: .2,
    alignItems: 'center'
  },
  image: {
      marginTop: 32,
      height: 170,
      width: 280,
  },
  containerStyle: {
      //flexGrow: 1,
      marginTop: 0,
      padding: 0,
      //justifyContent: 'space-between',
      alignItems: 'center',
      alignContent: 'center',
      //backgroundColor: 'red'
  },
  pageTitle: {
      marginTop: 20,
      color: '#73A388',
      fontSize: 42,
      width: wp("75"),
      fontWeight: '600',
      textAlign: 'center',
  },
  subTitle: {
    color: '#73A388',
    fontSize: 16,
    fontWeight: '600',
  },
  pieChartContainer: {
    alignItems: 'center',
    width: wp('90%'),
  //  aspectRatio: 90/100,
    borderColor: 'transparent',
    borderWidth: 1,
  }
});




export default Results;
