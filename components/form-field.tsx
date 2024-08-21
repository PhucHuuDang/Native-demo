import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";

import { icons } from "../constants";

interface FormFieldProps {
  title: string;
  value: string;
  handleCHangeText: (value: string) => void;
  otherStyles?: string;
  placeholder?: string;
  keyboardType?: "email-address" | "password-address";
}

const FormField = ({
  title,
  value,
  handleCHangeText,
  otherStyles,
  placeholder,
  keyboardType,
  ...props
}: FormFieldProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>

      <View className="w-full h-16 px-4 bg-black-100 border-2 border-red-500 rounded-2xl focus:border-secondary">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#7b7b8b"
          onChangeText={handleCHangeText}
          secureTextEntry={title === "Password" && !showPassword} //* if it is password, will gonna hide the text
        />

        {title === "Password" && (
          <TouchableOpacity onPress={() => setShowPassword}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
