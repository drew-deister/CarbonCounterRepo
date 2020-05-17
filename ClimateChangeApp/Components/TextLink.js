import React, { Component } from 'react';
import { StyleSheet, Text, View, Linking } from 'react-native';
// import * as Linking from 'expo-linking';
// import * as WebBrowser from 'expo-web-browser';


export default class TextWithEmbeddedLink extends React.Component {

    constructor(props) {
        super(props);
    }

    // static defaultProps = {
    //     textArr: ["This is a ", "link", " but this is not"],
    //     linkIndex: 1,
    //     containerStyle: {},
    //     textStyle: {},
    //     link: "https://www.google.com"
    // }
    // 
    // makeText() {
    //     let textList = []
    //     for(let i = 0; i < this.props.textArr.length; ++i) {
    //         if (i+1 == this.props.linkIndex) {
    //             textList.push(
    //                 <Text key={i} style={this.props.textStyle}>
    //                     {this.props.textArr[i]}
    //                     <Text style={styles.linkStyle}
    //                             onPress={ ()=> Linking.openURL(this.props.link)}
    //                     >
    //                         {this.props.textArr[i+1]}
    //                     </Text>
    //                     {this.props.textArr.length > i+2 ?
    //                         this.props.textArr[i+2] :
    //                         null
    //                         }
    //                 </Text>
    //             )
    //             i += 2;
    //         } else if (i === this.props.linkIndex) {
    //             textList.push(
    //                 <Text key={i} style={this.props.textStyle}>
    //                     <Text style={styles.linkStyle}
    //                             onPress={ ()=> Linking.openURL(this.props.link)}
    //                     >
    //                         {this.props.textArr[i]}
    //                     </Text>
    //                     {this.props.textArr.length > i+1 ?
    //                         this.props.textArr[i+1] :
    //                         null
    //                         }
    //                 </Text>
    //             )
    //             ++i;
    //         } else {
    //             textList.push(
    //                 <Text key={i} style={this.props.textStyle}>{this.props.textArr[i]}</Text>
    //             )
    //         }
    //     }
    //     return textList;
    // }


    static defaultProps = {
        style: {},
        link: "https://www.google.com"
    }

    
    render() {

        // const textWithEmbeddedLink = this.makeText();
        return (
            <Text style={[this.props.style, styles.linkStyle]}
                    onPress={ ()=> Linking.openURL(this.props.link)}>
                {this.props.children}
                
             </Text>
          
        );
      }
}

const styles = StyleSheet.create({

    linkStyle: {
        // fontSize: 20,
        color: '#0000EE',//'#E91E63',
        textDecorationLine: 'underline'
    },

})