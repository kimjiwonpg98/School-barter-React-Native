import React, { useState, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled, { ThemeContext } from "styled-components/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import MainTab from "./MainTab";

const Stack = createStackNavigator();

const MainStack = () => {
  const [isFontReady, setIsFontReady] = useState(false);

  const theme = useContext(ThemeContext);

  async function _loadFonts() {
    await Font.loadAsync({
      BM_HANNA_PRO: require("../../assets/fonts/BMHANNAPro.ttf"),
    });
  }

  return isFontReady ? (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{
        headerTitle: "IDU",
        headerTitleStyle: {
          fontFamily: "BM_HANNA_PRO",
        },
        headerTintColor: theme.headerTintColor,
        headerBackTitleVisible: false,
        headerStyle: {
          height: 80,
          borderBottomWidth: 1,
          borderBottomColor: theme.boardsButton,
        },

        cardStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={{
          headerTitle: "아이두",
          headerTitleStyle: {
            color: theme.headerTintColor,
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "BM_HANNA_PRO",
          },
          headerTitleAlign: "left",
        }}
      />
    </Stack.Navigator>
  ) : (
    <AppLoading
      startAsync={_loadFonts}
      onFinish={() => setIsFontReady(true)}
      onError={console.error}
    />
  );
};

export default MainStack;
