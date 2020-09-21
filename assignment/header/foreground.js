import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default function Foreground() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        resizeMode={"contain"}
        source={require("./../../assets/linker.png")}
      />
      <Text style={styles.title}>LinkerCoin</Text>
      <Text style={styles.subTitle}>Top 100 Cryptocurrency list</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
    margin: 50,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  image: {
    height: "50%",
  },
  title: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: "bold",
    color: "#fff",
  },
  subTitle: {
    color: "#C3C3EE",
  },
});
