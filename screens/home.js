import React from "react";
import {
  Image,
  StyleSheet,
  View,
  StatusBar,
  ScrollView,
  FlatList,
} from "react-native";
import Text from "../fonts/Text";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Location from "../components/Location";
import TextSemiBold from "../fonts/TextSemiBold";
import Categories from "../components/Categories";
import RectangularComponent from "../components/Rectangle";

function HomeScreen() {
  const slides = [
    { image: require("../assets/1.png") },
    { image: require("../assets/2.png") },
    { image: require("../assets/3.png") },
    { image: require("../assets/4.png") },
  ];

  const data = [
    {
      image: require("../assets/E1.png"),
      text: "Dairy Products",
    },
    {
      image: require("../assets/E4.png"),
      text: "Personal Hygiene",
    },
    {
      image: require("../assets/E3.png"),
      text: "Groceries",
    },
    {
      image: require("../assets/E2.png"),
      text: "Fabric",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} />
      <Location />
      <Search />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Carousel slides={slides} />
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 30, fontSize: 20 }}>
            Popular Categories
          </TextSemiBold>
          <Categories
            categoriesList={[
              "New Releases",
              "Antiques",
              "Self Care",
              "Gifts",
              "Household",
            ]}
            imagesList={[
              require("../assets/R1.png"),
              require("../assets/R2.png"),
              require("../assets/R3.png"),
              require("../assets/R4.png"),
              require("../assets/R5.png"),
            ]}
          />
        </View>
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 40, fontSize: 20 }}>
            Essentials
          </TextSemiBold>
          <RectangularComponent data={data} />
        </View>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
    paddingTop: StatusBar.currentHeight + 10,
  },
});
