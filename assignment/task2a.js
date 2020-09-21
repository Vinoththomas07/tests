import React, { Component } from "react";
import { Text, View, AppState, BackHandler, StyleSheet } from "react-native";
import { Button, Toast } from "native-base";

export default class Task2a extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      appState: AppState.currentState,
    };
  }

  componentDidMount() {
    AppState.addEventListener("change", this._handleAppStateChange);
    this.backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      this.backAction
    );
  }

  backAction() {
    return true;
  }

  componentWillUnmount() {
    this.backHandler.remove();
  }

  startTimer(time) {
    this.setState({ timer: time });
    this.interval = setInterval(() => {
      const { timer } = this.state;
      if (timer == 0) {
        clearInterval();
      } else {
        this.setState({ timer: timer - 1 });
      }
    }, 1000);
  }

  stopReset() {
    this.setState({ timer: 0 });
    clearInterval(this.interval);
  }

  pauseTimer() {
    clearInterval(this.interval);
  }

  resumeTimer() {
    const { timer } = this.state;
    if (timer >= 1) {
      Toast.show({
        text: `Resuming timer from ${timer}!`,
        buttonText: "Okay",
        style: {
          paddingHorizontal: 15,
          marginHorizontal: 10,
          marginBottom: 80,
          borderRadius: 15,
        },
      });
      this.startTimer(timer);
    }
  }

  _handleAppStateChange = (nextAppState) => {
    if (
      this.state.appState.match(/inactive|background/) &&
      nextAppState === "active"
    ) {
      this.resumeTimer();
    } else {
      this.pauseTimer();
    }
    this.setState({ appState: nextAppState });
  };

  componentWillUnmount() {
    AppState.removeEventListener("change", this._handleAppStateChange);
  }

  render() {
    const { timer } = this.state;
    return (
      <View style={styles.container}>
        <View style={styles.timer}>
          <Text style={styles.timerTitle}>Timer in seconds</Text>
          <Text style={styles.timerCount}>{timer}</Text>
        </View>

        <View style={styles.buttonView}>
          <Button
            success
            style={styles.button}
            onPress={() => {
              this.startTimer(100);
            }}
          >
            <Text style={styles.buttonText}> Start</Text>
          </Button>
          <Button
            warning
            style={styles.button}
            onPress={() => {
              this.stopReset();
            }}
          >
            <Text style={styles.buttonText}> Stop and Reset</Text>
          </Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
  },
  timer: {
    marginVertical: 50,
    alignItems: "center",
  },
  timerTitle: {
    fontSize: 15,
  },
  timerCount: {
    fontSize: 80,
    fontWeight: "bold",
  },
  buttonView: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  button: {
    marginHorizontal: 10,
    borderRadius: 20,
    padding: 10,
    width: 120,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    fontWeight: "bold",
  }
});
