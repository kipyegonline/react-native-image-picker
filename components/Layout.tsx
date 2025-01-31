import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import Constants from "expo-constants";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.view}>{children}</View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  screen: { paddingTop: Constants.statusBarHeight, flex: 1 },
  view: { flex: 1 },
});
