import { View, Text } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import ListItem from "../components/ListItem";

export default function AccountScreen() {
  return (
    <Layout>
      <View>
        <ListItem
          title="Vince"
          sub="Web developer"
          image={require("../assets/vlcsnap-2019-11-25-23h17m55s186.png")}
          onPress={() => {}}
          renderRightActions={() => null}
        />
      </View>
    </Layout>
  );
}
