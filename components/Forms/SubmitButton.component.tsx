import { View, Text, Button, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButtonComponent({ title = "Login" }) {
  const { handleSubmit } = useFormikContext();
  return (
    <TouchableOpacity style={styles.btn} onPress={() => handleSubmit()}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  btn: {
    width: "100%",
    backgroundColor: "goldenrod",
    paddingVertical: 10,
    borderRadius: 15,
    marginTop: 10,
  },
  text: { textAlign: "center", color: "white", fontSize: 18 },
});
