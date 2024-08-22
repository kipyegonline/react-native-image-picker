import { View, Text, StyleSheet } from "react-native";
import React from "react";
import AppText from "../AppText";

export default function ErrorMessageComponent({ error = "" }) {
  if (!error) return null;
  return <AppText styles={styles.error}>{error}</AppText>;
}
const styles = StyleSheet.create({
  error: { color: "red", paddingLeft: 15 },
});
