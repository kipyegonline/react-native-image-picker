import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";

export default function ListItem({ image, title = "", sub = "" }) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <View>
        <AppText styles={styles.title}>{title}</AppText>
        <AppText styles={styles.sub}>{sub}</AppText>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { width: 70, height: 70, borderRadius: 35 },
  title: { fontSize: 18, fontWeight: "500" },
  sub: { fontSize: 14, fontWeight: "400" },
});
