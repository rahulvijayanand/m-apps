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
import RectD from "../components/DealsRec";
import BestSeller from "../components/BestSeller";

function HomeScreen({ navigation }) {
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

  const dataDa = [
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Upto 50% off",
      normalText: "Home essentials, Personal hygiene",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "From Rs.199",
      normalText: "Gifts, crafts",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Under Rs.1000",
      normalText: "Home decor, Antiques",
    },
    {
      backgroundImage: require("../assets/D6.png"),
      boldText: "Buy One Get One",
      normalText: "Selfcare products",
    },
  ];

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor={"#92e3a9"} />
      <Location navigation={navigation} type="other" />
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
        <View style={{ backgroundColor: "#92e3a9" }}>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 20, fontSize: 20 }}>
            Deals of the Day
          </TextSemiBold>
          <RectD data={dataDa} />
        </View>
        <View>
          <TextSemiBold style={{ marginLeft: 20, marginTop: 40, fontSize: 20 }}>
            Best Sellers
          </TextSemiBold>
          <View style={{ flexDirection: "row" }}>
            <BestSeller
              imageSource={require("../assets/B1.png")}
              title="Phaila Hydrating Handmade Soap Bars"
              rating={4.8}
              numReviews={1800}
              oldPrice={599}
              newPrice={350}
              discount={30}
            />
            <BestSeller
              imageSource={require("../assets/B1.png")}
              title="Phaila Hydrating Handmade Soap Bars"
              rating={4.8}
              numReviews={1800}
              oldPrice={599}
              newPrice={350}
              discount={30}
            />
          </View>
          <View style={{ flexDirection: "row" }}>
            <BestSeller
              imageSource={require("../assets/B1.png")}
              title="Phaila Hydrating Handmade Soap Bars"
              rating={4.8}
              numReviews={1800}
              oldPrice={599}
              newPrice={350}
              discount={30}
            />
            <BestSeller
              imageSource={require("../assets/B1.png")}
              title="Phaila Hydrating Handmade Soap Bars"
              rating={4.8}
              numReviews={1800}
              oldPrice={599}
              newPrice={350}
              discount={30}
            />
          </View>
        </View>
        <View style={{ marginBottom: 100 }}></View>
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
