import React, { useContext } from "react";
import { ThemeContext } from "styled-components/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login, Signup, FindPw, FindId } from "../screens";

const Stack = createStackNavigator();

function AuthStack() {
  const theme = useContext(ThemeContext);
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerTitleAlign: "center",
        cardStyle: { backgroundColor: theme.backgroundColor },
        // 메인화면 헤더 제거
        headerTintColor: theme.headerTintColor,
      }}
    ></Stack.Navigator>
  );
}

export default AuthStack;
