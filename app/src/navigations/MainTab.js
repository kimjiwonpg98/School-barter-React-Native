import React, { useContext, useEffect, useState } from "react";
import { ThemeContext } from "styled-components/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Main, Community, Market, Profile } from "../screens";
import { Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const TabBarIconIonicons = ({ focused, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <Ionicons
      name={name}
      size={focused ? 32 : 24}
      color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
    />
  );
};

const TabBarIconMaterialIcons = ({ focused, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <MaterialIcons
      name={name}
      size={focused ? 32 : 24}
      color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
    />
  );
};

const TabBarIconAntDesign = ({ focused, name }) => {
  const theme = useContext(ThemeContext);
  return (
    <AntDesign
      name={name}
      size={focused ? 32 : 24}
      color={focused ? theme.tabActiveColor : theme.tabInactiveColor}
    />
  );
};

const MainTab = () => {
  const theme = useContext(ThemeContext);

  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: theme.tabActiveColor,
        inactiveTintColor: theme.tabInactiveColor,
        headerShown: false,
        showLabel: false,
      }}
    >
      <Tab.Screen
        name="Idu"
        component={Main}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIconIonicons({
              focused,
              name: "home",
            }),
        }}
      />
      <Tab.Screen
        name="커뮤니티"
        component={Community}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIconMaterialIcons({
              focused,
              name: "forum",
            }),
        }}
      />
      <Tab.Screen
        name="장터"
        component={Market}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIconAntDesign({
              focused,
              name: "shoppingcart",
            }),
        }}
      />
      <Tab.Screen
        name="마이페이지"
        component={Profile}
        options={{
          tabBarIcon: ({ focused }) =>
            TabBarIconMaterialIcons({
              focused,
              name: "person",
            }),
        }}
      />
    </Tab.Navigator>
  );
};

export default MainTab;
