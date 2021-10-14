import React, { useState } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      >
        <Text>Add a Color</Text>
      </TouchableOpacity>

      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        numColumns={3}
        horizontal={false}
        style={{ backgroundColor: "aliceblue", width: "80%" }}
        renderItem={({ item }) => {
          return (
            <Text
              style={{
                height: 50,
                width: 150,
                backgroundColor: item,
                marginBottom: 10,
                marginRight: 10,
                flex: 1,
                padding: 40,
              }}
            ></Text>
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red},${green},${blue})`;
};

const styles = StyleSheet.create({
  viewStyle: {
    paddingTop: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#DDDDDD",
    width: 300,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
  },
});

export default ColorScreen;
