import "react-native-reanimated";
import React from "react";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./stacks/homeStack.js";
import AboutStack from "./stacks/aboutStack.js";

const Drawer = createDrawerNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    nunitoRegular: require("./assets/fonts/Nunito-Regular.ttf"),
    nunitoBold: require("./assets/fonts/Nunito-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
