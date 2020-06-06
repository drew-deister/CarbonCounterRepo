// Author: Drew Deister
// Email: andrew.z.deister@vanderbilt.edu
// Date: 12/26/19

// NOTE on Asynchronous Functions/Code: Note that componentDidMount() is called automatically by the compiler.
// So theoretically, state will be re-rendered before the components the values will be fetched and the state will be
// re-rended automatically.

// NOTE on JSON: The values are saved with the .stringify() function, so you have to .parse() before you can
// perform calculations on them. However, this returns strings. To get ints, use parseInt()

import React, { Component, useState } from 'react';
import {StyleSheet, View, TouchableHighlight, ScrollView, TouchableOpacity, Image} from "react-native";
import {Button, Text, Card, Icon} from 'react-native-elements';
import MetricView from '../Components/MetricView';
import ZipCode from '../Utilities/convertcsv.json'; // import JSON file
import INFORMATION from '../Utilities/text.json';
import { InfoModal } from '../Components/InfoModal';
import ParagraphView from '../Components/ParagraphView';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {
  PieChart,
} from 'react-native-chart-kit'

const Results_Info = INFORMATION["carbonCounterScreens"]["results"]

// to fix scrollIndicators
const inset = { top: 0, left: 0, bottom: 0, right: 0}

import * as SecureStore from 'expo-secure-store';
import AsafNextButton from '../Components/AsafNextButton';

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
        summerChange: 0,
        mode: '',
        beefServings: 0,
        dairyServings: 0,
        shoppingFrequency: 0,
        dummyNumber: 40,
      }
      SecureStore.setItemAsync("hasResultsBeenAccessed", JSON.stringify("true"))

    }



    static navigationOptions = { // this is the label in the middle of the nav bar
        title: 'Housing',
    };

    componentDidMount() { // this is automatically called by the compiler
      this.fetchData().done()
      this.flashScroll();
    }

    async fetchData() { // should probably add some error handling here

      // housing
      let zipCode = JSON.parse(await SecureStore.getItemAsync("zipCode"))
      let numPeople = parseInt(JSON.parse(await SecureStore.getItemAsync("numPeople")))
      let squareFootage = JSON.parse(await SecureStore.getItemAsync("squareFootage"))

      // transportation
      const numMiles = JSON.parse(await SecureStore.getItemAsync("numMiles"))
      //multiply by .01 to make decimal
      const mode = JSON.parse(await SecureStore.getItemAsync("mode"))
      const summerChange = JSON.parse(await SecureStore.getItemAsync("summerChange"))

      // diet
      const beefServings = JSON.parse(await SecureStore.getItemAsync("beefServings"))
      const dairyServings = JSON.parse(await SecureStore.getItemAsync("dairyServings"))

      // shopping
      const shoppingFrequency = JSON.parse(await SecureStore.getItemAsync("shoppingFrequency"))

      // ********* the following can be used for quicker testing during development
      // console.log("original type of numPeople: ", typeof numPeople)

      // zipCode = "60614"
      // numPeople = 4
      // squareFootage = 2410

      // console.log("changed type of numPeople: ", typeof numPeople)
      // const numMiles = 3
      // const summerChange = 1.0
      // const mode = "Regular car"
      // const beefServings = 7
      // const dairyServings = 3
      // const shoppingFrequency = 5 
      
      // console.log("zipCode", zipCode)
      // console.log("numPeople", numPeople)
      // console.log("squareFootage", squareFootage)
      // console.log("numMiles", numMiles)
      // console.log("summerChange", summerChange)
      // console.log("mode", mode),
      // console.log("beefServings", beefServings)
      // console.log("dairyServings", dairyServings)
      // console.log("shoppingFrequency", shoppingFrequency)

      // this not only changes the state but also
      // rerenders the components in view
      this.setState({zipCode: zipCode, numPeople: numPeople, squareFootage: squareFootage,
                     numMiles: numMiles, summerChange: summerChange, mode: mode,
                     beefServings: beefServings, dairyServings: dairyServings,
                     shoppingFrequency: shoppingFrequency});
      

      // this.calculateDiet()
      // this.calculateShopping()
      // this.calculateHousing()
      // this.calculateTransportation()
    }

    // == vs ===?
    // MARK: Do calculations
    calculateDiet() { // calculates results with variables in this.state
      const POUNDS_PER_BEEF_SERVING = 6.61
      const POUNDS_PER_CHEESE_SERVING = 1.35

      return ((this.state.beefServings * POUNDS_PER_BEEF_SERVING * 52) +
                (this.state.dairyServings * POUNDS_PER_CHEESE_SERVING * 52))
    }

    calculateShopping() {
      const POUNDS_PER_SHIRT = 12.13
      return (POUNDS_PER_SHIRT * this.state.shoppingFrequency * 4)
    }

    calculateHousing() { // iterate through JSON file in Utilities
      var averageHomeMWh_rate_year = 0.0;
      var lbsCO2_rate_MWh = 0.0;
      var multiplier = 1.0;
      var i;
      for (i in ZipCode) {
          if (ZipCode[i]["Zip"] === parseInt(this.state.zipCode)) {
            averageHomeMWh_rate_year = ZipCode[i]["KWh"]["month -> MWh"]["year"];
            lbsCO2_rate_MWh = ZipCode[i]["Subregion annual CO2e output emission rate (lb"]["MWh)"];
          }
      }
      if (this.state.squareFootage < 801)
      {
        multiplier = 0.5;
      }
      else if (this.state.squareFootage < 1501) {
        multiplier = 0.75;
      }
      else if (this.state.squareFootage < 2501) {
        multiplier = 1.0;
      }
      else if (this.state.squareFootage < 4501) {
        multiplier = 1.25;
      }
      else {
        multiplier = 1.5;
      }
      
      return (lbsCO2_rate_MWh * (multiplier * averageHomeMWh_rate_year) / (this.state.numPeople + 1));
    }

    calculateTransportation() {

      // calculate miles      
      const milesSchool = this.state.numMiles * 180;
      const milesSummer = this.state.numMiles * this.state.summerChange * 185;
      const totalMiles = milesSchool + milesSummer;

      // calculate rate: pounds of CO2 emitted per mile
      const CO2_rate_gallon = 19.59
      let MPG_rate = 0; 
      let CO2_rate_mile = 0;
      switch(this.state.mode) {
        case "Regular car":
          MPG_rate = 30;
          CO2_rate_mile = CO2_rate_gallon / MPG_rate;
          break;
        case "Small SUV (Ford Escape)":
          MPG_rate = 26.2;
          CO2_rate_mile = CO2_rate_gallon / MPG_rate;
          break;
        case "Large SUV (Chevy Suburban)":
          MPG_rate = 22.4;
          CO2_rate_mile = CO2_rate_gallon / MPG_rate;
          break;
        case "Minivan":
          MPG_rate = 22.2;
          CO2_rate_mile = CO2_rate_gallon / MPG_rate;
          break;
        case "Pickup truck (Ford F-150)":
          MPG_rate = 18.9;
          CO2_rate_mile = CO2_rate_gallon / MPG_rate;
          break;
        case "Train or bus":
          // according to US Dot, CO2 per mile per passanger
          // of average bus / train and full capacity
          CO2_rate_mile = .16 
          break;
        case "Bicycle or walk":
          // MPG_rate = INF;
          CO2_rate_mile = 0;
          break;
        default:
          // code block
      }
      console.log("mode", this.state.mode)
      console.log("CO2 from transportation", totalMiles * CO2_rate_mile)
      // calculate pounds of CO2 per year
      return totalMiles * CO2_rate_mile;
    }

  showInfoModalAndDisableScroll() {
      this.setState({showingModal: true})
      this.refs.infoModal.showInfoModal()
  }

  enableScroll() {
      this.setState({showingModal: false})
  }

  setScrollView = scrollView => {
    // NOTE: scrollView will be null when the component is unmounted
      this._scrollView = scrollView;
  };


  flashScroll() {
    setTimeout(() => {
        this._scrollView.flashScrollIndicators();
    }, 200)
  }

  // formats numbers by adding commas if necessary, maintains decimals
  addCommas(nStr)
  {
    nStr += '';
    let x = nStr.split('.');
    let x1 = x[0];
    let x2 = x.length > 1 ? '.' + x[1] : '';
    let rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
      x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
  }

    render() {
      const CO2_Housing = this.calculateHousing()
      const CO2_Transportation = this.calculateTransportation()
      const CO2_Diet = this.calculateDiet()
      const CO2_Shopping = this.calculateShopping()

      const data = [
        {
          name: 'Housing',
          percent: CO2_Housing,
          color: '#FCCCC0',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Transportation',
          percent: CO2_Transportation,
          color: '#F08080',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Diet',
          percent: CO2_Diet,
          color: '#66CDAA',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        },
        {
          name: 'Shopping',
          percent: CO2_Shopping,
          color: '#87CEEB',
          legendFontColor: '#7F7F7F',
          legendFontSize: 11,
        }
      ]
      var totalCO2 = CO2_Housing + CO2_Transportation + CO2_Diet + CO2_Shopping;
      return(
        <View style={styles.safeView}>
            <ScrollView 
                        // scrollIndicatorInsets={inset}
                        style={styles.scrollViewStyle}
                        contentContainerStyle = {styles.containerStyle}
                        ref={this.setScrollView}>
                
                <View style = {styles.pageHeaderContainer}>
                    <Text style={styles.CO2Title}
                              allowFontScaling={false}
                              >
                        Your estimated green house gas emissions are:
                    </Text>

                    <View style={styles.CO2NumberContainer}>
                        <Text style={styles.CO2Number}
                              allowFontScaling={false}
                              >
                                {this.addCommas(parseInt(totalCO2))}
                        </Text>

                        <View style={styles.infoButtonContainer}>
                            <TouchableOpacity
                                style={styles.modalButtonContainer}
                                onPress={() => this.showInfoModalAndDisableScroll()}>

                                <Image
                                    style={styles.infoImage}
                                    source={require("../assets/informationbutton.png")}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>

                    <Text style={styles.CO2Title}
                          allowFontScaling={false}
                          >
                              pounds of CO2 per year
                    </Text>
                </View>

                <View style={styles.cardStyle}>
                    <Text style={styles.pageTitle}
                          allowFontScaling={false}
                          >
                              Results
                    </Text>
                    <Text style={styles.bottomText}
                          allowFontScaling={false}
                          >
                              from each category
                    </Text>

                    <View style={styles.pieChartContainer}>
                        <PieChart data={data}
                                  width={wp('90%')}
                                  height={200}
                                  chartConfig={chartConfig}
                                  accessor="percent"
                                  backgroundColor="transparent"
                                  paddingLeft="15"
                          //absolute //remove to give percentages
                          />

                        <View style={{width: wp("75%"), marginTop: 10}}>
                           <Text style={styles.bottomText}
                              allowFontScaling={false}
                              >
                                To learn more about a specifc category, click on the "info" button next to the title of any of the previous pages
                            </Text>
                        </View>
                    </View>

                    
                  


                    <View style={styles.metricsContainer}>
                        <Text style={styles.pageTitle}
                              allowFontScaling={false}
                              >
                                Metrics
                        </Text>
                        <MetricView metricName="SolarPanel" totalCo2 = {totalCO2}/>
                        <MetricView metricName="Car" totalCo2 = {totalCO2}
                                    textStyle={{marginTop: -15}}/>
                        <MetricView metricName="Tree" totalCo2 = {totalCO2}/>
                        <MetricView metricName="SmartPhone" totalCo2 = {totalCO2}
                                    containerStyle={{marginBottom: 20}}/>
                        <MetricView metricName="SolidCarbon" totalCo2 = {totalCO2}
                                    containerStyle={{marginBottom: 20}}/>
                    </View>


                    <View style={styles.goBackContainer}>
                        <Text style={styles.pageTitle}
                              allowFontScaling={false}
                              >
                                Go Back
                        </Text>
                        <Text style={styles.bottomText}
                              allowFontScaling={false}
                              >
                                Go back and change your answers to see how it affects the results!
                        </Text>
                  
                        <AsafNextButton
                            onPress= {() => this.props.navigation.navigate('Household')}
                            style={{marginBottom: 10, marginTop: 25, backgroundColor: "#EB5B6D", borderColor: "#EB5B6D"}}
                            textStyle={{color: 'white'}}>
                            Household
                        </AsafNextButton>
                        <AsafNextButton
                            onPress= {() => this.props.navigation.navigate('Transportation')}
                            style={{marginBottom: 10, backgroundColor: "#73A388", borderColor: "#73A388"}}
                            textStyle={{color: 'white'}}>
                            Transportation
                        </AsafNextButton>
                        <AsafNextButton
                            onPress= {() => this.props.navigation.navigate('Diet')}
                            style={{marginBottom: 10, backgroundColor: "#A3BEAD", borderColor: "#A3BEAD"}}
                            textStyle={{color: 'white'}}>
                            Diet
                        </AsafNextButton>
                        <AsafNextButton
                            onPress= {() => this.props.navigation.navigate('Shopping')}
                            style={{marginBottom: 10, backgroundColor: "#9AD1F2", borderColor: "#9AD1F2"}}
                            textStyle={{color: 'white'}}>
                            Shopping
                        </AsafNextButton>

                        <AsafNextButton
                            onPress= {() => this.props.navigation.navigate('Home')}
                            style={{marginBottom: 10, marginTop: 40}}
                            // textStyle={{color: 'white'}}
                            >
                            Go Home
                        </AsafNextButton>
                        
                    </View>

                </View>

            </ScrollView>

            <InfoModal  ref={"infoModal"}
                        parentObject={this}
                        onClosed={() => this.enableScroll()}
                        modalStyle={{backgroundColor: '#F6F8EF'}}
                        xMarkStyle={{color: '#73A388'}}>
                <ParagraphView  infoArr={Results_Info["info"]}
                                infoTypeArr={Results_Info["infoTypes"]}
                                textStyle={{color: '#73A388'}}/>
            </InfoModal>
        </View>
      )
    }

}

const styles = StyleSheet.create({

view: {
    alignItems: 'center',
    flexDirection: 'row'
},

safeView: {
    flex: 1,
},

scrollViewStyle: {
    backgroundColor: 'white',//'#FCCCC0',
    // borderTopRightRadius: 40,
    // borderTopLeftRadius: 40
},

pageHeaderContainer: {
    marginTop: 32,
    alignItems: 'center',
    alignContent: 'center',
    height: wp("50%"),
    backgroundColor: 'white',
    width: wp('70%')
},

goBackContainer: {
    marginTop: 32,
    paddingTop: 20,
    borderTopColor: 'white',
    borderTopWidth: 3,
    alignItems: 'center',
    alignContent: 'center',
    // height: wp("20%"),
    // backgroundColor: 'white',
    marginBottom: hp("10%"),
    width: wp('85%')
},

metricsContainer: {
    marginTop: 36,
    paddingTop: 28,
    borderTopColor: 'white',
    borderTopWidth: 3,
    // backgroundColor: 'white',
    width: wp("85%"),
    alignItems: 'center'
},

cardStyle: {
  //flex: 1,
  borderTopRightRadius: 40,
  borderTopLeftRadius: 40,
  backgroundColor: '#F6F8EF',
  //height: hp('150%'),
  shadowOpacity: .2,
  alignItems: 'center',
  width: wp("100%"),
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
CO2NumberContainer: {
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
},
CO2Number:
{
    color: '#73A388',
    padding: 10,
    fontSize: 46,
    fontWeight: 'bold',
    // width: wp("75"),
    textAlign: 'center',
},
  pageTitle: {
      marginTop: 20,
      color: '#73A388',
      fontSize: 42,
      //fontWeight: 'bold',
      width: wp("75"),
      fontWeight: '700',
      textAlign: 'center',
      // backgroundColor: "red",
  },
  CO2Title: {
    color: '#73A388',
    fontSize: 22,
    fontWeight: '600',
    fontStyle: 'italic',
    textAlign: 'center',
  },
  bottomText: {
    color: '#73A388',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center',
    
  },

  pieChartContainer: {
    alignItems: 'center',
    width: wp('90%'),
  //  aspectRatio: 90/100,
    borderColor: 'transparent',
    borderWidth: 1,
  },

modalButtonContainer: {
  width: "100%",
  height: "100%",
  alignItems: "center",
},
infoImage: {
  height: "100%",
  width: "100%",
  tintColor: "#73A388",
},
infoButtonContainer: {
  borderRadius: 13,
  marginLeft: 5,
  height: 25,
  width: 25,
  // backgroundColor: "#73A388"
}
});




export default Results;
