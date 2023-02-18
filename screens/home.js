import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { globalStyles } from "../styles/global";
import Card from "../components/card";
import { Entypo } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import ReviewForm from "./reviewForm.js";

export default function Home({ navigation }) {
  const [modal, setModal] = useState(false);
  const goToReview = (item) => {
    navigation.navigate("ReviewDetails", item);
  };
  const generateId = () => Math.floor(Math.random() * 100) + 11;

  const [reviews, setReviews] = useState([
    {
      title: "Title 1",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: "5",
      id: generateId + 1,
    },
    {
      title: "Title 2",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: "2",
      id: generateId + 2,
    },
    {
      title: "Title 3",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: "5",
      id: generateId + 3,
    },
    {
      title: "Title 4",
      body: `commodo adipisicing consectetur excepteur pariatur minim quis consequat est.Pariatur `,
      rating: "3",
      id: generateId + 4,
    },
  ]);
  const deleteReview = (review) => {
    setReviews((prev) => (prev = prev.filter((x) => x.id !== review.id)));
  };
  const showModal = () => {
    setModal(!modal);
  };

  return (
    <View style={globalStyles.homeContainer}>
      <TouchableOpacity onPress={showModal}>
        <Entypo name="plus" size={24} color="black" />
      </TouchableOpacity>
      <Modal visible={modal} animationType="slide">
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={globalStyles.container}>
            <Ionicons
              onPress={() => showModal(!modal)}
              name="close"
              size={24}
              color="black"
            />
            <ReviewForm
              setReviews={setReviews}
              setModal={setModal}
              getId={generateId}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
      <FlatList
        data={reviews}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => goToReview(item)}>
            <Card style={globalStyles.reviewContainer}>
              <MaterialIcons
                onPress={() => deleteReview(item)}
                name="delete-forever"
                size={24}
                style={{
                  marginRight: 10,
                }}
                color="black"
              />
              <Text style={globalStyles.title}> {item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
