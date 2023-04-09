import * as React from "react";
import { Text, View, StyleSheet, StatusBar, Image } from "react-native";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
const Myacc = ({ data }) => {
  const { img } = styles;
  return (
    <View>
      {data.map((item, index) => (
        <View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "3%",
              marginHorizontal: "5%",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Image style={img} source={item.name} />

              <Text style={{ marginLeft: "10%" }}>{item.title}</Text>
            </View>
            <MaterialIcons
              name="keyboard-arrow-right"
              size={24}
              color="black"
            />
          </View>
          <View
            style={{ height: 1, borderWidth: 0.5, borderColor: "#d0d6d4" }}
          />
        </View>
      ))}
    </View>
  );
};
export default Myacc;

const styles = StyleSheet.create({
  img: {
    height: 25,
    width: 25,
  },
});
