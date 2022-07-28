import { View, Text } from "react-native";
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import AccountDetail from "./screens/AccountDetail";
import RestaurantDetail from "./screens/RestaurantDetail";
import Home from "./screens/Home";
import Account from "./components/Account/Account";
const Navigation = () => {
  const Stack = createStackNavigator();
  const screenOptions = {
    headerShown: false,
  };
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="RestaurantDetail" component={RestaurantDetail} />
          <Stack.Screen name="Account " component={AccountDetail} />
          {/* <Stack.Screen name="OrderCompleted" component={OrderCompleted} /> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default Navigation;
