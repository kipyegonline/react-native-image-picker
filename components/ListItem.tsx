import { View, Text, StyleSheet, Image, ImageProps } from "react-native";
import React from "react";
import { Swipeable } from "react-native-gesture-handler";
import AppText from "./AppText";
import { TouchableHighlight } from "react-native-gesture-handler";
export type Item = {
  image: ImageProps;
  title: string;
  sub: string;
};
type ListItemProps = {
  onPress: () => void;
  renderRightActions: () => JSX.Element | null;
  ImageComponent?: React.ReactNode;
};
export default function ListItem({
  image,
  title = "",
  sub = "",
  ImageComponent,
  onPress,
  renderRightActions,
}: ListItemProps & Item) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight onPress={onPress} underlayColor={"#ccc"}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image source={image} style={styles.image} />}
          <View style={styles.details}>
            <AppText styles={styles.title}>{title}</AppText>
            <AppText styles={styles.sub}>{sub}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}
const styles = StyleSheet.create({
  container: { flexDirection: "row" },
  image: { width: 70, height: 70, borderRadius: 35 },
  details: { marginLeft: 10 },
  title: { fontSize: 18, fontWeight: "500" },
  sub: { fontSize: 14, fontWeight: "400" },
});
