import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wishlist from "../screens/wishlist";
import CategoriesScreen from "../screens/categories";
import CategoRes from "../screens/CategoRes";
const Stack = createStackNavigator();

function CategoryStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="HomeScreen" component={CategoriesScreen} />
      <Stack.Screen name="WishList" component={Wishlist} />
      <Stack.Screen name="Categores" component={CategoRes} />
    </Stack.Navigator>
  );
}

export default CategoryStack;
