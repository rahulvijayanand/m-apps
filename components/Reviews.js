import React from "react";
import { View, Text, StyleSheet } from "react-native";
const CustomerReviews = ({ totalReviews, ratings }) => {
  const maxRatingCount = Math.max(...Object.values(ratings));
  const ratingCounts = Object.entries(ratings);

  // Divide ratingCounts into two arrays, first with top 5 and second with rest of the ratings
  const topFiveRatings = ratingCounts
    .sort((a, b) => b[0] - a[0]) // Sort in descending order of rating
    .slice(0, 5);
  const remainingRatings = ratingCounts.slice(5);

  return (
    <View style={styles.container}>
      <Text style={styles.totalReviews}>{totalReviews} Reviews</Text>
      <View style={styles.ratingsContainer}>
        <View style={styles.topRatingsContainer}>
          {topFiveRatings.map(([rating, count]) => (
            <View key={rating} style={styles.ratingContainer}>
              <View style={styles.ratingCountContainer}>
                <Text style={styles.ratingCount}>{count}</Text>
                <Text style={styles.ratingCountLabel}>/ {totalReviews}</Text>
              </View>
              <View style={styles.ratingLineContainer}>
                <View style={[styles.totalReviewsLine, { width: "100%" }]} />
                <View
                  style={[
                    styles.mostDoneLine,
                    { width: (count / totalReviews) * 100 + "%" },
                  ]}
                />
              </View>
              <Text style={styles.rating}>{rating}</Text>
            </View>
          ))}
        </View>
        <View style={styles.remainingRatingsContainer}>
          {remainingRatings.map(([rating, count]) => (
            <View key={rating} style={styles.ratingContainer}>
              <View style={styles.ratingCountContainer}>
                <Text style={styles.ratingCount}>{count}</Text>
                <Text style={styles.ratingCountLabel}>/ {totalReviews}</Text>
              </View>
              <View style={styles.ratingLineContainer}>
                <View style={[styles.totalReviewsLine, { width: "100%" }]} />
                <View
                  style={[
                    styles.mostDoneLine,
                    { width: (count / totalReviews) * 100 + "%" },
                  ]}
                />
              </View>

              <Text style={styles.rating}>{rating}</Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    marginVertical: 20,
  },
  totalReviews: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  ratingsContainer: {
    flexDirection: "row",
  },
  topRatingsContainer: {
    marginRight: 20,
  },
  ratingContainer: {
    alignItems: "center",
    marginBottom: 10,
  },
  ratingCountContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  ratingCount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  ratingCountLabel: {
    fontSize: 12,
  },
  ratingLineContainer: {
    height: 5,
    width: "100%",
    backgroundColor: "#F1F1F1",
    marginBottom: 5,
    position: "relative",
  },
  totalReviewsLine: {
    height: "100%",
    backgroundColor: "#F1F1F1",
  },
  mostDoneLine: {
    height: "100%",
    backgroundColor: "#FFC107",
    position: "absolute",
    left: 0,
    top: 0,
    bottom: 0,
  },
  ratingLine: {
    height: "100%",
    backgroundColor: "#FFC107",
  },
  rating: {
    fontSize: 14,
    color: "#999",
  },
});

export default CustomerReviews;
