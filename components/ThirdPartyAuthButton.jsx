import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { useThemeColor } from "../hooks/useThemeColor";

const ThirdPartyAuthBtn = ({ TextButton, onPress, iconName }) => {
  const textColor = useThemeColor({}, "onboardText");
  const iconColor = useThemeColor({}, "text");

  return (
    <TouchableOpacity
      className="border rounded-3xl border-gray-300 py-3 mb-4 w-full "
      onPress={onPress}
    >
      <View className="flex-row items-center self-center  justify-center">
        <FontAwesome
          name={iconName}
          size={24}
          color={iconColor}
          className="mr-3"
        />
        <Text
          className="text-lg font-JakartaSemiBold text-gray-800"
          style={{
            color: textColor,
          }}
        >
          {TextButton}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ThirdPartyAuthBtn;
