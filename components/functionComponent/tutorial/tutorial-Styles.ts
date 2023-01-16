import { StyleSheet, Dimensions } from "react-native";

export default StyleSheet.create({
  component: {
    position: "absolute",
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  textBox: {
    width: "70%",
    backgroundColor: "#d4d4d4",
    padding: 10,
    borderRadius: 10,
  },
  text: {
    fontSize: 24,
  },
  icon: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-around",
  },
});
