import React from "react";
import { Button, Text, TextInput, TouchableOpacity, View } from "react-native";
import { globalStyles } from "../styles/global";
import { Formik } from "formik";
import * as yup from "yup";
import FlatButton from "../components/flatButton";

const validationSchemaYup = yup.object({
  title: yup.string().required().min(5),
  body: yup.string().required().min(10),
  rating: yup
    .string()
    .required()
    .max(1)
    .test("From-1-to-5", "Rating must be from 1 to 5", (val) => {
      return parseInt(val) > 0 && parseInt(val) < 6;
    }),
});
export default function ReviewForm({ setReviews, setModal, getId }) {
  let num = 11;
  return (
    <View style={globalStyles.container}>
      <Formik
        validationSchema={validationSchemaYup}
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
                onBlur={props.handleBlur("title")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.title && props.errors.title}
              </Text>
              <TextInput
                style={globalStyles.input}
                multiline
                title={"Review Body"}
                placeholder="Review Body"
                onChangeText={props.handleChange("body")}
                value={props.values.body}
                onBlur={props.handleBlur("body")}
              />
              <Text style={globalStyles.errorText}>
                {props.touched.body && props.errors.body}
              </Text>
              <TextInput
                style={globalStyles.input}
                title={"Rating"}
                placeholder="Rating 1-5"
                onChangeText={props.handleChange("rating")}
                value={props.values.rating}
                onBlur={props.handleBlur("rating")}
                keyboardType="numeric"
              />
              <Text style={globalStyles.errorText}>
                {props.touched.rating && props.errors.rating}
              </Text>
              <FlatButton
                pressHandler={props.handleSubmit}
                text={"Add Review"}
              />
            </View>
          );
        }}
      </Formik>
    </View>
  );
}
