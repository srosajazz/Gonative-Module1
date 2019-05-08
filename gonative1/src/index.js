import React, { Component } from "react";
import { Platform, StyleSheet, Text, View, todos } from "react-native";

import Todo from "./components/Todo";

//const todos = ["Make Caffe", "study React Native"];

export default class App extends Component {
  state = {
    user: "Sergio",
    todos: [{ id: 0, text: "Make Caffe" }, { id: 1, text: "Jazz" }]
  };

  addTodo = () => {
    this.setState({
      todos: [...this.state.todos, { id: Math.random(), text: "New todo" }]
    });
  };

  render() {
    return (
      <View>
        <View style={styles.container} />
        <Text>{this.state.user}</Text>
        {this.state.todos.map(todo => (
          <Todo key={todo.id} title={todo.text} />
        ))}
        {/* <Button title="Add todo" onPress={this.addTodo} /> */}
        {/* <Todo title="Make caffe" /> */}
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
