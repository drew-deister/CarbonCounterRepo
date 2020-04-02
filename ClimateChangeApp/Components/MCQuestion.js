import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {diagonalScale} from '../Utilities/Scaling';
import { QuestionText } from './QuestionText';
import PropTypes from 'prop-types';

class MCQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: ['rgba(255, 255, 255, .52)', 'rgba(255, 255, 255, .52)', 'rgba(255, 255, 255, .52)', 'rgba(255, 255, 255, .52)', 'rgba(255, 255, 255, .52)'],
        }
    }


    static propTypes = {
        question: PropTypes.string,
        questionLines: PropTypes.number,
        secondaryColor: PropTypes.string,
    }

    static defaultProps = {
        question: "",
        questionLines: 1,
        secondaryColor: 'rgba(252, 205, 193, .85)',
    }

    updateButton(index, mode) {
        if (this.state.color[index] == 'rgba(255, 255, 255, .52)') {
            this.state.color[index] = this.props.secondaryColor
        } else {
            this.state.color[index] = 'rgba(255, 255, 255, .52)'
        }
        for (let i = 0; i < 5; i++) { // unselect the other
            if (this.state.color[i] == this.props.secondaryColor && i != index) { // don't change the one you just updated
                this.state.color[i] = 'rgba(255, 255, 255, .52)'
            }
        }
        this.setState({color: this.state.color})
        this.props.callback(mode)
    }

    render() {
        return (            
            <View style={styles.container}>
                <QuestionText
                    lines={this.props.questionLines}
                    question={this.props.question}
                    style={this.props.questionStyle}
                    >
                </QuestionText>


                
                <View style={styles.choiceContainer}>
                    <TouchableHighlight style = {[styles.choiceButton, {backgroundColor: this.state.color[0]}]}
                            onPress = {() => this.updateButton(0, 'Car SUV')} >
                            <Text style={styles.buttonText}>Car SUV</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[styles.choiceButton, {backgroundColor: this.state.color[1]}]}
                            onPress = {() => this.updateButton(1, 'Sedan')} >
                            <Text style={styles.buttonText}>Sedan</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[styles.choiceButton, {backgroundColor: this.state.color[2]}]}
                            onPress = {() => this.updateButton(2, 'Truck SUV')} >
                            <Text style={styles.buttonText}>Truck SUV</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[styles.choiceButton, {backgroundColor: this.state.color[3]}]}
                            onPress = {() => this.updateButton(3, 'Minivan')} >
                            <Text style={styles.buttonText}>Minivan</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {[styles.choiceButton, {backgroundColor: this.state.color[4]}]}
                            onPress = {() => this.updateButton(4, 'Pickup Truck')} >
                            <Text style={styles.buttonText}>Pickup Truck</Text>
                        </TouchableHighlight>

                </View>

                
            </View>   
        )
    }
}



export {MCQuestion};

const styles = StyleSheet.create({
    choiceContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 32,
        //backgroundColor: 'blue'
    },
    choiceButton: {
        //backgroundColor: 'rgba(255, 255, 255, .52)',
        width: wp('72%'),
        height: 40.5,
        //aspectRatio: 100 / 15,
        borderRadius: 20,
        marginBottom: 8, 
        alignItems: 'center',
        padding: 10,
        //opacity: .4,
    },
    buttonText: {
        fontSize: 18,
        color: 'white',
        fontWeight: '600'
        //opacity: 1
    }

})
