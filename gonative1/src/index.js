import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//import Todo from "./components/Todo";

//const todos = ["Make Caffe", "study React Native"];

export default class App extends Component {
  state = {
    counter: 0
  };

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({ text: "Hello Sergio" });
    // }, 3000);
  }

  shouldComponentUpdate(nextProps, nextState) {
    return nextState.counter < 5;
  }

  handleAddCounter = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    return { text: nextProps.text };
  }

  render() {
    return (
      <View style={styles.container}>
        <Button onPress={this.handleAddCounter} title="Add" />
        <Text>{this.state.counter}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  }
});
