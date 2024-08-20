import { View, Text } from "react-native";
import React from "react";
import { TextInputComponent } from "../TextInput.component";
import ErrorMessageComponent from "./ErrorMessage.component";
import { useFormikContext } from "formik";

export default function AppFormFiled({ name, ...props }) {
  const { handleChange, setFieldTouched, touched } = useFormikContext();
  return (
    <>
      <TextInputComponent
        onChangeText={handleChange("email")}
        onBlur={() => setFieldTouched("email")}
        {...props}
      />

      <ErrorMessageComponent error={touched[name]} />
    </>
  );
}
