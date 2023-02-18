import React from "react";
import { Button, TextInput, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";

export default function ReviewForm({ setReviews, setModal, getId }) {
  let num = 11;
  return (
    <View style={globalStyles.container}>
      <Formik
        initialValues={{ title: "", body: "", rating: "" }}
        onSubmit={(values) => {
          console.log(values);
          num++;
          setReviews((prev) => [{ id: getId + num, ...values }, ...prev]);
          setModal(false);
        }}
      >
        {(props) => {
          return (
            <View style={globalStyles.container}>
              <TextInput
                style={globalStyles.input}
                title={"Review Title"}
                placeholder="Review Title"
                onChangeText={props.handleChange("title")}
                value={props.values.title}
              />
              <TextInput
                style={globalStyles.input}
                multiline
                title={"Review Body"}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
              />
              <TextInput
                style={globalStyles.input}
                title={"Rating"}
                placeholder="Rating 1-5"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                keyboardType="numeric"
              />
              <Button
                color="blue"
                title="submit"
                onPress={props.handleSubmit}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
