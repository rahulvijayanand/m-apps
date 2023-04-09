import React from "react";
import { Image, StyleSheet, View, TouchableOpacity } from "react-native";
import Text from "../fonts/Text";
import ShoppingCartIcon from "../components/cart";
import TextBold from "../fonts/TextBold";

function Location({ navigation, type, text }) {
  const renderLocation = () => {
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

        <View style={{ flexDirection: "row", marginRight: 27 }}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("WishList")}
          >
            <Image
              source={require("../assets/Vector-2.png")}
              style={[styles.icon, { width: 30, height: 30, marginRight: 20 }]}
            />
          </TouchableOpacity>
          <ShoppingCartIcon itemsInCart={2} />
        </View>
      </View>
    );
  };

  const renderWishlist = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row" }}
        >
          <Image
            source={require("../assets/Vector-4.png")}
            style={[
              styles.icon,
              { width: 26, height: 26, alignSelf: "center" },
            ]}
          />
          <Text
            style={[
              styles.font,
              { fontSize: 26, alignSelf: "center", marginLeft: 15 },
            ]}
          >
            Wishlist
          </Text>
        </TouchableOpacity>

        <View style={{ flexDirection: "row", marginRight: 27 }}>
          <ShoppingCartIcon itemsInCart={2} />
        </View>
      </View>
    );
  };

  const renderExplore = () => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.goBack()}
            style={{ flexDirection: "row" }}
          >
            <Image
              source={require("../assets/Vector-4.png")}
              style={[
                styles.icon,
                { width: 26, height: 26, alignSelf: "center" },
              ]}
            />
          </TouchableOpacity>
          <Text
            style={[
              styles.font,
              { fontSize: 26, alignSelf: "center", marginLeft: 15 },
            ]}
          >
            Explore
          </Text>
        </View>

        <View style={{ flexDirection: "row", marginRight: 27 }}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => navigation.navigate("WishList")}
          >
            <Image
              source={require("../assets/Vector-2.png")}
              style={[styles.icon, { width: 30, height: 30, marginRight: 20 }]}
            />
          </TouchableOpacity>
          <ShoppingCartIcon itemsInCart={2} />
        </View>
      </View>
    );
  };

  const renderOther = (title) => {
    return (
      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => navigation.goBack()}
          style={{ flexDirection: "row" }}
        >
          <Image
            source={require("../assets/Vector-4.png")}
            style={[
              styles.icon,
              { width: 26, height: 26, alignSelf: "center" },
            ]}
          />
          <Text
            style={[
              styles.font,
              { fontSize: 26, alignSelf: "center", marginLeft: 15 },
            ]}
          >
            {title}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {type === "location" && renderLocation()}
      {type === "wishlist" && renderWishlist()}
      {type === "explore" && renderExplore()}
      {type === "other" && renderOther(text)}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    paddingLeft: 20,
  },
  display: {
    flexDirection: "row",
    alignItems: "center",
  },
  icon: {
    width: 30,
    height: 30,
    resizeMode: "contain",
  },
  font: {
    fontSize: 10.5,
    color: "#252525",
  },
});

export default Location;
