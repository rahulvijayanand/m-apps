import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";

const options = [
  { name: "Red", color: "#FF0000", inStock: true },
  { name: "Green", color: "#00FF00", inStock: false },
  { name: "Blue", color: "#0000FF", inStock: true },
  { name: "Yellow", color: "#FFFF00", inStock: true },
];

const Option = ({ name, color }) => (
  <View style={{ flexDirection: "row", alignItems: "center" }}>
    <View
      style={{
        width: 15,
        height: 15,
        borderRadius: 7.5,
        backgroundColor: color,
        marginRight: 5,
      }}
    ></View>
    <Text style={{ fontSize: 16, color: "#333" }}>{name}</Text>
  </View>
);

const Dropdown = () => {
  const [visible, setVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0]); // Set the first option as selected by default

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
        padding: 10,
        backgroundColor:
          item.name === selectedOption.name ? "#91e2a8" : "#e9f9ee",
        borderRadius: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 1,
        },
        shadowOpacity: 0.2,
        shadowRadius: 1.41,

        elevation: 2,
        position: "relative",
      }}
      onPress={() => item.inStock && handleOptionSelect(item)}
      disabled={!item.inStock}
    >
      <Option name={item.name} color={item.color} />
      {!item.inStock && (
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(255, 255, 255, 0.5)",
            justifyContent: "center",
            alignItems: "center",
          }}
        ></View>
      )}
    </TouchableOpacity>
  );

  return (
    <View style={{ margin: 20, backgroundColor: "#e9f9ee" }}>
      <TouchableOpacity onPress={toggleDropdown}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor: "#e9f9ee",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <View
            style={{
              width: 15,
              height: 15,
              borderRadius: 7.5,
              backgroundColor: selectedOption.color,
              marginRight: 5,
            }}
          ></View>
          <Text style={{ fontSize: 18, fontWeight: "bold", color: "#333" }}>
            {selectedOption.name}
          </Text>
          <View style={{ flex: 1, alignItems: "flex-end" }}>
            <Text style={{ fontSize: 18, color: "#333" }}>
              {visible ? "▲" : "▼"}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {visible && (
        <View style={{ marginTop: 10 }}>
          <FlatList
            data={options}
            numColumns={2}
            renderItem={renderItem}
            keyExtractor={(item) => item.name}
          />
        </View>
      )}
    </View>
  );
};

export default Dropdown;
