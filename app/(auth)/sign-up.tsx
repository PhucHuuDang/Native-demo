import { View, Text, Image, ScrollView, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";

import { images } from "../../constants";
import FormField from "@/components/form-field";
import CustomButton from "@/components/custom-button";
import { Link, router } from "expo-router";
import { createUser } from "@/lib/appwrite";

const SignUp = () => {
  const [form, setForm] = useState<Record<string, any>>({
    username: "",
    email: "",
    password: "",
  });

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const submit = async () => {
    if (!form.username || !form.email || !form.password) {
      Alert.alert("Error", "Please fill all fields");
    }

    setIsSubmitting(true);

    try {
      const result = await createUser(form.email, form.password, form.username);

      // set it to global state

      router.replace("/home");
    } catch (error: any) {
      Alert.alert("Error", error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

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
            Sign up with us
          </Text>
          <FormField
            title="Username"
            value={form.username}
            handleChangeText={(value) => setForm({ ...form, username: value })}
            otherStyles="mt-10"
          />

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
            title="Sign in"
            handlePress={submit}
            containerStyle="mt-7"
            isLoading={isSubmitting}
          />

          <View className="justify-center pt-5 flex-row gap-2  items-center">
            <Text className="tex-lg  text-gray-100 font-pregular">
              Have an account already?
            </Text>
            <Link
              href="/sign-in"
              className="text-lg font-psemibold text-secondary"
            >
              Sign up{" "}
            </Link>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUp;
