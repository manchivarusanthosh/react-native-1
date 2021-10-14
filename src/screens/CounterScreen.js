import React, { useReducer } from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";

const reducer = (state, action) => {
  switch (action.type) {
    case "Increment":
      return { ...state, counter: state.counter + action.payload };
    case "Decrement":
      return { ...state, counter: state.counter + action.payload };
    default:
      return state;
  }
};

const CounterScreen = () => {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  // let counterColor = counter >= 0 ? "#4ed973" : "red";
  return (
    <View style={styles.viewStyle}>
      <TouchableOpacity
        style={[styles.button, styles.incButton]}
        onPress={() => dispatch({ type: "Increment", payload: 1 })}
      >
        <Text>Increase</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.button, styles.decreaseButton]}
        onPress={() => dispatch({ type: "Decrement", payload: -1 })}
      >
        <Text>Decrease</Text>
      </TouchableOpacity>
      <Text>Current Count:{state.counter}</Text>
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
  button: {
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    marginBottom: 10,
    width: 300,
    borderRadius: 10,
    marginTop: 10,
    height: 50,
  },
  incButton: {
    backgroundColor: "#4ed973",
  },
  decreaseButton: {
    backgroundColor: "red",
  },
});
export default CounterScreen;
