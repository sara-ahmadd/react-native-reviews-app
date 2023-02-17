import React from "react";
import { View, Text, Button } from "react-native";
import { globalStyles } from "../styles/global";
export default function ReviewDetails({ route, navigation }) {
  // const goHome = () => {
  //   navigation.goBack("ReviewDetails");
  // };
  const { title, body, rating } = route.params;
  return (
    <View style={globalStyles.reviewContainer}>
      <Text style={globalStyles.title}> {title}</Text>
      <Text style={globalStyles.body}> {body}</Text>
      <Text style={globalStyles.rating}>Rating : {rating}</Text>
    </View>
  );
}
