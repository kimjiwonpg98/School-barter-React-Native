import React, { useState } from "react";
import { Image } from "react-native";
import AppLoading from "expo-app-loading";
import { Asset } from "expo-asset";
import * as Font from "expo-font";

import Navigation from "./navigations";

//앱 아이콘 로딩화면
const cacheImages = (images) => {
  return images.map((image) => {
    if (typeof image === "string") {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
};
// 폰트수정
const cacheFonts = (fonts) => {
  return fonts.map((font) => Font.loadAsync(font));
};

const App = () => {
  //앱 아이콘 로딩화면
  // 환경에따라 이미지나 폰트가 느리게적용되는 문제 개선
  const [isReady, setIsReady] = useState(false);

  const _loadAssets = async () => {
    const imageAssets = cacheImages([require("../assets/splash.png")]);
    const fontAssets = cacheFonts([]);

    await Promise.all([...imageAssets, ...fontAssets]);
  };

  return isReady ? (
    <Navigation />
  ) : (
    <AppLoading
      startAsync={_loadAssets}
      onFinish={() => setIsReady(true)}
      onError={console.warn}
    />
  );
};

export default App;
