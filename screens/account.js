import React from "react";
import { Image, StyleSheet, View } from "react-native";
import Text from "../fonts/Text";

function AccountScreen() {
  return (
    <View style={styles.container}>
      <Text>Account!</Text>
    </View>
  );
}

export default AccountScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
