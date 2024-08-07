import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorProps } from "../components/Navigation.component";
type Props = NativeStackScreenProps<RootStackNavigatorProps>;
export default function Home({ navigation }: Props) {
  return (
    <ImageBackground
      source={require("../assets/vlcsnap-2020-06-03-19h54m10s439.png")}
      style={{ flex: 1 }}
      //resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={{ color: "white" }}>Home</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={{ width: "50%" }}
        >
          <Text
            style={{
              color: "white",
              marginTop: 25,
              backgroundColor: "skyblue",
              padding: 15,
              borderRadius: 10,
              fontWeight: "600",
            }}
          >
            Go to map
          </Text>
        </TouchableOpacity>
        <Text style={styles.loremText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, non
          officia culpa, asperiores provident suscipit molestias corporis amet,
          incidunt maiores aut sit voluptas! Ducimus iusto possimus eaque
          similique dolorum cumque libero dignissimos, doloremque assumenda
          nulla consectetur, sapiente aut quisquam! Deleniti.
        </Text>
        <Feather name="check-circle" color="green" size={32} />
      </View>
    </ImageBackground>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "cyan",
    textAlign: "center",
  },
  loremText: {
    padding: 10,
    color: "#fff",
    lineHeight: 18,
    fontStyle: "italic",
    marginVertical: 18,
  },
});
