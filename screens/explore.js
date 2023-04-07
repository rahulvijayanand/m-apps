import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../fonts/Text";

function ExploreScreen() {
  return (
    <View style={styles.container}>
      <Text>Explore!</Text>
    </View>
  );
}

export default ExploreScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
