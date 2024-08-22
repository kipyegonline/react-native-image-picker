import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import Navigationcomponent from "./components/Navigation.component";

export default function App() {
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
