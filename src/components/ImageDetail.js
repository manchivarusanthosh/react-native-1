import React, { Component } from "react";
import { Text, View, Stylesheet, Image } from "react-native";

const ImageDetail = (props) => {
  return (
    <View>
      <Image source={props.imageSource} />
      <Text> {props.title} </Text>
    </View>
  );
};

// const styles = Stylesheet.create({});

export default ImageDetail;
