import { Dimensions, StyleSheet } from "react-native";

export default StyleSheet.create({
  footer: {
    width: "100%",
    alignItems: "flex-start",
  },
  utilsBox: {
    marginTop: 10,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  utils: {
    margin: 20,
    padding: 10,
  },
  modal: {
    marginLeft: 10,
    zIndex: 5,
    backgroundColor: "#9cd9c7",
    alignItems: "center",
  },
  modalElement: {
    margin: 20,
  },
  modalPicker: {
    width: 100,
    height: 100,
  },
  onBlurModal: {
    zIndex: -1,
    position: "absolute",
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
