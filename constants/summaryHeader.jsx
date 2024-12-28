import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useThemeColor } from "@/hooks/useThemeColor";
import { AntDesign } from "@expo/vector-icons";
import Feather from "@expo/vector-icons/Feather";

const SummaryHeader = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return (
    <View className="justify-between mb-4 flex-row items-center ">
      <View>
        <TouchableOpacity>
          <MaterialIcons
            name="keyboard-arrow-left"
            size={40}
            color={textColor}
          />
        </TouchableOpacity>
      </View>
      <View className="flex-row items-center mr-6 ">
        <TouchableOpacity>
          <Feather name="share" size={27} color={textColor} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SummaryHeader;

const styles = StyleSheet.create({});
