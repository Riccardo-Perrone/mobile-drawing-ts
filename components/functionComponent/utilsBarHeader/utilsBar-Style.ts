import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  utilsBox: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  redoUndo: {
    margin: 20,
    padding: 10,
  },
  module: {
    zIndex: 5,
    backgroundColor: "#9cd9c7",
    alignItems: "center",
  },
  moduleElement: {
    margin: 20,
  },
  moduleText: {
    width: 100,
    borderWidth: 1,
  },
  modulePicker: {
    width: 100,
    height: 100,
  },
  onBlurModule: {
    zIndex: -1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
