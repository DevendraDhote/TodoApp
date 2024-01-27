import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

const Fallback = () => {
  return (
    <View style={{
        alignItems:"center"
    }}>
      <Image
        source={require("../../assets/questionnaire.png")}
        style={{ height: 300, width: 300, opacity:0.6 }}
      />
      <Text>Start adding your task</Text>           
    </View>
  );
};

export default Fallback;

const styles = StyleSheet.create({});
