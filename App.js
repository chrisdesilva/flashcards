import React, { Component } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import VocabWord from './src/components/VocabWord';

export default class App extends Component {
  state = {
    vocabWord: "",
    words: []
  };

  wordChangedHandler = val => {
    this.setState({
      vocabWord: val
    });
  };

  wordSubmitHandler = () => {
    if (this.state.vocabWord.trim() === "") {
      return;
    }

    this.setState(prevState => {
      return {
        words: prevState.words.concat(prevState.vocabWord)
      };
    });
  };

  render() {
    const wordsOutput = this.state.words.map((word, i) => (
      <VocabWord key={i} vocabWord={word} />
    ));
    return (
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Enter a word"
            value={this.state.vocabWord}
            onChangeText={this.wordChangedHandler}
            style={styles.wordInput}
          />
          <Button
            title="Add"
            style={styles.wordButton}
            onPress={this.wordSubmitHandler}
          />
        </View>
        <View style={styles.listContainer}>{wordsOutput}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 26,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start"
  },
  inputContainer: {
    // flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  wordInput: {
    width: "70%"
  },
  wordButton: {
    width: "30%"
  },
  listContainer: {
    width: "100%"
  }
});
