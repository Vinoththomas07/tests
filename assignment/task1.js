import React, { Component } from "react";
import { Text, StyleSheet } from "react-native";
import { Button, View } from "native-base";

export default class Task1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pyramid_text: "DEXHIGH",
    };
  }

  componentDidMount() {
    this.doTask();
  }

  getPrintValue(mergeText, start, space, end) {
    let value =
      mergeText.substring(0, start) +
      " ".repeat(space) +
      mergeText.substring(mergeText.length - end, mergeText.length);
    return value;
  }

  doTask() {
    const { pyramid_text } = this.state;
    const primaryText = pyramid_text.split("");
    const tempText = pyramid_text.split("");
    tempText.reverse().shift();
    const mergeText = primaryText.concat(tempText).join("");

    let halfMark = (mergeText.length - 1) / 2 + 1;

    for (let x = 0; x <= mergeText.length; x++) {
      let textToPrint;
      if (x < halfMark) {
        let repeatNo = mergeText.length - x * 2;
        textToPrint = this.getPrintValue(mergeText, x, repeatNo, x);
        console.log(textToPrint);
      } else if (x > halfMark) {
        let reducer = x - halfMark;
        textToPrint = this.getPrintValue(
          mergeText,
          x - reducer * 2,
          reducer * 2 - 1,
          x - reducer * 2
        );
        console.log(textToPrint);
      } else {
        console.log(mergeText);
      }
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          You should see the pyramid text displayed in the console, search for
          DEXHIGH in logs
        </Text>
        <Button
          onPress={() => this.props.navigation.navigate("TabsNavigator")}
          success
          style={styles.button}
        >
          <Text style={styles.buttonText}> See next Task </Text>
        </Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 20,
  },
  text: {
    textAlign: "center",
  },
  button: {
    padding: 15,
    margin: 15,
    borderRadius: 30,
    alignSelf: "center",
  },
  buttonText: {
    fontWeight: "bold",
  },
});