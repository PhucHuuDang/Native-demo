// import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold font-pblack">Harry Dang</Text>
      <StatusBar style="auto" />
      <Link href="/home" style={{ color: "blue" }} className="text-4xl">
        Home
      </Link>
    </View>
  );
};

export default App;
