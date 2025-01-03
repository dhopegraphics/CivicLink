import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useThemeColor } from "@/hooks/useThemeColor";
import {
  SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import SummaryHeader from "@/components/summaryHeader";
import UserVoteSumViewCard from "@/components/userVoteSumViewCard";

const VoteStatistics = () => {
  const SafeTop = useSafeAreaInsets();
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");

  return (
    <SafeAreaView
      style={{
        backgroundColor: backgroundColor,
        flex: 1,
      }}
    >
      <SummaryHeader />
      <StatusBar style="auto" />
      <Text
        style={{ color: textColor, fontSize: 30 }}
        className=" pl-4 font-JakartaBold"
      >
        Summary Votes
      </Text>
      <UserVoteSumViewCard name={"Mensah Isaac"} />
    </SafeAreaView>
  );
};

export default VoteStatistics;
