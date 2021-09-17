import React, { useState, useContext } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import styled, { ThemeContext } from "styled-components/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";

import MainTab from "./MainTab";

import { Alert } from "../screens";
import AlertContainer from "../components/alert/AlertContainer";

const Stack = createStackNavigator();

const MainStack = ({ navigation }) => {
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
        headerTitle: "School Barter",
        headerTitleStyle: {
          fontFamily: "BM_HANNA_PRO",
        },
        headerTintColor: theme.headerTintColor,
        headerBackTitleVisible: false,
        headerStyle: {
          height: 80,
          borderBottomWidth: 1,
          borderBottomColor: theme.text,
        },

        cardStyle: { backgroundColor: theme.backgroundColor },
      }}
    >
      <Stack.Screen
        name="Main"
        component={MainTab}
        options={({ navigation }) => ({
          headerTitle: "School Barter",
          headerTitleStyle: {
            color: theme.text,
            fontSize: 24,
            fontWeight: "bold",
            fontFamily: "BM_HANNA_PRO",
          },
          headerTitleAlign: "left",
          headerRight: () => <AlertContainer navigation={navigation} />,
        })}
      />
      <Stack.Screen name="Alert" component={Alert} />
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
