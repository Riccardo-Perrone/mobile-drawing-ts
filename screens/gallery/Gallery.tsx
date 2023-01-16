import { View, Text, FlatList, ListRenderItem, Image } from "react-native";
import React, { useEffect, useState } from "react";
import * as MediaLibrary from "expo-media-library";
//style
import Style from "./gallery-Styles";
//components function
import Header from "../../components/functionComponent/header/Header";
//language
import i18n from "../../localization/configLanguage";

const Item = ({ asset }: any): JSX.Element => (
  <Image source={{ uri: asset.uri }} style={Style.image}></Image>
);

const Gallery = ({ navigation, route }: any) => {
  const [state, setState] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData(): Promise<void> {
    let album = await MediaLibrary.getAlbumAsync("Drawing App");
    if (album != null) {
      const allPhoto: MediaLibrary.PagedInfo<MediaLibrary.Asset> =
        await MediaLibrary.getAssetsAsync({
          album: album,
        });
      console.log(allPhoto);
      setState(allPhoto.assets);
    }
  }

  const renderItem: ListRenderItem<MediaLibrary.Asset> = ({
    item,
  }: any): JSX.Element => {
    return <Item asset={item} />;
  };

  return (
    <View style={Style.container}>
      <Header
        navigation={navigation}
        buttonBack={true}
        title={i18n.t("gallery.title")}
      />
      <View style={Style.flatList}>
        {!!state && (
          <FlatList
            numColumns={4}
            data={state}
            renderItem={renderItem}
          ></FlatList>
        )}
      </View>
    </View>
  );
};

export default Gallery;
