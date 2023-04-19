import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Navigation from "./BottomTabNavigation";
import FilterPage from "../screens/FilterPage";
import AccountStack from "./AccountNavi";
import LoginNavi from "./LoginNavi";
import OrderSummary from "../screens/OrderSummary";
const Stack = createStackNavigator();

function MainNavi() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="LoginNavi" component={LoginNavi} />
      <Stack.Screen name="Navigation" component={Navigation} />
      <Stack.Screen name="Filter" component={FilterPage} />
      <Stack.Screen name="AccountStack" component={AccountStack} />
      <Stack.Screen name="Ordersummary" component={OrderSummary} />
    </Stack.Navigator>
  );
}

export default MainNavi;
