import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Switch,
  TextInputProps,
} from "react-native";
import React, { PropsWithChildren, ComponentProps } from "react";

type Props = { label: string; width?: string | number } & TextInputProps;
export function TextInputComponent({ width, label, ...props }: Props) {
  return (
    <View style={styles.container}>
      <TextInput {...props} style={[styles.textInput]} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ccc",
    borderRadius: 25,
    //flexDirection: "row",
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
