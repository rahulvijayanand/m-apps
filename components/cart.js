import React from "react";
import { View, Image, StyleSheet } from "react-native";
import Text from "../fonts/Text";

const ShoppingCartIcon = ({ itemsInCart }) => {
  return (
    <View style={styles.container}>
      <Image source={require("../assets/Vector.png")} style={styles.icon} />
      {itemsInCart > 0 && (
        <View style={styles.bubble}>
          <Text style={styles.bubbleText}>{itemsInCart}</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
  },
  icon: {
    width: 30,
    height: 30,
  },
  bubble: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "#92e3a9",
    borderRadius: 10,
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  bubbleText: {
    color: "#263d2c",
    fontSize: 12,
    fontWeight: "bold",
  },
});

export default ShoppingCartIcon;
