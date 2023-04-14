import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";
import CustomerReviews from "./Reviews";
import RatingComponent from "./RatingLarge";
import PhotoGallery from "./SeemoreComp";
import ReviewList from "./CReviewComp";

const ReviewComp = () => {
  const ratings = {
    5: 458,
    4: 387,
    3: 286,
    2: 224,
    1: 243,
  };
  const images = [
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
    require("../assets/A1.png"),
    require("../assets/A2.png"),
    require("../assets/A3.png"),
  ];
  const reviewsData = [
    {
      name: "Ananya",
      rating: 4.8,
      date: "2022-08-08",
      content:
        "This is my fifth time buying this and I am so in love with this, the scent takes me back. Good quality!",
    },
    {
      name: "Tarun Kumar",
      rating: 4.8,
      date: "2022-08-04",
      content: "Waste of money, Don’t buy this.",
    },
    {
      name: "Deepthi",
      rating: 4.8,
      date: "2022-08-03",
      content:
        "This is my fifth time buying this and I am so in love with this, the scent takes me back. Good quality!",
    },
  ];
  const rating = 4.8;
  return (
    <View>
      <View style={styles.container}>
        <TextSemiBold style={styles.title}>Ratings & Reviews</TextSemiBold>
        <View
          style={{
            flexDirection: "row",
            marginRight: 30,
            marginLeft: 10,
            marginTop: 25,
          }}
        >
          <Text style={[styles.text, { fontSize: 56 }]}>{rating}</Text>
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                marginTop: 5,
                justifyContent: "center",
                marginLeft: 7.5,
              }}
            >
              <RatingComponent rating={rating} starSize={23} />
            </View>
            <Text style={{ marginTop: 5 }}>1088 verified buyers</Text>
          </View>
        </View>
        <View style={{ alignItems: "center" }}>
          <CustomerReviews totalReviews={1088} ratings={ratings} />
        </View>
        <View style={styles.separator} />
        <View>
          <TextSemiBold style={[styles.title, { marginTop: 20 }]}>
            Customer Photos
          </TextSemiBold>
          <View style={{ marginLeft: 25, marginRight: 25 }}>
            <PhotoGallery images={images} />
          </View>
        </View>
        <View>
          <TextSemiBold style={[styles.title, { marginTop: 15 }]}>
            Customer Reviews
          </TextSemiBold>
          <View style={{ padding: 20 }}>
            <ReviewList reviews={reviewsData} />
          </View>
        </View>
        <TouchableOpacity
          activeOpacity={0.5}
          style={{ justifyContent: "center", alignItems: "center" }}
        >
          <Text style={styles.buttonText}>Read all reviews</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e9f9ee",
    borderRadius: 15,
  },
  title: {
    fontSize: 18,
    marginLeft: 25,
    marginTop: 30,
  },
  text: {
    fontSize: 14,
    marginLeft: 30,
  },
  separator: {
    height: 1,
    backgroundColor: "#c2e3c8",
    marginBottom: 15,
  },
  buttonText: {
    fontSize: 12,
    textDecorationLine: "underline",
    marginBottom: 30,
  },
});

export default ReviewComp;
