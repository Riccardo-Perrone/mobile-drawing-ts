import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  containerDraw: {
    alignItems: "center",
    justifyContent: "space-between",
    flex: 1,
  },
  drawPad: {
    position: "absolute",
    width: "100%",
    height: "100%",
    marginTop: 70,
    zIndex: -5,
  },
});
