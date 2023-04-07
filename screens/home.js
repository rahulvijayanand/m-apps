import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../fonts/Text";

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text>Home!</Text>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
