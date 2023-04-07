import React from "react";
import { Image, StyleSheet, View, StatusBar } from "react-native";
import Text from "../fonts/Text";
import ShoppingCartIcon from "../components/cart";
import Carousel from "../components/Carousel";
import Search from "../components/Search";

function HomeScreen() {
  const slides = [
    { image: require("../assets/1.png") },
    { image: require("../assets/2.png") },
    { image: require("../assets/3.png") },
    { image: require("../assets/4.png") },
  ];
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} />
      <ShoppingCartIcon itemsInCart={2} />
      <Search />
      <Text>Home!</Text>
      <Carousel slides={slides} />
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
