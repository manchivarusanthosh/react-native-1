import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text> {color} </Text>
      <TouchableOpacity style={styles.button} onPress={() => onIncrease()}>
        <Text>{`Increase ${color}`}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => onDecrease()}>
        <Text>{`Decrease ${color}`}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
  },
});

export default ColorCounter;
