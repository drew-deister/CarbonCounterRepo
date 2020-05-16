// Asaf

import React, { Component } from "react";
//import HomeScreenActivityCard from '../Components/HomeScreenActivityCard';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  Button,
  ScrollView,
  Linking
} from "react-native";
import { AsafNextButton } from "../Components/AsafNextButton";
import InfoModal from "../Components/InfoModal";
import { Left } from "native-base";
import INFORMATION from '../Utilities/text.json'; // import JSON file
import TextWithEmbeddedLink from '../Components/TextWithEmbeddedLink';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import DataSources from '../Components/DataSources';

const CREDIT_INFO = INFORMATION["creditScreen"];
const CHANGE = CREDIT_INFO["Change++"];

export default class CreditPage extends Component {


  static navigationOptions = {
    // headerTitle: 'new title',
    // headerShown: false
  }

  setScrollView = scrollView => {
    // NOTE: scrollView will be null when the component is unmounted
    this._scrollView = scrollView;
  };

  componentDidMount() {
    this.flashScroll();
    
  }

  flashScroll() {
    setTimeout(() => {
        this._scrollView.flashScrollIndicators();
    }, 200)
  }
  
  render() {

    //const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
          <View style={{
                    flex: 295,
                    justifyContent: "flex-end", alignItems: "center", marginBottom: 20
                    }}>
              <Image style={{height: 200, width: 200}} source={require("../assets/CarbonXP_Logos/LeafLogo_2_Dark.png")}></Image>
          </View>

          <View style={{flex: 470, justifyContent: "center"}}>
              <ScrollView
                  ref={this.setScrollView}
              >
                <Text style={styles.topText}>{CREDIT_INFO["title"]}</Text>
                <View style={{flexDirection: "row"}}>
                    <Text style={[styles.bottomText, styles.paragraphEnd, {flex: 7}]}>
                      {CHANGE["info"][0]}
                    </Text>
                    <View style={{flex: 4}}>
                        <Image style={{width: 120, height: 120}}
                            source={require("../assets/changeplusplus.png")}
                            />
                    </View>
                </View>
                
                <TextWithEmbeddedLink
                    textArr={[CHANGE["info"][1], CHANGE["info"][2], CHANGE["info"][3]]}
                    linkIndex={1}
                    link={CHANGE["website"]}
                    textStyle={[styles.bottomText, styles.paragraphEnd]}
                />

                <Text style={[styles.bottomText, styles.paragraphEnd]}>
                      {CREDIT_INFO["contributions"]["stakeHolders"]}
                </Text>


                <Text style={[styles.bottomText, styles.paragraphEnd]}>
                    {CHANGE["info"][4]}
                </Text>

                <View style={styles.paragraphEnd}>
                    <Text style={styles.bottomText}> {CHANGE["team"][0]}</Text>
                    <TextWithEmbeddedLink
                      textArr={[CHANGE["team"][1],CHANGE["team"][2]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["EthanShifrin"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                    <TextWithEmbeddedLink
                      textArr={[CHANGE["team"][3],CHANGE["team"][4]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["DrewDeister"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                    <TextWithEmbeddedLink
                      textArr={[CHANGE["team"][5],CHANGE["team"][6]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["LucasGoldman"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                    <TextWithEmbeddedLink
                      textArr={[CHANGE["team"][7],CHANGE["team"][8]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["AsafRoth"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                </View>

                <View style={styles.paragraphEnd}>
                    <Text style={styles.bottomText}>Important Contributions</Text>
                    <TextWithEmbeddedLink
                      textArr={[CREDIT_INFO["contributions"]["other"][0],CREDIT_INFO["contributions"]["other"][1]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["JennaTanner"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                    <TextWithEmbeddedLink
                      textArr={[CREDIT_INFO["contributions"]["other"][2],CREDIT_INFO["contributions"]["other"][3]]}
                      linkIndex={0}
                      link={CHANGE["emails"]["JoshLipsey"]}
                      textStyle={[styles.bottomText, styles.indent]}
                      />
                </View>

                    
                <DataSources
                    headerStyle={styles.topText}
                    descriptionStyle={[styles.bottomText, styles.paragraphEnd]}
                    sourceStyle={[styles.sourceText, styles.paragraphEnd]}
                >

                </DataSources>



                
              </ScrollView>
          </View>
      

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
    fontWeight: "bold",
    // backgroundColor: "blue"
  },
  bottomText: {
    color: "black", //"#73A388",
    textAlign: "left",
    fontWeight: "400",
    fontSize: 16,
    width: wp("82%"), //300,

  },
  sourceText: {
    color: "black", //"#73A388",
    textAlign: "left",
    fontWeight: "300",
    fontSize: 14,
    width: wp("82%"), //300,
  },
  paragraphEnd: {
    paddingBottom: 20
  },
  indent: {
    marginLeft: 40
  }

});
