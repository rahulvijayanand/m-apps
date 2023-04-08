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
        borderRadius: 10,
        borderColor: "#263d2c",
        borderWidth: 1,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 35,
        marginBottom: 35,
      }}
    >
      <TextInput
        placeholder="Search for products"
        placeholderTextColor={"#263d2c"}
        style={{
          height: 45,
          width: Dimensions.get("window").width - 80,
          fontSize: 13,
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
