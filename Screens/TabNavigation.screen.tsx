import { View, Text } from "react-native";
import { CreateBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
type TabProps = { Profile: undefined; posts: undefined };

const Tab = createBottomTabNavigator<TabProps>();

const TabNavigator = () => (
  <Tab.Navigator mode="modal">
    <Tab.Screen
      options={{
        tabIcon: ({ color, size }) => (
          <MaterialCommunityIcons name="Home" color={color} size={size} />
        ),
      }}
    />
  </Tab.Navigator>
);
export default function TabNavigationScreen() {
  return <TabNavigator />;
}
