import React from "react";
import { ImageBackground } from "react-native";

export default function Background(props) {
  return (
    <ImageBackground source={require("../assets/background.jpg")}>
      {props.children}
    </ImageBackground>
  );
}
