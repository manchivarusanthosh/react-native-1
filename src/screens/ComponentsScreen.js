import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ComponentsScreen = () => {
  return (
    <View style={styles.textStyle}>
      <Text>This is the Components Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "100%",
  },
});

export default ComponentsScreen;
