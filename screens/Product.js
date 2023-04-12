import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCarousel from "../components/ImageCarousel";
import ColorDropdown from "../components/Dropdown";
import RatingComponent from "../components/RatingLarge";

const ProductScreen = ({ navigation }) => {
  const images = [
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
  ];

  return (
    <View style={styles.container}>
      <ImageCarousel images={images} />
      <RatingComponent rating={4.5} />
      <ColorDropdown />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default ProductScreen;
