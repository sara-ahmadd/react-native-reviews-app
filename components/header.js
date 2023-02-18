import { Image, StyleSheet, Text, View } from "react-native";
export default function Header({ title, logo }) {
  return (
    <View style={styles.headerContianer}>
      <View style={styles.headerTitle}>
        {logo ? (
          <Image source={require("../assets/logo.png")} style={styles.img} />
        ) : null}
        <Text style={styles.headerText}>{title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headerContianer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%",
    paddingVertical: 10,
  },
  headerTitle: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 2,
    marginLeft: 10,
  },
  img: {
    width: 30,
    height: 30,
  },
});
