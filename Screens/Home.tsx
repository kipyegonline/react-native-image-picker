import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorProps } from "../components/Navigation.component";
type Props = NativeStackScreenProps<RootStackNavigatorProps>;
export default function Home({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        Go away
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, padding: 10 },
});
