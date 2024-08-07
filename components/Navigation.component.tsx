import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import { View, StyleSheet, Button } from "react-native";
import MapApp from "../Screens/MapApp";
export type RootStackNavigatorProps = { Home: undefined; Map: undefined };

const Stack = createNativeStackNavigator<RootStackNavigatorProps>();

export default function Navigationcomponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
          options={{ title: "Welcome" }}
        />
        <Stack.Screen
          name="Map"
          component={MapApp}
          options={({ route }) => ({
            headerRight: () => <Button title="Open" />,
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
