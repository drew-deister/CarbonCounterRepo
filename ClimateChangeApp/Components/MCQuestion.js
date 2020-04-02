import React, { Component } from 'react';
import {StyleSheet, View} from "react-native";
import {Text, Card, Icon, Button, Slider} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {diagonalScale} from '../Utilities/Scaling';
import { QuestionText } from './QuestionText';
import PropTypes from 'prop-types';

class SliderQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
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
        secondaryColor: '#EB5B6D',
    }

    updateButton(index, mode) {
        if (this.state.color[index] == 'red') {
            this.state.color[index] = 'blue'
        } else {
            this.state.color[index] = 'red'
        }
        for (let i = 0; i < 5; i++) { // unselect the other
            if (this.state.color[i] == 'blue' && i != index) { // don't change the one you just updated
                this.state.color[i] = 'red'
            }
        }
        this.setState({color: this.state.color, mode: mode})
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
                    <TouchableHighlight style = {{backgroundColor: this.state.color[0], width: wp('40%'), marginBottom: 20, alignItems: 'center', }}
                            onPress = {() => this.updateButton(0, 'Car SUV')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[1], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(1, 'Sedan')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[2], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(2, 'Truck SUV')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[3], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(3, 'Minivan')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style = {{backgroundColor: this.state.color[4], width: wp('40%'), marginBottom: 20, alignItems: 'center'}}
                            onPress = {() => this.updateButton(4, 'Pickup Truck')} >
                            <Text style={styles.buttonText}>Hello</Text>
                        </TouchableHighlight>

                </View>

                
            </View>   
        )
    }
}



export {SliderQuestion};

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexDirection: 'column',
        marginBottom: 32,
    },

})
