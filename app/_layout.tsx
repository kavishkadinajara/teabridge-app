import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
const RootLayout = () => {
  return (
    <>
      <StatusBar style="light" />
      <Slot />
    </>
  );
};
export default RootLayout;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});