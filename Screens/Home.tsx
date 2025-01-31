import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  ScrollView,
  Button,
  Image,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorProps } from "../components/navigation/Navigation.component";
import CardComponent from "../components/Card.component";
import CarouselComponent from "../components/Carousel.component";
import AppButtoncomponent from "../components/AppButton.component";
import ImagePickerComponent from "../components/ImagePicker.component";
import ImagePickerScreen from "./ImagePickerScreen";
type Props = NativeStackScreenProps<RootStackNavigatorProps>;
export default function Home({ navigation }: Props) {
  return (
    <ImageBackground
      source={require("../assets/Screenshot from 2019-11-24 23-54-27.png")}
      style={{ flex: 1, paddingTop: 50 }}
      //resizeMode="cover"
    >
      <View style={styles.container}>
        <Text style={{ color: "white", fontSize: 22, fontWeight: "700" }}>
          Home
        </Text>

        <Text style={styles.loremText}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Neque, non
          officia culpa, asperiores provident suscipit molestias corporis amet,
          incidunt maiores aut sit voluptas! Ducimus iusto possimus eaque
          similique dolorum cumque libero dignissimos, doloremque assumenda
          nulla consectetur, sapiente aut quisquam! Deleniti.
        </Text>
        <View style={{ marginVertical: 10 }}>
          <Feather name="check-circle" color="cyan" size={32} />
        </View>
      </View>
      <View style={styles.cta}>
        <AppButtoncomponent
          title="Sign Up"
          onPress={() => navigation.navigate("Listing")}
        />
        <AppButtoncomponent
          title="Login"
          onPress={() => navigation.navigate("Login")}
          style={styles.loginBtn}
        />
      </View>
      <View style={{ alignItems: "center", gap: 5 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Map")}
          style={{ width: "80%" }}
        >
          <Text
            style={{
              color: "white",
              textAlign: "center",
              backgroundColor: "skyblue",
              padding: 10,
              borderRadius: 10,
              fontWeight: "600",
            }}
          >
            Go to map
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Carousel")}
          style={{
            alignItems: "center",
            padding: 8,
            borderWidth: 1,
            borderColor: "skyblue",
            width: "80%",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>Images</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("Account")}
          style={{
            alignItems: "center",
            padding: 8,
            borderWidth: 1,
            borderColor: "skyblue",
            width: "80%",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>My account</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate("UserForm")}
          style={{
            alignItems: "center",
            padding: 8,
            borderWidth: 1,
            borderColor: "skyblue",
            width: "80%",
            borderRadius: 10,
          }}
        >
          <Text style={{ color: "white", fontWeight: "600" }}>User form</Text>
        </TouchableOpacity>

        <ImagePickerScreen />
      </View>

      <ScrollView style={{ padding: 10, marginVertical: 15 }}>
        {[...Array(20)].map((item, i) => (
          <CardComponent key={i}>
            <Image
              style={{ width: "100%", height: 150, overflow: "hidden" }}
              source={require("../assets/rural-landscape-with-green-agriculture-fields-vector-42867404.jpg")}
            />
            <Text
              style={{
                fontSize: 18,
                fontWeight: "500",
                paddingBottom: 10,
                textAlign: "center",
              }}
            >
              This is card component
            </Text>
            <Text>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis
              explicabo beatae quo distinctio maxime provident nesciunt esse
              nisi ducimus dolores?
            </Text>
            <View style={{ alignItems: "center", marginVertical: 10 }}>
              <Feather name="check-circle" color="green" size={32} />
            </View>
          </CardComponent>
        ))}
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  loremText: {
    padding: 20,
    color: "#fff",
    lineHeight: 18,
    borderRadius: 12,
    marginVertical: 18,
    backgroundColor: "rgba(0,0,0,.4)",
  },
  cardContainer: { gap: 5, padding: 20, width: "100%", marginTop: 50 },
  cta: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  loginBtn: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "goldenrod",
  },
});
