import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore";
import Wishlist from "../screens/wishlist";
import HomeScreen from "../screens/home";
const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Explore Screen" component={ExploreScreen} />
      <Stack.Screen name="Wish List" component={Wishlist} />
      <Stack.Screen name="Home Screen" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default ExploreStack;
