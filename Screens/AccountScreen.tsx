import { View, Text, StyleSheet } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";

export default function AccountScreen() {
  return (
    <View style={styles.container}>
      <ListItem
        title="Vince"
        sub="Web developer"
        image={require("../assets/IMG_848rrr6.jpg")}
        onPress={() => {}}
        renderRightActions={() => null}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: { paddingLeft: 10, paddingTop: 10 },
});
