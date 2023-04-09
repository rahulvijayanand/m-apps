import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import Text from "../fonts/Text";
import Location from "../components/Location";

function Wishlist({ navigation }) {
  return (
    <View style={styles.container}>
      <Location navigation={navigation} type="wishlist" />
      <Text>Wishlist!</Text>
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
