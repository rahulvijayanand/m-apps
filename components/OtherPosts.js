import { View, Text, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");
var Postlist = [
  require("../assets/OtherPosts1.png"),
  require("../assets/OtherPosts2.png"),
  require("../assets/OtherPosts1.png"),
  require("../assets/OtherPosts2.png"),
  require("../assets/OtherPosts1.png"),
  require("../assets/OtherPosts2.png"),
  require("../assets/OtherPosts1.png"),
  require("../assets/OtherPosts2.png"),
];
const OtherPosts = () => {
  return (
    <View
      style={{
        height: height * 0.38,
        width: width,
        backgroundColor: "#eeeeee",
        marginTop: 30,
        marginLeft: 25,
        borderRadius: 8,
        marginBottom: 100,
      }}
    >
      <View style={{ height: height * 0.1, width: width }}>
        <Text
          style={{
            color: "#263d2c",
            fontSize: 24,
            marginLeft: 18,
            marginTop: 15,
          }}
        >
          Other Posts
        </Text>
      </View>
      <View style={{ height: height * 0.25, width: width }}>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          {Postlist.map((item) => (
            <Image
              source={item}
              style={{
                width: width * 0.5,
                height: height * 0.25,
                marginLeft: 20,
                borderRadius: 15,
                resizeMode: "contain",
              }}
            />
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default OtherPosts;
