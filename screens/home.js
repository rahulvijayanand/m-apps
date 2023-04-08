import React from "react";
import { Image, StyleSheet, View, StatusBar, ScrollView } from "react-native";
import Text from "../fonts/Text";
import Carousel from "../components/Carousel";
import Search from "../components/Search";
import Location from "../components/Location";
import TextSemiBold from "../fonts/TextSemiBold";

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
      <Location />
      <Search />
      <ScrollView>
        <Carousel slides={slides} />
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 30, fontSize: 20 }}>
            Popular Categories
          </TextSemiBold>
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
