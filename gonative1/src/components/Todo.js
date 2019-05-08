import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

export default class Todo extends Component {
  static defaultProps = {
    title: "Excercise"
  };
  render() {
    return (
      <View>
        <Text>{this.props.title}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({});
