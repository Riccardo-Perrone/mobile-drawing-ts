import SignatureScreen, {
  SignatureViewRef,
} from "react-native-signature-canvas";
import { useRef, useState } from "react";
import { View, Button, Text } from "react-native";
import * as ImagePicker from "expo-image-picker";
import * as FileSystem from "expo-file-system";
import * as MediaLibrary from "expo-media-library";

//Styles
import Style from "./drawing-Styles";
//components Function
import UtilsBarHeader from "../../components/functionComponent/utilsBarHeader/UtilsBarHeader";
import UtilsBarFooter from "../../components/functionComponent/utilsBarFooter/UtilsBarFooter";
import Tutorial from "../../components/functionComponent/tutorial/Tutorial";

interface State {
  imageUrl: string;
  tutorial: boolean;
}
const initialState: State = {
  imageUrl: "",
  tutorial: false,
};

const Drawing = ({ navigation, route }: any) => {
  const [state, setState] = useState<State>(initialState);

  const [permissionCamera, requestpermissionCamera] =
    ImagePicker.useCameraPermissions();
  const [statusMediaIP, requeststatusMediaIP] =
    ImagePicker.useMediaLibraryPermissions();

  // const [statusMedaiaL, requeststatusMedaiaL] = MediaLibrary.usePermissions();
  const [permissionResponse, requestPermission] = MediaLibrary.usePermissions();

  const ref = useRef<SignatureViewRef>(null);

  //controlli permessi
  if (!permissionResponse || !statusMediaIP || !permissionCamera) {
    return <View />;
  }

  if (!permissionResponse.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button onPress={requestPermission} title="grant permission media" />
      </View>
    );
  }
  if (!permissionCamera.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button
          onPress={requestpermissionCamera}
          title="grant permission Camera"
        />
      </View>
    );
  }
  if (!statusMediaIP.granted) {
    return (
      <View>
        <Text>We need your permission to show the camera</Text>
        <Button
          onPress={requeststatusMediaIP}
          title="grant permission media per ImagePicker"
        />
      </View>
    );
  }

  const style: string = `.m-signature-pad--footer {display: none; margin: 0px;} body,html {
  width: 100%; height: 90%;}`;

  // Called after ref.current.readSignature() reads a non-empty base64 string
  const handleOK = async (signature: string): Promise<void> => {
    const path: string = FileSystem.cacheDirectory + "sign.png";

    FileSystem.writeAsStringAsync(
      path,
      signature.replace("data:image/png;base64,", ""),
      { encoding: FileSystem.EncodingType.Base64 }
    )
      .then(() => FileSystem.getInfoAsync(path))
      .then(console.log)
      .catch(console.error);

    const asset: MediaLibrary.Asset = await MediaLibrary.createAssetAsync(path);

    //sposto nella cartella title
    let title: string = "Drawing App";
    let album: MediaLibrary.Album = await MediaLibrary.getAlbumAsync(title);
    console.log("album", album);

    if (album === null) {
      MediaLibrary.createAlbumAsync(title, asset, false);
    } else {
      MediaLibrary.addAssetsToAlbumAsync(asset, album, false);
    }
  };

  const callbackPickImage = async (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets && result.assets[0]) {
      const asset = result.assets[0];
      if (asset.base64) {
        setState({
          ...state,
          imageUrl: asset.base64,
        });
      }
    }
  };

  const callbackCameraImage = async (result: ImagePicker.ImagePickerResult) => {
    if (!result.canceled && result.assets && result.assets[0]) {
      const asset = result.assets[0];
      if (asset.base64) {
        setState({
          ...state,
          imageUrl: asset.base64,
        });
      }
    }
  };
  const handleTutorial = () => {
    setState({
      ...state,
      tutorial: !state.tutorial,
    });
  };

  return (
    <View style={Style.containerDraw}>
      {state.tutorial && <Tutorial callbackEndTutorial={handleTutorial} />}

      <UtilsBarHeader refDrow={ref} />

      <SignatureScreen
        backgroundColor="rgba(255,255,255,1)"
        dataURL={
          state.imageUrl != "" ? `data:image/png;base64,${state.imageUrl}` : ""
        }
        ref={ref}
        style={Style.drawPad}
        onOK={handleOK}
        webStyle={style}
      />

      <UtilsBarFooter
        refDrow={ref}
        callbackPickImage={callbackPickImage}
        callbackCameraImage={callbackCameraImage}
        callbackTutorial={handleTutorial}
        navigation={navigation}
      />
    </View>
  );
};

export default Drawing;
