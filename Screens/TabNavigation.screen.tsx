import { View, Text, Linking } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import ListingsScreen from "./ListingsScreen";
type TabProps = { Profile: undefined; posts: undefined };

const Tab = createBottomTabNavigator<TabProps>();

const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen
      name="Profile"
      /*  options={({ route }) => ({
        tabIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Home" color={color} size={size} />
        ),
      })}*/
      component={ListingsScreen}
    />
  </Tab.Navigator>
);
export default function TabNavigationScreen() {
  return <TabNavigator />;
}
