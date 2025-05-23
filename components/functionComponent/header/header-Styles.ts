import { StyleSheet, Platform, StatusBar } from "react-native";

export default StyleSheet.create({
  containerHeader: {
    height: 100,
    paddingRight: 20,
    paddingLeft: 20,
    margin: -3,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    marginLeft: 10,
  },
  backTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  colorTitle: {
    color: "red",
  },
});
