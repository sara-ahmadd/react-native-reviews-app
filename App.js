import "react-native-reanimated";
import React from "react";

import { useFonts } from "expo-font";

import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeStack from "./stacks/homeStack.js";
import AboutStack from "./stacks/aboutStack.js";
import Header from "./components/header.js";
import Background from "./components/background.js";

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
      <Drawer.Navigator
        screenOptions={{
          headerBackground: () => (
            <Background>
              <Header title={null} logo={false} />
            </Background>
          ),
          headerTitleAlign: "center",
          headerStyle: {
            height: 100,
          },
          headerBackgroundContainerStyle: { opacity: 0.1 },
          headerTitle: () => <Header title={"Game Zone"} logo={true} />,
        }}
      >
        <Drawer.Screen name="Home Page" component={HomeStack} />
        <Drawer.Screen name="About Page" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
