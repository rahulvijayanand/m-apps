import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../fonts/Text";

function Wishlist() {
  return (
    <View style={styles.container}>
      <Text>Wishlist!</Text>
    </View>
  );
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
