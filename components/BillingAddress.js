import { View, Text, Dimensions } from "react-native";
import React from "react";
const { width, height } = Dimensions.get("window");

const BillingAddress = () => {
  return (
    <View
      style={{
        elevation: 4,
        shadowOpacity: 0.5, 
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 }, 
        backgroundColor: "white",
        height: height * 0.2,
        width: width - 50,
        borderRadius: 10,
        alignSelf: "center",
        marginTop: 50,
        borderWidth: 1,
        borderColor: "#eeeeee",
        
      }}
    >
      <View style={{flexDirection:"row",justifyContent:"space-between"}}>
        <Text
          style={{
            color: "black",
            fontSize: 24,
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          Billing Address
        </Text>
        <Text
          style={{
            color: "black",
            fontSize: 12,
            marginRight: 25,
            marginTop: 30,
            fontWeight:"800"
          }}
        >
          Edit
        </Text>
      </View>
      <Text
          style={{
            color: "black",
            fontSize: 15,
            marginLeft: 15,
            marginTop: 20,
          }}
        >
          Plot No.14, Door No.3/2208, PadmavathyStreet, Porur, Chennai-125
        </Text>
    </View>
  );
};

export default BillingAddress;
