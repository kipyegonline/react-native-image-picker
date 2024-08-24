import { View, Text } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import AppButtoncomponent from "../AppButton.component";
import { RootStackNavigatorProps } from "./Navigation.component";

export default function Link({ title, link }: { title: string; link: string }) {
  const navigation = useNavigation();

  return (
    <AppButtoncomponent
      title={title}
      onPress={() => navigation.navigate(link)}
    />
  );
}
