import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

type Props = {
  title: string;
  onPress: () => void;
  style?: Record<string, string | number>;
};
export default function AppButtoncomponent({ onPress, title, style }: Props) {
  return (
    <TouchableOpacity style={[styles.btn, style]} onPress={onPress}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    paddingVertical: 10,
    borderRadius: 15,
    backgroundColor: "goldenrod",
    marginTop: 8,
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    fontSize: 18,
  },
});
