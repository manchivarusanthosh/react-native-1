import React, { useState } from "react";
import { Text, View, StyleSheet, TextInput } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  return (
    <View>
      <Text>Enter Your Name:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={(newValue) => setName(newValue)}
      />
      <Text>Your Name is: {name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 15,
    borderColor: "black",
    borderWidth: 1,
    borderRadius: 10,
  },
});

export default TextScreen;
