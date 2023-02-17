import React, { useState } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import { globalStyles } from "../styles/global";
export default function Home({ navigation }) {
  const goToReview = (item) => {
    navigation.navigate("ReviewDetails", item);
  };
  const generateId = () => Math.floor(Math.random() * 100);
  const [reviews, setReviews] = useState([
    {
      title: "Review 1",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: 5,
      id: generateId + 1,
    },
    {
      title: "Review 2",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: 2,
      id: generateId + 2,
    },
    {
      title: "Review 3",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: 5,
      id: generateId + 3,
    },
    {
      title: "Review 4",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: 3,
      id: generateId + 4,
    },
  ]);

  return (
    <View style={globalStyles.homeContainer}>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={globalStyles.review}
            onPress={() => goToReview(item)}
          >
            <Text style={globalStyles.title}> {item.title}</Text>
            <Text style={globalStyles.body}> {item.body}</Text>
            <Text style={globalStyles.rating}>Rating : {item.rating}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
