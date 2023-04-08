import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import TextSemiBold from "../fonts/TextSemiBold";

const Categories = ({ categoriesList, imagesList }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ paddingLeft: 20, marginTop: 30 }}
    >
      {categoriesList.map((category, index) => (
        <TouchableOpacity
          activeOpacity={0.5}
          style={styles.categoryContainer}
          key={category}
        >
          <Image source={imagesList[index]} style={styles.categoryImage} />
          <TextSemiBold style={styles.categoryText}>{category}</TextSemiBold>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  categoryContainer: {
    alignItems: "center",
    marginRight: 27,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 10,
  },
  categoryImage: {
    width: 48,
    height: 48,
    borderRadius: 20,
  },
  categoryText: {
    marginTop: 5,
    fontSize: 11,
    textAlign: "center",
  },
});

export default Categories;
