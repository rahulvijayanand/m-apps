import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore";
import Wishlist from "../screens/wishlist";
import HomeScreen from "../screens/home";
import ProductScreen from "../screens/Product";
const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Explore Screen" component={ExploreScreen} />
      <Stack.Screen name="WishList" component={Wishlist} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default ExploreStack;
