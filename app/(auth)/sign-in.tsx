import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "@/components/form-field";

const SignIn = () => {
  const [form, setForm] = useState<Record<string, any>>({
    email: "",
    password: "",
  });

  return (
    <SafeAreaView className="bg-primary h-full">
      <ScrollView>
        <View className="w-full justify-center h-full px-4 my-6">
          <Image
            source={images.logo}
            className="w-[115px] h-[35px]"
            resizeMode="contain"
          />

          <Text className="text-2xl text-white text-semibold mt-10 font-psemibold">
            Log in to Harry
          </Text>
          <FormField
            title="Email"
            value={form.email}
            handleCHangeText={(value) => setForm({ ...form, email: value })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleCHangeText={(value) => setForm({ ...form, email: value })}
            otherStyles="mt-7"
            keyboardType="password-address"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
