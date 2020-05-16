import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native'
import INFORMATION from '../Utilities/text.json'
import TextWithEmbeddedLink from '../Components/TextWithEmbeddedLink';


const SOURCES = INFORMATION["creditScreen"]["DataSources"];

export default class DataSources extends React.Component {


    static DefaultProps = {
        containerStyle: {},
        headerStyle: {},
        descriptionStyle: {},
        sourceStyle: {}
        
    }

    makeSources() {
        let sourceList = [];
        for (let i = 0; i < SOURCES["sources"].length; ++i) {
            if (SOURCES["sources"][i]["has-link"]) {
                sourceList.push(
                    <TextWithEmbeddedLink
                        key = {i}
                        textArr={[SOURCES["sources"][i]["main"], SOURCES["sources"][i]["shortened-link"], "."]}
                        textStyle={this.props.sourceStyle}
                        linkIndex={1}
                        link={SOURCES["sources"][i]["actual-link"]}
                    ></TextWithEmbeddedLink>
                )
            } else {
                sourceList.push(
                <Text key = {i}
                      style={this.props.sourceStyle}>
                        {SOURCES["sources"][i]["main"]}.
                </Text>
                )
            }
            
        }
        return sourceList;
    }

    render() {

        const sourcesText = this.makeSources();

        return (
            <View style={this.props.containerStyle}>
                <Text style={this.props.headerStyle}>{SOURCES["title"]}</Text>
                <Text style={this.props.descriptionStyle}>{SOURCES["description"]}</Text>
                {sourcesText}
            </View>
          
        );
      }
}