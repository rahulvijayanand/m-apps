import React, { Component } from "react";
import {
  View,
  Button,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import Text from "../fonts/Text";

const { width } = Dimensions.get("window");

const Search = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        backgroundColor: "#fff",
        borderRadius: 7,
        marginTop: 20,
        borderColor: "#263d2c",
        borderWidth: 1,
        marginLeft: 40,
        marginRight: 40,
      }}
    >
      <TextInput
        placeholder="Search for products"
        placeholderTextColor={"#263d2c"}
        style={{
          height: 45,
          width: width * 0.805,
          fontSize: 15,
          fontWeight: "bold",
          fontFamily: "MetropolisRegular",
          marginLeft: 10,
        }}
      />
      <Image source={require("../assets/Vector-17.png")} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: 25,
    height: 25,
    right: 10,
    top: 10,
  },
});

export default Search;
