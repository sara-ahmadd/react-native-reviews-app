import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ReviwDetails from "../screens/reviewDetails.js";
import Home from "../screens/home.js";

const Stack = createStackNavigator();

export default function HomeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#649bfa" },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          title: "Home",
        }}
      />
      <Stack.Screen
        name="ReviewDetails"
        component={ReviwDetails}
        options={{
          title: "Review Details",
        }}
      />
    </Stack.Navigator>
  );
}
