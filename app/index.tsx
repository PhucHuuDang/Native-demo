// import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { StatusBar } from "expo-status-bar";

const App = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white">
      <Text className="text-4xl font-bold">Harry Dang</Text>
      <Link href="/profile" style={{ color: "blue" }} className="text-4xl">
        Profile
      </Link>
    </View>
  );
};

export default App;
