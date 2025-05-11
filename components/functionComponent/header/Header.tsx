import { View, Text } from "react-native";
import React, { JSX } from "react";
import { Ionicons } from "@expo/vector-icons";

import Style from "./header-Styles";

type Props = {
  title: string;
  navigation: any;
  buttonBack: boolean;
};

const Header = (props: Props): JSX.Element => {
  function callbackNavBack(): void {
    props.navigation.goBack();
  }

  return (
    <View style={Style.containerHeader}>
      <View style={Style.backTitle}>
        {props.buttonBack && (
          <Ionicons
            onPress={callbackNavBack}
            name="arrow-back"
            size={24}
            color="black"
          />
        )}

        <Text style={[Style.title, !props.buttonBack && Style.colorTitle]}>
          {props.title}
        </Text>
      </View>
    </View>
  );
};

export default Header;
