import { View, Text } from "react-native";
import React from "react";
import { Formik } from "formik";

type Props = {
  initialValues: Record<string, string>;
  children: React.ReactNode;
  validationSchema: unknown;
};
export default function AppFormComponent({
  initialValues,
  validationSchema,
  children,
}: Props) {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => {}}
      validationSchema={validationSchema}
    >
      {() => <>{children}</>}
    </Formik>
  );
}
