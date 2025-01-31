import React from "react";
import {
  Button,
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Text,
} from "react-native";
import * as ImagePicker from "expo-image-picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";
export default function ImagePickerComponent({
  image = "",
  setImage = (img: string) => {},
}) {
  const selectImage = async () => {
    try {
      const response = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.Images,
        quality: 0.5,
      });
      if (!response.canceled) {
        const {
          assets: [{ uri }],
        } = response;
        setImage(uri);
      }
    } catch (error) {}
  };

  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={selectImage}>
        <MaterialCommunityIcons name="camera" size={40} color="purple" />
      </TouchableWithoutFeedback>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    //flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    // height: 100,
    marginVertical: 20,
    borderWidth: 1,
    borderColor: "#bbb",
  },
  imageContainer: { marginTop: 20, width: "100%" },
  image: { height: 200, width: "100%" },
});
