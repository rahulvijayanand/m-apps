import { View, Text, Image } from "react-native";
import React, { useState } from "react";
import { Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const { width, height } = Dimensions.get("window");

const NotifyMe = () => {
  const[isnotify,setnotify]=useState(false);
  const handlepress=()=>{
    setnotify(!isnotify);
  }
  return (
    <View
      style={{
        backgroundColor: "#d3f5d9",
        height: height * 0.65,
        width: width - 50,
        alignSelf: "center",
        marginTop: 30,
        borderRadius:5,
        
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
            source={require("../assets/antique.jpg")}
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
            Antique Collection
          </Text>
          <TouchableOpacity>
          <Image
            source={require("../assets/Vector-6.png")}
            style={{ width: 24, height: 30, marginRight: 20, marginTop: 18 }}
          />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: 14 ,marginLeft:15,marginTop:15}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </Text>
        <TouchableOpacity onPress={handlepress}>
        <View style={{backgroundColor:!isnotify?"#263d2c":"white",height:50,width:width-80,alignSelf:"center",marginTop:20,borderRadius:10,justifyContent:"center"}}>
            <Text style={{color:!isnotify?"#92e3a9":"#263d2c",fontWeight:"bold",fontSize:18,alignSelf:"center",marginRight:10}}>{!isnotify?"Notify Me":"You'll Be Notified !"}</Text>
        </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default NotifyMe;
