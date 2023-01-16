import { View, Text, TouchableOpacity } from "react-native";
import React, { useEffect, useState } from "react";
import i18n from "../../../localization/configLanguage";
//style
import Style from "./tutorial-Styles";

//icon
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface State {
  nText: number;
}
const initialState: State = {
  nText: 0,
};
const allTextTutorial: Array<string> = [
  i18n.t("tutorial.redoundo"),
  i18n.t("tutorial.draw"),
  i18n.t("tutorial.erase"),
  i18n.t("tutorial.background"),
  i18n.t("tutorial.save"),
  i18n.t("tutorial.gallery"),
];
const allIcon: Array<JSX.Element> = [
  <>
    <Ionicons name="arrow-undo" size={24} color="black" />
    <Ionicons name="arrow-redo" size={24} color="black" />
  </>,
  <Ionicons name="brush" size={24} color="black" />,
  <MaterialCommunityIcons name="eraser" size={24} color="black" />,
  <>
    <Feather name="image" size={24} color="black" />
    <Entypo name="folder-images" size={24} color="black" />
    <Feather name="camera" size={24} color="black" />
  </>,
  <Entypo name="save" size={24} color="black" />,
  <MaterialIcons name="photo-library" size={24} color="black" />,
];
interface Props {
  callbackEndTutorial: Function;
}

const Tutorial = (props: Props) => {
  const [state, setState] = useState<State>(initialState);

  const nextTutorial = (): void => {
    const nText = state.nText + 1;
    setState({
      ...state,
      nText: nText,
    });
    if (nText >= allTextTutorial.length) {
      props.callbackEndTutorial();
      return;
    }
  };
  return (
    <View style={Style.component}>
      <TouchableOpacity style={Style.textBox} onPress={nextTutorial}>
        <View style={Style.icon}>{allIcon[state.nText]}</View>
        <View>
          <Text style={Style.text}>{allTextTutorial[state.nText]}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Tutorial;
