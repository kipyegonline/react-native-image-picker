import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import AppText from "./AppText";
import ListItem from "./ListItem";

export default function ListingDetail() {
  return (
    <View>
      <Image
        source={require("../assets/rural-landscape-with-green-agriculture-fields-vector-42867404.png")}
      />
      <AppText styles={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum nemo,
        ab, delectus quisquam recusandae pariatur consequuntur quam vitae sint
        laboriosam vero neque consectetur minus laudantium!
      </AppText>
      <View style={styles.userContainer}>
        <ListItem
          image={require("../assets/IMG_848rrr6/jpg")}
          title="Vince"
          sub="Dev"
        />
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: { width: "100%" },
  text: { fontSize: 24, fontWeight: "500", paddingTop: 5 },
  userContainer: { marginVertical: 40 },
});
