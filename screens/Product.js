import React from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Share,
  Image,
} from "react-native";
import ImageCarousel from "../components/ImageCarousel";
import ColorDropdown from "../components/Dropdown";
import RatingComponent from "../components/RatingLarge";
import ImageTextGrid from "../components/Productsdisplay";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const ProductScreen = ({ navigation }) => {
  const images = [
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
  ];

  const items = [
    { image: require("../assets/original.png"), text: "Authentic Products" },
    { image: require("../assets/love.png"), text: "Made with love and care" },
    { image: require("../assets/quality.png"), text: "Quality Checked" },
    { image: require("../assets/happy-face.png"), text: "8k Happy Customers" },
  ];

  const onShare = async () => {
    try {
      const result = await Share.share({
        message: "Share Functionality Testing",
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error) {}
  };

  const rating = 4.8;

  return (
    <ScrollView style={styles.container}>
      <ImageCarousel images={images} />
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TextSemiBold
          style={{
            color: "#263d2c",
            fontSize: 22,
            marginTop: 15,
            marginLeft: 20,
            width: 310,
          }}
        >
          Phaila Hydrating Handmade Soap Bars
        </TextSemiBold>
        <TouchableOpacity onPress={onShare} activeOpacity={0.4}>
          <Image
            source={require("../assets/Vector-6.png")}
            style={{
              width: 26,
              height: 26,
              marginRight: 20,
              marginTop: 20,
              resizeMode: "contain",
            }}
          />
        </TouchableOpacity>
      </View>
      <View style={{ marginLeft: 20, flexDirection: "row", marginTop: 5 }}>
        <RatingComponent rating={rating} />
        <TextSemiBold style={{ alignSelf: "flex-end", marginLeft: 5 }}>
          {rating}/5
        </TextSemiBold>
        <Text
          style={{ alignSelf: "flex-end", marginLeft: 5, color: "#b2c4b8" }}
        >
          (1088)
        </Text>
      </View>
      <View style={{ marginLeft: 20, marginTop: 10 }}>
        <Text
          style={{
            fontSize: 14,
            color: "#b2c4b8",
            textDecorationLine: "line-through",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          MRP ₹599
        </Text>
        <View style={{ flexDirection: "row" }}>
          <TextSemiBold style={{ fontSize: 18, marginTop: 5 }}>
            ₹350
          </TextSemiBold>
          <TextSemiBold
            style={{
              fontSize: 14,
              alignSelf: "center",
              marginTop: 5.5,
              marginLeft: 5,
              color: "#91e2a8",
            }}
          >
            30% off
          </TextSemiBold>
        </View>
        <Text
          style={{
            fontSize: 12,
            color: "#b2c4b8",
            justifyContent: "center",
            marginTop: 5,
          }}
        >
          Inclusive of all taxes
        </Text>
      </View>
      <View style={{ marginTop: 15 }}>
        <ColorDropdown />
      </View>
      <ImageTextGrid items={items} />
      <View style={{ marginBottom: 100 }}></View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    backgroundColor: "#fff",
  },
});

export default ProductScreen;
