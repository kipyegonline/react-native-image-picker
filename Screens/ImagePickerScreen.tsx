import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
} from "react-native";
import React from "react";
import ImagePickerComponent from "../components/ImagePicker.component";

export default function ImagePickerScreen() {
  const [image, setImage] = React.useState("");
  const [images, setImages] = React.useState<string[]>([]);
  const scroll = React.useRef();

  const addImage = (img: string) => {
    setImage(img);
    setImages([...images, img]);
  };
  const removeImage = (img: string) => {};
  return (
    <View style={styles.container}>
      <View>
        <ImagePickerComponent setImage={addImage} />
      </View>
      <View style={styles.imageContainer}>
        {images.length > 0 && (
          <ImageCollection images={images} removeImage={removeImage} />
        )}
      </View>
      <ScrollView
        horizontal
        style={{ flex: 0 }}
        ref={scroll}
        onContentSizeChange={() => scroll?.current?.scrollToEnd()}
      >
        {images.length > 0 && (
          <ImageCollection images={images} removeImage={removeImage} />
        )}
      </ScrollView>
    </View>
  );
}

const ImageCollection = ({
  images,
  removeImage,
}: {
  images: Array<string>;
  removeImage: (img: string) => void;
}) => {
  return images.map((image: string) => (
    <TouchableWithoutFeedback key={image} onPress={() => removeImage(image)}>
      <Image style={styles.image} source={{ uri: image }} />
    </TouchableWithoutFeedback>
  ));
};
const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  imageContainer: { flexDirection: "row", flexWrap: "wrap" },
  image: { width: 200, height: 200 },
});
