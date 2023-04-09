import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wishlist from "../screens/wishlist";
import HomeScreen from "../screens/home";
const Stack = createStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
      <Stack.Screen name="WishList" component={Wishlist} />
    </Stack.Navigator>
  );
}

export default HomeStack;
