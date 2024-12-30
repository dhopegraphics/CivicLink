import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useThemeColor } from "@/hooks/useThemeColor";

const UserVoteSumViewCard = ({ name }) => {
  const textColor = useThemeColor({}, "text");

  return (
    <View className="justify-between items-center flex-row mt-4 ">
      <View className="pl-4 flex-row items-center">
        <Image
          style={{ width: 40, height: 40, borderRadius: 30 }}
          source={require("@/assets/images/CivicLinkLogo.png")}
        />
        <Text
          style={{ color: textColor }}
          className="font-JakartaBold text-lg ml-4"
        >
          {name}
        </Text>
      </View>

      <View className="flex-row  items-center justify-center mr-4">
        <View className="bg-orange-400 rounded-full w-12 h-12"></View>
        <View className=" absolute">
          <FontAwesome name="thumbs-up" size={18} color="white" />
        </View>
      </View>
    </View>
  );
};

export default UserVoteSumViewCard;

const styles = StyleSheet.create({});
