import { View, Text, StyleSheet, TextProps } from "react-native";
import React from "react";

type AppTextProps = { children: React.ReactNode; styles: Object };
export default function AppText({
  children,
  styles,
  ...props
}: TextProps & AppTextProps) {
  return (
    <Text style={[defaultStyles.txt, styles]} {...props}>
      {children}
    </Text>
  );
}

const defaultStyles = StyleSheet.create({ txt: { lineHeight: 24 } });
