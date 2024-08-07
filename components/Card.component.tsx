import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { width } = Dimensions.get("window");
export default function CardComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <View style={styles.card}>{children}</View>;
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    width: "100%", //(width * 3) / 4,
    height: 200,
    elevation: 10,
    borderRadius: 8,
  },
});
