import React, { ComponentProps } from "react";
import {
  View,
  Text,
  Permission,
  PermissionsAndroid,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import MapView from "react-native-maps";
import * as Location from "expo-location";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackNavigatorProps } from "../components/navigation/Navigation.component";
type Coords = Record<string, number>;
type Props = NativeStackScreenProps<RootStackNavigatorProps, "Map">;
export default function MapApp({ navigation }: Props) {
  const [location, setLocation] =
    React.useState<null | Location.LocationObject>(null);
  const getLocation = async () => {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      console.error("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    if (location) setLocation(location);
  };

  React.useEffect(() => {
    getLocation();
  }, []);
  console.log(location, "coords");
  return (
    <View style={styles.mapContainer}>
      <TouchableOpacity onPress={() => navigation.navigate("Home")}>
        <Text style={{ color: "white" }}>Home| Welcome </Text>
      </TouchableOpacity>
      {location ? (
        <AppMapView
          latitude={location?.coords.latitude}
          longitude={location?.coords.longitude}
          {...location}
        />
      ) : null}
    </View>
  );
}
const AppMapView = ({
  latitude,
  longitude,
  ...props
}: {
  latitude: number;
  longitude: number;
}) => {
  return (
    <MapView
      /* initialRegion={{
        latitude: 37.78825,
        longitude: -122.4324,
       // latitudeDelta: 0.0922,
       // longitudeDelta: 0.0421,
      }}*/
      showsUserLocation
      style={styles.mapView}
    />
  );
};
const styles = StyleSheet.create({
  mapContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "cyan",
    paddingVertical: 20,
  },
  mapView: {
    alignSelf: "stretch",
    height: 450,
    margin: 30,
  },
});
/**';

<MapView
  style={{ flex: 1 }}
  initialRegion={{
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  }}
/> */
/**import Sound from 'react-native-sound';

Sound.setCategory('Playback'); // or another category as needed
const sound = new Sound('mySound.mp3', Sound.MAIN_BUNDLE, (error) => {
  if (error) {
    console.error('error loading sound:', error);
  } else {
    sound.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }
});
 */
