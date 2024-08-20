import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../Screens/Home";
import { View, StyleSheet, Button } from "react-native";
import MapApp from "../Screens/MapApp";
import CarouselComponent from "./Carousel.component";
import LoginScreen from "../Screens/LoginWScreen";
import ListingsScreen from "../Screens/ListingsScreen";
import AccountScreen from "../Screens/AccountScreen";
export type RootStackNavigatorProps = {
  Home: undefined;
  Map: undefined;
  Carousel: undefined;
  Login: undefined;
  Account: undefined;
  Listing: undefined;
};

const Stack = createNativeStackNavigator<RootStackNavigatorProps>();

export default function Navigationcomponent() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          // options={{ headerShown: false }}
          options={{ title: "Welcome to Bird's paradise" }}
        />
        <Stack.Screen
          name="Map"
          component={MapApp}
          options={({ route }) => ({
            headerRight: () => <Button title="Back" onPress={() => null} />,
          })}
        />
        <Stack.Screen name="Carousel" component={CarouselComponent} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Listing" component={ListingsScreen} />
        <Stack.Screen name="Account" component={AccountScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
