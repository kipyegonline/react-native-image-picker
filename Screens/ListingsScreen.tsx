import { View, Text, FlatList } from "react-native";
import React from "react";
import Layout from "../components/Layout";
import CardComponent from "../components/Card.component";

export default function ListingsScreen() {
  return (
    <Layout>
      <FlatList
        data={[]}
        renderItem={({ item }) => (
          <CardComponent>
            <Text>Item</Text>
          </CardComponent>
        )}
      />
    </Layout>
  );
}
