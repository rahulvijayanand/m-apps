import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Text from "../fonts/Text";
import Location from "../components/Location";
import WishlistComp from "../components/WishlistComp";
import { ScrollView } from "react-native-gesture-handler";

const wishlistcop = [
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#FF5733", "#33FFA5", "#3361FF", "#FF33E9", "#FFC233"],
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
    colors: ["#FF5733", "#33FFA5", "#3361FF", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#FF5733", "#33FFA5", "#3361FF", "#FF33E9", "#FFC233"],
  },
  {
    imageSource: require("../assets/B1.png"),
    title: "Phaila Hydrating Handmade Soap Bars",
    ratings: 4.8,
    numReviews: 1800,
    oldPrice: 599,
    newPrice: 350,
    discount: 30,
    colors: ["#FF5733", "#33FFA5", "#3361FF", "#FF33E9", "#FFC233"],
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
    colors: ["#FF5733", "#33FFA5", "#3361FF", "#FF33E9", "#FFC233"],
  },
];

function Wishlist({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 30 }}>
        <Location navigation={navigation} type="wishlist" />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        {wishlistcop.map((item) => (
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
        ))}
        <View style={{ marginBottom: 85 }}></View>
      </ScrollView>
    </View>
  );
}

export default Wishlist;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: "100%",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
