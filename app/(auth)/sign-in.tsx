import { View, Text, Image, ScrollView } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "@/components/form-field";
import CustomButton from "@/components/custom-button";
import { Link } from "expo-router";

const SignIn = () => {
  const [form, setForm] = useState<Record<string, any>>({
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const submit = () => {};

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
            handleChangeText={(value) => setForm({ ...form, email: value })}
            otherStyles="mt-7"
            keyboardType="email-address"
          />

          <FormField
            title="Password"
            value={form.password}
            handleChangeText={(value) => setForm({ ...form, password: value })}
            otherStyles="mt-7"
            keyboardType="password-address"
          />

          <CustomButton
            title="Sign up"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2  items-center">
            <Text className="tex-lg  text-gray-100 font-pregular">
              Don't have an account?
            </Text>
            <Link
              href="/sign-up"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
