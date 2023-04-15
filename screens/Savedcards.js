import React from "react";
import { Text, View, StyleSheet, StatusBar } from "react-native";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Constants from "expo-constants";
import Save from "../components/Savedcardcomponent";
const Cardinfo = [
  { id: 1, name: "Visa ****9080", exp_date: "08/27" },
  { id: 2, name: "Yes Bank Credit Card ****8980", exp_date: "07/29" },
  { id: 3, name: "ICICI Credit Card ****2880", exp_date: "08/27" },
];
export default function Savedcards() {
  return (
    <View style={styles.container}>
      <View style={styles.StatusBar} />
      <View
        style={{
          marginHorizontal: "5%",
          flexDirection: "row",
          marginVertical: "7%",
        }}
      >
        <AntDesign name="arrowleft" size={28} color="black" />
        <Text style={{ fontSize: 24, marginHorizontal: "3%" }}>
          Saved Cards
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: "5%",
          borderRadius: 5,
          borderColor: "#afb3b1",
          borderWidth: 0.5,
        }}
      >
        <Save data={Cardinfo} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  StatusBar: {
    height: Constants.statusBarHeight + 5,
    backgroundColor: "#92E38A",
  },
});
