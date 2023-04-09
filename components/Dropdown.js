import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ColorDropdown = ({ colors, code }) => {
  const [selectedColor, setSelectedColor] = useState(colors[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleColorSelect = (color) => {
    setSelectedColor(color);
    setDropdownOpen(false);
  };

  const columns = 2; // number of columns
  const rows = Math.ceil(colors.length / columns); // number of rows

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.selectedColor}
        onPress={() => setDropdownOpen(!dropdownOpen)}
      >
        <View
          style={[styles.colorCircle, { backgroundColor: selectedColor.code }]}
        />
        <Text style={styles.colorName}>{selectedColor.name} </Text>
        <Text style={{ alignSelf: "center" }}>(Selected variant)</Text>
      </TouchableOpacity>
      {dropdownOpen && (
        <View style={styles.dropdownContainer}>
          {[...Array(rows)].map((_, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
              {[...Array(columns)].map((_, columnIndex) => {
                const colorIndex = rowIndex * columns + columnIndex;
                if (colorIndex >= colors.length) {
                  return <View key={columnIndex} style={styles.colorOption} />;
                } else {
                  const color = colors[colorIndex];
                  return (
                    <TouchableOpacity
                      key={columnIndex}
                      style={[
                        styles.colorOption,
                        color.color === selectedColor.color &&
                          styles.activeColorOption,
                        color.disabled && styles.disabledColorOption,
                      ]}
                      onPress={() => handleColorSelect(color)}
                      disabled={color.disabled}
                    >
                      <View
                        style={[
                          styles.colorCircle,
                          { backgroundColor: color.code },
                          color.disabled && styles.disabledColorCircle,
                        ]}
                      />
                      <Text
                        style={[
                          styles.colorName,
                          color.color === selectedColor.color &&
                            styles.activeColorName,
                          color.disabled && styles.disabledColorName,
                        ]}
                      >
                        {color.name}
                      </Text>
                      {color.disabled && (
                        <Text style={styles.outOfStock}>Out of Stock</Text>
                      )}
                    </TouchableOpacity>
                  );
                }
              })}
            </View>
          ))}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
  },
  selectedColor: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  colorCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
  colorName: {
    fontSize: 16,
  },
  dropdownContainer: {
    width: "100%",
    marginTop: 10,
    borderWidth: 1,
    borderColor: "grey",
    borderRadius: 5,
    overflow: "hidden",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  colorOption: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 5,
    flexDirection: "row",
  },
  activeColorOption: {
    backgroundColor: "lightgrey",
  },
  disabledColorOption: {
    opacity: 0.5,
  },
  disabledColorCircle: {
    opacity: 0.5,
  },
  disabledColorName: {
    opacity: 0.5,
  },
  outOfStock: {
    marginLeft: 10,
    color: "red",
    fontSize: 12,
  },
});

export default ColorDropdown;
