import { Text, View, TouchableOpacity } from "react-native";

interface CustomButtonProps {
  title: string;
  handlePress: () => void;
  containerStyle?: string;
  textStyle?: string;
  isLoading?: boolean;
}

const CustomButton = ({
  handlePress,
  title,
  containerStyle,
  textStyle,
  isLoading,
}: CustomButtonProps) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyle} ${
        isLoading ? "bg-opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyle}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
