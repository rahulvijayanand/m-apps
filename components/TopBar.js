import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../fonts/Text";
import ShoppingCartIcon from "../components/cart";
import TextBold from "../fonts/TextBold";

function TopBar() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.display}>
        <Image
          source={require("../assets/Vector-4.png")}
          style={styles.icon}
        />
        <Text style={{fontSize:28,bottom:3}}>  Explore</Text>
      </View>

      <View style={{ flexDirection: "row", marginRight: 25 }}>
        <TouchableOpacity activeOpacity={0.4}>
          <Image
            source={require("../assets/Vector-2.png")}
            style={[styles.icon, { width: 30, height: 30, marginRight: 20 }]}
          />
        </TouchableOpacity>
        <ShoppingCartIcon itemsInCart={2} />
      </View>
    </View>
  );
}

export default TopBar;

const styles = StyleSheet.create({
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  display: {
    flexDirection: "row",
    marginLeft: 20,
  },
  font: {
    fontSize: 10.5,
  },
});
