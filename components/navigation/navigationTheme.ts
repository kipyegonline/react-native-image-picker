import { DefaultTheme } from "@react-navigation/native";

export const myTheme = {
  ...DefaultTheme,
  colors: { ...DefaultTheme.colors, primary: "#ccc", background: "#fff" },
};
