import Modal from "react-native-modalbox";
import React, { Component, useState } from "react";
import { Text, Platform } from "react-native";
import { Image, StyleSheet, TouchableOpacity, View, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default class InfoModal extends Component {
  constructor(props) {
    super(props);
  }

  static defaultProps = {
      modalStyle: {backgroundColor: "white"}

      // backgroundColor: "#FCCCC0"
      // backgroundColor: "#F6F8EF",  light green
      // housing:
      // backgroundColor: '#FCCCC0',
      // secondary: '#EB5B6D'
  }


  showInfoModal = () => {
      this.refs.myModal.open();
  };

  closeModal() {
      console.log(this.refs)
      this.refs.myModal.close();
      console.log("hello")
      // console.log(this.refs)
  }

  setScrollView = scrollView => {
    // NOTE: scrollView will be null when the component is unmounted
    this._scrollView = scrollView;
  };

  render() {

    return (
      <Modal
        visible={false}
        ref={"myModal"}
        style={[styles.modalBody, this.props.modalStyle]}
        position="center"
        backdrop={true}
        backdropColor="grey"
        onOpened={() => {
            if (this._scrollView) 
                this._scrollView.flashScrollIndicators();
            }}
        swipeToClose={false}
        onClosed={this.props.onClosed}
      >
        <TouchableOpacity style={styles.xMarkPosition}
                          onPress={() => {
                            this.closeModal()
                          }}>
            <Text style={[styles.xMark, this.props.xMarkStyle]}>X</Text>
        </TouchableOpacity>
      
        <ScrollView
              style={styles.scrollView}
              contentContainerStye={styles.contentContainer}
              showsVerticalScrollIndicator={true}
              ref={this.setScrollView}
              parentObject={this}>
            {this.props.children}
        </ScrollView>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  modalBody: {
    justifyContent: "center",
    borderRadius: Platform.OS === "ios" ? 30 : 0,
    shadowRadius: 10,
    marginTop: hp("12.5%"),
    width: wp("90%"),
    height: hp("60%"),
    backgroundColor: '#EB5B6D',
  },
  scrollView: {
    flex: 1,
    marginBottom: 20,

  },
  contentContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingBottom: 100,
  },
  textContainer: {
    width: "100%",
    alignItems: "center",
  },
  modalText: {
    color: "black",
    fontSize: 23,
    width: "100%",
    textAlign: "left",
  },
  xMarkPosition: {
    marginLeft: 10,
    marginTop: 10,
  },
  xMark: {
    color: "#73A388",
    fontSize: 34,
    fontWeight: "900",
    marginBottom: -15,
    paddingBottom: -20,
  }
});

export { InfoModal };
