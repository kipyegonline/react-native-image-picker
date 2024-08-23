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
        <MaterialCommunityIcons name="camera" size={24} />
      </TouchableWithoutFeedback>

      <Button title="Upload image" onPress={selectImage} color="purple" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "purple",
    marginVertical: 20,
  },
  imageContainer: { marginTop: 20, width: "100%" },
  image: { height: 200, width: "100%" },
});
