import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import React, { PropsWithChildren, ComponentProps } from "react";

type Props = { label: string };
export function TextInputComponent(props: Props) {
  return (
    <View style={styles.container}>
      <Text>{props.label}</Text>
      <TextInput {...props} style={styles.textInput} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  textInput: { fontSize: 18, fontFamily: "" },
});

export const AppSwitch = ({ value = false, setValue = () => {} }) => {
  return <Switch value={value} onValueChange={setValue} />;
};
