import {
  Alert,
  StyleSheet,
  ScrollView,
  SafeAreaView,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TextProps,
  KeyboardTypeOptions,
} from "react-native";
import React from "react";

export default function UserForm() {
  return (
    <SafeAreaView style={styles.main}>
      <Text style={styles.toolbar}>The App</Text>
      <ScrollView style={styles.content}>
        <UserFormComponent />
      </ScrollView>
    </SafeAreaView>
  );
}

type State = { email: string; name: string; phone: string };
type TextFieldProps = {
  label?: string;
  name: keyof State;
  keyboard?: KeyboardTypeOptions;
  placeholder: string;
};

const UserFormComponent = () => {
  const [state, setState] = React.useState({} as State);

  const handleButtonPress = () => {
    const { name, phone, email } = state;
    if (Object.keys(state).length > 0) {
      Alert.alert(
        `User's data`,
        `Name: ${name}, Phone: ${phone}, 
    Email: ${email}`
      );
    }
  };

  const renderButton = () => {
    return (
      <TouchableOpacity onPress={handleButtonPress} style={styles.button}>
        <Text style={styles.buttonText}>Save</Text>
      </TouchableOpacity>
    );
  };

  const renderTextfield = (options: TextFieldProps) => {
    return (
      <TextInput
        style={styles.textfield}
        onChangeText={(value) => setState({ ...state, [options.name]: value })}
        placeholder={options.placeholder}
        value={state?.[options.name]}
        keyboardType={options.keyboard || "default"}
      />
    );
  };
  return (
    <View style={styles.panel}>
      <Text style={styles.instructions}>
        Please enter your contact information
      </Text>
      {renderTextfield({ name: "name", placeholder: "Your  name" })}
      {renderTextfield({
        name: "phone",
        placeholder: "Your  phone number",
        keyboard: "phone-pad",
      })}
      {renderTextfield({
        name: "email",
        placeholder: "Your    email address",
        keyboard: "email-address",
      })}
      {renderButton()}
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
  toolbar: {
    backgroundColor: "#1abc9c",
    padding: 20,
    color: "#fff",
    fontSize: 20,
    textAlign: "center",
  },
  content: {
    padding: 10,
  },
  panel: {
    backgroundColor: "#fff",
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
    elevation: 5,
    paddingBottom: 30,
  },
  instructions: {
    color: "#bbb",
    fontSize: 16,
    marginTop: 15,
    marginBottom: 10,
  },
  textfield: {
    height: 40, // i guess height is better than padding
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingLeft: 10,
    //fontSize: 16,
  },
  button: {
    backgroundColor: "#34495e",
    borderRadius: 3,
    padding: 12,
    flex: 1,
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
    fontSize: 16,
  },
});
