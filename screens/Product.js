import React from "react";
import { View, StyleSheet } from "react-native";
import ImageCarousel from "../components/ImageCarousel";
import ColorDropdown from "../components/Dropdown";

const ProductScreen = ({ navigation }) => {
  const images = [
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
  ];

  const colors = [
    { name: "Red", code: "#FF0000", inStock: true },
    { name: "Green", code: "#00FF00", inStock: false },
    { name: "Blue", code: "#0000FF", inStock: true },
    { name: "Yellow", code: "#FFFF00", inStock: true },
  ];

  return (
    <View style={styles.container}>
      <ImageCarousel images={images} />
      <ColorDropdown colors={colors} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});

export default ProductScreen;
