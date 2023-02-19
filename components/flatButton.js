import { Text, View, TouchableOpacity } from "react-native";
import { globalStyles } from "../styles/global";

export default function FlatButton({ text, pressHandler }) {
  return (
    <TouchableOpacity onPress={pressHandler}>
      <Text style={globalStyles.submitBtn}>{text}</Text>
    </TouchableOpacity>
  );
}
