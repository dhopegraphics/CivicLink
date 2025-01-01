import React from "react";
import { View, Text } from "react-native";

const ParliamentaryVotesPreview = ({ ElectionData }) => (
  <View className="bg-blue-200 w-full h-52 mb-4 rounded-3xl justify-center items-center">
    <Text className="text-lg font-JakartaBold">Alternative Component</Text>
    <Text className="font-JakartaMedium">For General Election ID: EL002</Text>
  </View>
);

export default ParliamentaryVotesPreview;
