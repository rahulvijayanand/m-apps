import { View, Text, Image } from "react-native";
import React from "react";
import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

const ReadMore = () => {
  return (
    <View
      style={{
        backgroundColor: "white",
        height: height * 0.65,
        width: width - 50,
        alignSelf: "center",
        marginTop: 30,
        borderWidth:1,
        borderColor:"black",
        borderRadius:5
      }}
    >
      <View
        style={{
          flex: 4,
          borderBottomWidth: 2,
          borderBottomColor: "white",
          justifyContent:"center"
        }}
      >
        <Image
            source={require("../assets/ReadMore.jpg")}
            style={{ width: width-80, height: 160,alignSelf:"center",borderRadius:5 }}
          />
      </View>
      <View style={{ flex: 6 }}>
        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <Text
            style={{
              color: "#263d2c",
              fontSize: 24,
              marginTop: 15,
              marginLeft: 15,
            }}
          >
            Listen what Anush 
            {'\n'}Thinks About <Text style={{fontWeight:"bold"}}>"Phaila"</Text>
          </Text>
          <Image
            source={require("../assets/Vector-6.png")}
            style={{ width: 24, height: 30, marginRight: 20, marginTop: 18 }}
          />
        </View>
        <Text style={{ fontSize: 14 ,marginLeft:15,marginTop:15}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <View style={{backgroundColor:"#92e3a9",height:50,width:width-80,alignSelf:"center",marginTop:20,borderRadius:10,justifyContent:"center"}}>
            <Text style={{color:"#263d2c",fontWeight:"bold",fontSize:18,alignSelf:"center",marginRight:10}}>Read More</Text>
        </View>
      </View>
    </View>
  );
};

export default ReadMore;
