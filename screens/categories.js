import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../fonts/Text";

function CategoriesScreen() {
  return (
    <View style={styles.container}>
      <Text>Categories!</Text>
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
