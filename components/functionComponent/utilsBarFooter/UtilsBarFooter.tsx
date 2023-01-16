import { TouchableOpacity, View } from "react-native";
import React, { useState } from "react";
import * as ImagePicker from "expo-image-picker";

//icon
import { Entypo } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

//styles
import Style from "./utilsBarFooter-Style";

interface Props {
  refDrow: any;
  callbackPickImage: Function;
  callbackCameraImage: Function;
  callbackTutorial: Function;
  navigation: any;
}

interface State {
  imageModal: boolean;
}

const initialState = {
  imageModal: false,
};

const UtilsBarHeader = (props: Props) => {
  const [state, setState] = useState<State>(initialState);

  const ref = props.refDrow;

  function showDrawModule(): void {
    setState({
      ...state,
      imageModal: !state.imageModal,
    });
  }

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    props.callbackPickImage(result);
  };
  const CameraImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      base64: true,
      quality: 1,
    });

    console.log(result);

    props.callbackCameraImage(result);
  };

  const gallery = (): any => {
    props.navigation.navigate("Gallery");
  };

  const saveDraw = () => {
    props.refDrow.current?.readSignature();
  };
  const tutorial = () => {
    props.callbackTutorial();
  };

  return (
    <View style={Style.footer}>
      {state.imageModal && (
        <View style={Style.modal}>
          <TouchableOpacity style={[Style.modalElement]} onPress={pickImage}>
            <Entypo name="folder-images" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity style={[Style.modalElement]} onPress={CameraImage}>
            <Feather name="camera" size={24} color="black" />
          </TouchableOpacity>
        </View>
      )}

      <View style={Style.utilsBox}>
        <TouchableOpacity style={Style.utils} onPress={showDrawModule}>
          <Feather name="image" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={Style.utils} onPress={saveDraw}>
          <Entypo name="save" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={Style.utils} onPress={gallery}>
          <MaterialIcons name="photo-library" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity style={Style.utils} onPress={tutorial}>
          <Feather name="info" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UtilsBarHeader;
