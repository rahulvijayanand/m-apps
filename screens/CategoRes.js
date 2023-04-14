import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  Pressable,
} from "react-native";
import Location from "../components/Location";
import WishlistComp from "../components/WishlistComp";
import Search from "../components/Search";
import TextSemiBold from "../fonts/TextSemiBold";

const categocop = [
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
    type: "best",
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
    type: "best",
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#9747FF", "#FBBC05", "#1e1e1e", "#FF33E9", "#FFC233"],
  },
];

function CategoRes({ navigation }) {
  return (
    <View style={styles.container}>
      <Location navigation={navigation} type="location" />
      <Search type="filter" navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <TextSemiBold
          style={{ marginLeft: 20, fontSize: 21, marginBottom: 20 }}
        >
          Results (118)
        </TextSemiBold>
        {categocop.map((item) => (
          <Pressable onPress={() => navigation.navigate("Productss")}>
            <WishlistComp
              imageSource={item.imageSource}
              title={item.title}
              ratings={item.ratings}
              numReviews={item.numReviews}
              oldPrice={item.oldPrice}
              newPrice={item.newPrice}
              discount={item.discount}
              colors={item.colors}
              type={item.type}
            />
          </Pressable>
        ))}
        <View style={{ marginBottom: 85 }}></View>
      </ScrollView>
    </View>
  );
}

export default CategoRes;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
