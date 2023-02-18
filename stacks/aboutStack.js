import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import About from "../screens/about.js";

const Stack = createStackNavigator();

export default function AboutStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#649bfa" },
        headerTitleAlign: "center",
        headerTintColor: "#fff",
      }}
    >
      <Stack.Screen
        name="About"
        component={About}
        options={{
          title: "About",
        }}
      />
    </Stack.Navigator>
  );
}
