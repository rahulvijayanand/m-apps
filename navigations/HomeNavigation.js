import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wishlist from "../screens/wishlist";
import HomeScreen from "../screens/home";
import ProductScreen from "../screens/Product";
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
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default HomeStack;
