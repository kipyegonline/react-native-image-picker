import React from "react";
import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigationcomponent from "./components/navigation/Navigation.component";

export default function App() {
  const getImagePermissions = async () => {
    // const response=await  Permissions.askAsync(Permissions.CAMERA)
    const response = await ImagePicker.requestCameraPermissionsAsync();
    if (!response.granted) {
      alert("You need to allow this feature");
    }
  };

  React.useEffect(() => {
    getImagePermissions();
  }, []);
  return (
    <>
      <GestureHandlerRootView>
        <Navigationcomponent />
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
