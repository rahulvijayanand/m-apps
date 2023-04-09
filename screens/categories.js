import React from "react";
import { Image, StyleSheet, View, StatusBar, ScrollView } from "react-native";
import Text from "../fonts/Text";
import Location from "../components/Location";
import CategoryComponent from "../components/CategoryComponent";
const categoryimagelist = [
  { image: require("../assets/Selfcare.png"), name: "Selfcare" },
  { image: require("../assets/gifts.png"), name: "Gifts" },
  { image: require("../assets/jewellery.png"), name: "Jewellery" },
  { image: require("../assets/crafts.png"), name: "Crafts" },
  { image: require("../assets/fashion.png"), name: "Fashion" },
];
function CategoriesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Location navigation={navigation} type="location" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {categoryimagelist.map((item) => (
          <CategoryComponent image={item.image} name={item.name} />
        ))}
      </ScrollView>
    </View>
  );
}

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
