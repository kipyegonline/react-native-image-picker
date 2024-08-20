import { View, Text, Button } from "react-native";
import React from "react";
import { useFormikContext } from "formik";

export default function SubmitButtonComponent({ title = "Login" }) {
  const { handleSubmit } = useFormikContext();
  return <Button title={title} onPress={() => handleSubmit()} />;
}
