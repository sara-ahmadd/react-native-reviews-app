import { StyleSheet } from "react-native";

export const globalStyles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
    backgroundColor: "#fff",
  },
  text: {
    fontFamily: "nunitoBold",
    fontSize: 18,
  },
  homeContainer: {
    alignItems: "center",
    backgroundColor: "#fff",
    justifyContent: "center",
    flex: 1,
    paddingTop: 10,
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
  },
  body: {
    fontSize: 18,
    textAlign: "left",
  },
  ratingContainer: {
    borderWidth: 1,
    borderColor: "#eee",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
    padding: 7,
    width: "100%",
  },
  rating: {
    fontSize: 20,
    fontWeight: "bold",
  },
  reviewContainer: {
    padding: 10,
    borderRadius: 6,
    backgroundColor: "#fff",
    margin: 15,
    width: 360,
    elevation: 4,
    shadowOffset: { width: 4, height: 4 },
    shadowColor: "#333",
    shadowRadius: 7,
    shadowOpacity: 0.4,
  },
  flex: {
    flexDirection: "row",
    alignItems: "center",
  },
  btn: {
    padding: 20,
  },
  aboutText: {
    fontSize: 18,
  },
  input: {
    borderRadius: 7,
    borderWidth: 1,
    borderColor: "#333",
    fontSize: 18,
    marginVertical: 10,
    padding: 10,
  },
  errorText: {
    color: "red",
    marginBottom: 20,
    fontSize: 18,
  },
  submitBtn: {
    width: 150,
    height: 50,
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    borderRadius: 9,
    alignSelf: "center",
    backgroundColor: "#60a9f7",
    color: "#fff",
    fontWeight: "bold",
  },
});
