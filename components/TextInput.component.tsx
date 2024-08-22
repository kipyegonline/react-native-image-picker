import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import React, { PropsWithChildren, ComponentProps } from "react";

type Props = { label: string; width: string | number };
export function TextInputComponent(props: Props) {
  const width = props.width;
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <TextInput {...props} style={[styles.textInput]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 10,
    paddingHorizontal: 25,
    marginVertical: 10,
  },
  textInput: { fontSize: 18, fontFamily: "" },
});

export const AppSwitch = ({ value = false, setValue = () => {} }) => {
  return <Switch value={value} onValueChange={setValue} />;
};
