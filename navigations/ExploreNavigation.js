import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ExploreScreen from "../screens/explore";
import wishlist from "../screens/wishlist";

const Stack = createStackNavigator();

function ExploreStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Explore Screen" component={ExploreScreen} />
      <Stack.Screen name="Wish List" component={wishlist} />
    </Stack.Navigator>
  );
}

export default ExploreStack;
