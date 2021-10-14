import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const HomeScreen = (props) => {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.text}>Hi, Welcome</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Components")}
      >
        <Text>Go to Components Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("List")}
      >
        <Text>Go to List Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Image")}
      >
        <Text>Go to Image Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Counter")}
      >
        <Text>Go to Counter Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Color")}
      >
        <Text>Go to ColorScreen Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Square")}
      >
        <Text>Go to SquareScreen Demo</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => props.navigation.navigate("Text")}
      >
        <Text>Go to TextScreen Demo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 30,
  },
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

export default HomeScreen;
