import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../fonts/Text";
import ShoppingCartIcon from "../components/cart";
import TextBold from "../fonts/TextBold";

function Location() {
  return (
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <View style={styles.display}>
        <Image
          source={require("../assets/Vector-18.png")}
          style={styles.icon}
        />
        <TouchableOpacity activeOpacity={0.4} style={{ marginLeft: 5 }}>
          <View style={{ flexDirection: "row" }}>
            <TextBold>Sairam College</TextBold>
            <Image
              source={require("../assets/Vector-19.png")}
              style={[
                styles.icon,
                {
                  width: 13,
                  height: 13,
                  marginLeft: 4,
                  alignSelf: "center",
                  marginTop: 2,
                },
              ]}
            />
          </View>
          <Text style={styles.font}>Sirukulathur, Tamil Nadu</Text>
        </TouchableOpacity>
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

export default Location;

const styles = StyleSheet.create({
  icon: {
    width: 33,
    height: 33,
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
