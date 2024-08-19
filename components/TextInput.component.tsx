import { View, Text, TextInput, StyleSheet, Switch } from "react-native";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & { label: string };
export default function TextInputComponent(props: Props) {
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

export const AppSwitch = ({
  value = false,
  setValue = (val: boolean) => {},
}) => {
  return <Switch value={value} onValueChange={setValue} />;
};
