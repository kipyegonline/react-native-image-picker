import { View, Text, StyleSheet } from "react-native";
import React from "react";

type TextProps = { children: React.ReactNode; styles: Object };
export default function AppText({ children, styles }: TextProps) {
  return <Text style={[defaultStyles.txt, styles]}>{children}</Text>;
}

const defaultStyles = StyleSheet.create({ txt: { lineHeight: 24 } });
