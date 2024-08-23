import { View, Text, Image, StyleSheet, Button } from "react-native";
import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { TextInputComponent } from "../components/TextInput.component";

import {
  AppForm,
  AppFormField,
  AppSubmitButton,
  ErrorMessage,
} from "../components/Forms";

const validationSchema = Yup.object().shape({
  email: Yup.string().required().email().label("Email"),
  password: Yup.string().required().min(6).label("Password"),
});
export default function LoginScreen() {
  const handleLogin = () => {};
  return (
    <View style={styles.container}>
      <Image source={require("../assets/monkey.png")} style={styles.logo} />
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {}}
        validationSchema={validationSchema}
      >
        {({ handleChange, errors, setFieldTouched, touched }) => {
          return (
            <>
              <TextInputComponent
                autoCorrect
                //name="email"
                keyboardType="email-address"
                placeholder="Enter email address"
                textContentType="emailAddress"
                onChangeText={handleChange("email")}
                onBlur={() => setFieldTouched("email")}
                label="Enter email"
              />
              {touched.email && <ErrorMessage error={errors.email} />}
              <TextInputComponent
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry
                label="Enter password"
                //name="password"
                placeholder="Enter password"
                textContentType="password"
                onBlur={() => setFieldTouched("password")}
                onChangeText={handleChange("password")}
              />
              {touched.password && <ErrorMessage error={errors.password} />}
              <AppSubmitButton />
            </>
          );
        }}
      </Formik>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, paddingTop: 15, paddingHorizontal: 20 },
  logo: {
    width: 80,
    height: 80,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
    borderRadius: 5,
  },
});
