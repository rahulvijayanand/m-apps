import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  FlatList,
  Image,
  StyleSheet,
} from "react-native";
import Text from "../fonts/Text";
import TextSemiBold from "../fonts/TextSemiBold";

const options = [
  { name: "Ocean Extracts", color: "#9747FF", inStock: true },
  { name: "Neem & Tulsi", color: "#92E3A9", inStock: false },
  { name: "Charcoal", color: "#1E1E1E", inStock: true },
  { name: "Milk & Honey", color: "#FBBC05", inStock: true },
];

const Option = ({ name, color, disabled }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View
      style={{
        width: 28,
        height: 28,
        borderRadius: 15,
        borderWidth: 1,
        backgroundColor: color,
        marginRight: 5,
        opacity: disabled ? 0.2 : 1,
      }}
    ></View>
    <Text style={{ fontSize: 13, color: "black", opacity: disabled ? 0.2 : 1 }}>
      {name}
    </Text>
  </View>
);

const Dropdown = () => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]);

  const toggleDropdown = () => {
    setVisible(!visible);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setVisible(false);
  };

  const renderItem = ({ item, index }) => (
    <TouchableOpacity
      style={{
        flex: 1,
        margin: 5,
        paddingLeft: 5,
        paddingTop: 15,
        paddingBottom: 15,
        backgroundColor:
          item.name === selectedOption.name ? "#91e2a8" : "#e9f9ee",
        borderRadius: 10,
        position: "relative",
        elevation: item.name === selectedOption.name ? 5 : 0,
        shadowColor: "#000",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        shadowOffset: {
          width: 0,
          height: 2,
        },
      }}
      onPress={() => item.inStock && handleOptionSelect(item)}
      disabled={!item.inStock}
    >
      <Option name={item.name} color={item.color} disabled={!item.inStock} />
    </TouchableOpacity>
  );

  return (
    <View style={{ margin: 20, backgroundColor: "#e9f9ee", borderRadius: 10 }}>
      <TouchableOpacity onPress={toggleDropdown}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#e9f9ee",
            paddingLeft: 10,
            paddingTop: 20,
            paddingBottom: 20,
            paddingRight: 15,
            borderRadius: 10,
          }}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 15,
              backgroundColor: selectedOption.color,
              borderWidth: 1,
              marginRight: 5,
            }}
          ></View>
          <View style={{ flexDirection: "row" }}>
            <TextSemiBold style={{ fontSize: 14 }}>
              {selectedOption.name}
            </TextSemiBold>
            <Text style={{ fontSize: 12, alignSelf: "center", marginLeft: 5 }}>
              (Selected variant)
            </Text>
          </View>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Image
              source={
                visible
                  ? require("../assets/Vector-20.png")
                  : require("../assets/Vector-21.png")
              }
              style={styles.icon}
            />
          </View>
        </View>
      </TouchableOpacity>
      {visible && (
        <FlatList
          style={{ borderTopWidth: 1, borderTopColor: "#c2e3c8" }}
          data={options}
          numColumns={2}
          renderItem={renderItem}
          keyExtractor={(item) => item.name}
        />
      )}
    </View>
  );
};

export default Dropdown;

const styles = StyleSheet.create({
  icon: {
    width: 15,
    height: 15,
    resizeMode: "contain",
  },
});
