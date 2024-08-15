import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import ListItem, { Item } from "../components/ListItem";
import Layout from "../components/Layout";
import ListItemSeparator from "../components/ListItemSeparator";
import RenderRightActions from "../components/RenderRightActiions";

export default function MessagesScreen() {
  const [refreshing, setRefreshing] = React.useState(false);
  const handlePress = (item: Item) => {
    return () => {};
  };
  return (
    <Layout>
      <FlatList
        data={[]}
        keyExtractor={({ item }: { item: Item }) => item?.title}
        renderItem={({ item, index }: { item: Item; index: number }) => (
          <ListItem
            {...item}
            onPress={handlePress(item)}
            renderRightActions={RenderRightActions}
          />
        )}
        ItemSeparatorComponent={ListItemSeparator}
        refreshing={refreshing}
        onRefresh={() => {}}
      />
    </Layout>
  );
}
