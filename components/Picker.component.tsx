import {
  View,
  Text,
  Modal,
  TouchableWithoutFeedback,
  StyleSheet,
  Alert,
  ToastAndroid,
} from "react-native";
import React, { PropsWithChildren } from "react";
import { Picker } from "@react-native-picker/picker";
import { MaterialCommunityIcons } from "@expo/vector-icons";

type Item = { id: number; name: string; text: string };
interface Props {
  items: Item[];
} //extends PropsWithChildren

export function PickerComponent<T extends Props>(props: T) {
  return (
    <View>
      <Picker {...props}>
        {props.items.map((item) => (
          <Picker.Item key={item.id} value={item.name} label={item.text} />
        ))}
      </Picker>
    </View>
  );
}

export const AppModal = ({ children }: { children: React.ReactNode }) => {
  const [isVisible, setVisible] = React.useState(false);
  return (
    <Modal visible={isVisible} animationType="slide">
      {children}
    </Modal>
  );
};
export const CustomPicker = ({ onPress = () => {} }) => {
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <MaterialCommunityIcons name="chevron-down" size={40} />

        <Text style={styles.text}>Select</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

type AlertProps = {
  title: string;
  message: string;
  buttons: { text: string; onPress: () => void }[];
  visible: boolean;
};

type MProps = Omit<AlertProps, "buttons">;

/*I like this custom alert component*/
export function ConfirmationAlert({
  title = "",
  message = "",
  buttons = [],
  visible,
}: AlertProps) {
  React.useEffect(() => {
    if (visible) {
      Alert.alert(title, message, buttons);
    }
  }, [visible]);
  return null;
}
type NotificationProps = {
  message: string;
  duration?: number;
};
export function NotificationAlert({
  message,
  duration = ToastAndroid.LONG,
}: NotificationProps) {
  React.useEffect(() => {
    if (message) {
      ToastAndroid.show(message, duration);
    }
  }, [message]);
  return null;
}
const styles = StyleSheet.create({
  container: { width: "100%", flexDirection: "row" },
  text: { fontWeight: "500" },
});

type Genericprops<ZItem> = {
  items: ZItem[];
  id: keyof ZItem;
  name: keyof ZItem;
};

function Renderitems<ZItem>(props: Genericprops<ZItem>) {
  return (
    <ul>
      {props.items.map((item) => {
        const idValue = item[props.id] as unknown;
        const nameValue = item[props.name];
        if (typeof idValue !== "number") return;
        if (typeof nameValue !== "boolean") {
          return;
        }

        return <li key={idValue}>{nameValue}</li>;
      })}
    </ul>
  );
}
let name!: string;
