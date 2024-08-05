import React from "react";
import {
  View,
  Text,
  Permission,
  PermissionsAndroid,
  StyleSheet,
} from "react-native";

export default function MapApp() {
  const [location, setLocation] = React.useState(null);
  const getLocation = async () => {};

  React.useEffect(() => {
    getLocation();
  }, []);
  return (
    <View style={styles.mapContainer}>
      <Text>MapApp</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  mapContainer: { flex: 1 },
});
