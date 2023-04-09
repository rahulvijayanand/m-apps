import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import SavedCards from "../screens/Savedcards";
import Myacc from "../screens/account";
import Generalinfo from "../screens/Generalinfo";
const Stack = createStackNavigator();

function AccountStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Account Screen" component={Myacc} />
      <Stack.Screen name="Saved" component={SavedCards} />
      <Stack.Screen name="Generalinfo" component={Generalinfo} />
    </Stack.Navigator>
  );
}

export default AccountStack;
