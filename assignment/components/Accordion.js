import React, { Component } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      timer: 0,
      showDetails: "none",
    };
  }

  renderValue(value, title, symbol) {
    return (
      <View style={{ alignItems: "center" }}>
        <Text style={{ fontSize: 12 }}>{title}</Text>
        {value ? (
          <Text style={{ fontSize: 12, color: "#828282" }}>
            {symbol}
            {Math.round(value)}
          </Text>
        ) : (
          <Text style={{ fontSize: 12, color: "#828282" }}>No data</Text>
        )}
      </View>
    );
  }

  render() {
    const { item } = this.props;
    const { showDetails } = this.state;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            showDetails == "flex"
              ? this.setState({ showDetails: "none" })
              : this.setState({ showDetails: "flex" });
          }}
        >
          <View style={styles.header}>
            <Text style={styles.headerLeft}>{item.name}</Text>
            <View>
              <Text>₹{Math.round(item.quote.INR.price)}</Text>
            </View>
          </View>
          <View style={styles.body,{display:showDetails}}>
            <View style={styles.bodyRow}>
              {this.renderValue(item.quote.INR.market_cap, "Market Cap", "₹")}
              {this.renderValue(item.quote.INR.volume_24h, "Volume", "₹")}
            </View>
            <View style={styles.bodyRow}>
              {this.renderValue(item.max_supply, "Max Supply")}
              {this.renderValue(item.total_supply, "Total Supply")}
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
  },
  listItem: {
    display: "flex",
    elevation: 1,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    backgroundColor: "#fff",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 25,
    paddingHorizontal: 30,
  },
  body: {
    paddingBottom: 25,
    paddingHorizontal: 30,
  },
  headerLeft: {
    fontWeight: "bold",
    fontSize: 16,
  },
  bodyRow: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    paddingBottom: 20,
  },
});
