import React, { useState } from "react";
import { StyleSheet, TouchableOpacity, Image,View,StatusBar } from "react-native";
import Toast from "./Toast";
import { Constants } from "expo-constants";
const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  const toggleLiked = () => {
    setLiked(!liked);
  };

  return (
    

<TouchableOpacity onPress={toggleLiked} style={styles.container}>
      <Image
        source={
          liked
            ? require("../assets/Vector-10.png")
            : require("../assets/Vector-2.png")
        }
        style={styles.icon}
      />
    </TouchableOpacity>
   

    
     
        
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  icon: {
    width: 18,
    height: 18,
    resizeMode: "contain",
  },
});

export default LikeButton;
