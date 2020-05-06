import React, { Component } from 'react';
import {StyleSheet, View, TouchableHighlight} from "react-native";
import {Text, Card, Icon, Button, Slider, ListItem, List} from 'react-native-elements';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    listenOrientationChange, removeOrientationListener
} from 'react-native-responsive-screen';
import {diagonalScale} from '../Utilities/Scaling';
import { QuestionText } from './QuestionText';
import PropTypes from 'prop-types';
import { TouchableOpacity } from 'react-native-gesture-handler';

const DEFAULT_ANSWER_COLOR = 'rgba(255, 255, 255, .52)';

class MCQuestion extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            color: [],
        }
    }


    static propTypes = {
        question: PropTypes.string,
        questionLines: PropTypes.number,
        defaultColor: PropTypes.string,
        secondaryColor: PropTypes.string,
        answerOptions: PropTypes.array
    }

    static defaultProps = {
        question: "",
        questionLines: 1,
        defaultAnswerColor: 'rgba(255, 255, 255, .52)',
        secondaryColor: 'rgba(252, 205, 193, .85)',
        answerOptions: ["answer1", "answer2", "answer3"]
    }

    // This makes an answer option for each str in AnswerOptions prop,
    // and sets color to default
    // basics of looping in react: https://flaviocopes.com/react-how-to-loop/
    makeAnswerOptions() {
        const answersList = []
        for (let i = 0; i < this.props.answerOptions.length; ++i) {
            this.state.color.push(this.props.defaultAnswerColor)
            answersList.push(
                <TouchableHighlight 
                    style = {[styles.choiceButton, {backgroundColor: this.state.color[i]}]}
                    onPress = {() => this.updateButton(i, this.props.answerOptions[i])}
                    key = {i} >
                    <Text style={[styles.buttonText, this.props.answerStyle[i]]}>{this.props.answerOptions[i]}</Text>
                </TouchableHighlight>
            )
        }
        return answersList;
    }

    updateButton(index, mode) {
        if (this.state.color[index] == this.props.defaultAnswerColor) {
            this.state.color[index] = this.props.secondaryColor
        } else {
            this.state.color[index] = this.props.defaultAnswerColor
        }
        for (let i = 0; i < this.props.answerOptions.length; i++) { // unselect the other
            if (this.state.color[i] == this.props.secondaryColor && i != index) { // don't change the one you just updated
                this.state.color[i] = this.props.defaultAnswerColor
            }
        }
        this.setState({color: this.state.color})
        this.props.callback(mode)
    }

    render() {
        

        // basics of looping in react: https://flaviocopes.com/react-how-to-loop/
        // answers gets rendered later in file
        const answers = this.makeAnswerOptions();
        

        return (            
            <View style={styles.container}>
                <QuestionText
                    lines={this.props.questionLines}
                    question={this.props.question}
                    style={this.props.questionStyle}
                    >
                </QuestionText>
                <View style={styles.choiceContainer}>
                    {answers}
                </View>

            </View>   
        )
    }
}



export {MCQuestion};

const styles = StyleSheet.create({
    container: {
        marginVertical: 16,
    },
    choiceContainer: {
        alignItems: 'center',
        flexDirection: 'column',
        //marginVertical: 16,
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
