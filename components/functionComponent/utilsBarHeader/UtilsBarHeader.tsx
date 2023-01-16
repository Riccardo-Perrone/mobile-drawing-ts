import {
  TouchableOpacity,
  View,
  TextInput,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useState } from "react";
import { ColorPicker, TriangleColorPicker } from "react-native-color-picker";

//icon
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

//styles
import Style from "./utilsBar-Style";

interface Props {
  refDrow: any;
}

interface State {
  drawModule: boolean;
  eraseModule: boolean;
}

const initialState = {
  drawModule: false,
  eraseModule: false,
};

let colorPen: string = "black";

const UtilsBarHeader = (props: Props) => {
  const [state, setState] = useState<State>(initialState);

  const ref = props.refDrow;

  function redo(): void {
    ref.current?.redo();
  }

  function undo(): void {
    ref.current?.undo();
  }

  function draw(): void {
    ref.current?.draw();
  }

  function erase(): void {
    ref.current?.erase();
  }

  function showDrawModule(): void {
    setState({
      ...state,
      drawModule: !state.drawModule,
      eraseModule: false,
    });
  }
  function showEraseModule(): void {
    setState({
      ...state,
      drawModule: false,
      eraseModule: !state.eraseModule,
    });
  }
  function onBlurModule(): void {
    setState({
      ...state,
      drawModule: false,
      eraseModule: false,
    });
  }

  function sizePen(e: string): void {
    ref.current?.changePenSize(Number(e), Number(e));
  }
  function colorBrush(color: string): void {
    ref.current?.changePenColor(color);
    colorPen = color;
  }

  return (
    <>
      <View style={Style.utilsBox}>
        <TouchableOpacity style={Style.redoUndo} onPress={undo}>
          <Ionicons name="arrow-undo" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.redoUndo}
          onLongPress={showDrawModule}
          onPress={draw}
        >
          <Ionicons name="brush" size={24} color={colorPen} />
        </TouchableOpacity>

        <TouchableOpacity
          style={Style.redoUndo}
          onPress={erase}
          onLongPress={showEraseModule}
        >
          <MaterialCommunityIcons name="eraser" size={24} color="black" />
        </TouchableOpacity>

        <TouchableOpacity style={Style.redoUndo} onPress={redo}>
          <Ionicons name="arrow-redo" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {(state.drawModule || state.eraseModule) && (
        <View style={Style.module}>
          <TextInput
            selection={{ start: 1, end: 20 }}
            style={[Style.moduleText, Style.moduleElement]}
            placeholder="gran. pennello"
            keyboardType="numeric"
            onChangeText={sizePen}
          />
          {state.drawModule && (
            <TriangleColorPicker
              onColorSelected={colorBrush}
              style={[Style.modulePicker, Style.moduleElement]}
            />
          )}
          <TouchableWithoutFeedback onPress={onBlurModule}>
            <View style={Style.onBlurModule}></View>
          </TouchableWithoutFeedback>
        </View>
      )}
    </>
  );
};

export default UtilsBarHeader;
