import * as React from "react";
import { View, StyleSheet, StatusBar, Image } from "react-native";
import Myacc from "../components/Myaccount";
import TextSemiBold from "../fonts/TextSemiBold";
import Text from "../fonts/Text";
import Location from "../components/Location";
const Details = [
  { id: 1, title: "Profile", name: require("../assets/Group-301.png") },
  { id: 2, title: "Address", name: require("../assets/Vector-9.png") },
  { id: 3, title: "Orders", name: require("../assets/Group-1.png") },
  { id: 4, title: "Saved Cards", name: require("../assets/Group-2.png") },
  { id: 5, title: "Wishlist", name: require("../assets/Vector-10.png") },
  {
    id: 6,
    title: "Manage Referrals",
    name: require("../assets/Group-300.png"),
  },
  { id: 7, title: "Notifications", name: require("../assets/Vector-11.png") },
  {
    id: 8,
    title: "Terms & Policies",
    name: require("../assets/Vector-12.png"),
  },
  { id: 9, title: "Customer Support", name: require("../assets/Group302.png") },
];
export default function App({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight + 10,
        backgroundColor: "#fff",
      }}
    >
      <Location navigation={navigation} type="other" text="My Account" />
      <View
        style={{ flexDirection: "row", padding: "5%", marginVertical: "5%" }}
      >
        <Image
          style={styles.profilepic}
          source={require("../assets/profile.png")}
        />
        <View style={{ justifyContent: "center", width: "100%" }}>
          <Text style={{ marginHorizontal: "5%", fontSize: 20 }}>
            Arun Kumar
          </Text>
          <Text style={{ marginHorizontal: "3%", color: "gray" }}>
            +9197854XXXXX
          </Text>
        </View>
      </View>
      <View style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }} />
      <Myacc data={Details} />
    </View>
  );
}

const styles = StyleSheet.create({
  profilepic: {
    height: 65,
    width: 65,
    marginLeft: "15%",
    borderWidth: 0.5,
    borderRadius: 50,
    elevation: 10,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.16,
    shadowRadius: 16,
  },
  display: {
    flexDirection: "row",
    marginLeft: 20,
  },
  icon: {
    width: 30,
    height: 30,
    marginRight: "4%",
    resizeMode: "contain",
  },
});
