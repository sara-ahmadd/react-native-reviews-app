import React from "react";
import { View, Text, Button, Image } from "react-native";
import { globalStyles } from "../styles/global";
export default function ReviewDetails({ route }) {
  const { title, body, rating } = route.params;

  let ratingArray = ["1", "2", "3", "4", "5"];

  ratingArray = ratingArray.slice(0, ratingArray.indexOf(rating) + 1);

  return (
    <View style={globalStyles.reviewContainer}>
      <Text style={globalStyles.title}> {title}</Text>
      <Text style={globalStyles.body}> {body}</Text>
      <View style={globalStyles.ratingContainer}>
        <Text style={globalStyles.rating}>Game Zone Rating : </Text>
        {ratingArray.map((x) => {
          return <Image key={x} source={require("../assets/star.png")} />;
        })}
      </View>
    </View>
  );
}
