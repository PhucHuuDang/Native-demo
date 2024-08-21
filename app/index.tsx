// import { StatusBar, StyleSheet, Text, View } from "react-native";
import React from "react";
import {Link} from "expo-router";
import {SafeAreaView} from "react-native-safe-area-context";
import {StatusBar} from "expo-status-bar";
import {ScrollView, View, Text, Image} from "react-native";
import {images} from "../constants";
import CustomButton from "@/components/custom-button";


const App = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView contentContainerStyle={{height: "100%"}}>
        <View className="w-full justify-center items-center h-full px-4">
          <Image source={images.logo} className="w-[130px] h-[84px]" resizeMode="contain"/>
          
          <Image className="max-w-[380px] w-full h-[300px]" src={images.cards} resizeMode="contain"/>
          
          <View className="relative mt-5">
            <Text className="text-3xl text-white font-bold text-center">
              Discover Endless Possibilities with {' '}
              <Text className="text-secondary-200">
                Harry
              </Text>
            </Text>
            <Image source={images.path} className="absolute -bottom-2 -right-8 w-[136px] h-[15px]"
                   resizeMode="contain"/>
          </View>
          
          <Text className="text-sm font-pregular text-gray-100 mt-7 text-center">Where creativity meets innovation:
            embark on a journey of limitless exploration
            with Harry</Text>
          
          <CustomButton/>
        </View>
      </ScrollView>
    
    
    </SafeAreaView>
  );
};

export default App;
