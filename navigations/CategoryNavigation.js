import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Wishlist from "../screens/wishlist";
import CategoriesScreen from "../screens/categories";
import CategoRes from "../screens/CategoRes";
import ProductScreen from "../screens/Product";
import cartpage from "../screens/cartpage";
import Payments from "../screens/Payments";

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
      <Stack.Screen name="CartPage" component={cartpage} />
      <Stack.Screen name="Payments" component={Payments} />
      <Stack.Screen name="Categores" component={CategoRes} />
      <Stack.Screen name="Products" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default CategoryStack;
