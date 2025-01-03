import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const LeadMemberPreview = ({
  CandidateName,
  TopVotePercentage,
  outOfVote,
  voteAcquired,
  CandidateImage,
  PreviewWidth,
}) => {
  return (
    <View className=" mr-10" style={{ width: PreviewWidth }}>
      {/* PROFILE */}
      <View className="flex-row justify-between px-4  ">
        <Image
          source={{ uri: CandidateImage }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: "white",
          }}
        />
        <AntDesign name="earth" size={45} color="white" />
      </View>

      <View className="flex-row">
        <View className="px-4 ">
          <Text className="text-lg font-bold text-white">{CandidateName}</Text>
          <Text className="text-base font-JakartaSemiBold text-white">
            {voteAcquired} Votes
          </Text>
        </View>

        <View className="px-4  ">
          <Text className="text-lg ml-12 font-bold text-white">
            Top {TopVotePercentage}
          </Text>
          <Text className="text-base font-JakartaSemiBold text-white">
            Out of {outOfVote} votes
          </Text>
        </View>
      </View>
    </View>
  );
};

export default LeadMemberPreview;

const styles = StyleSheet.create({});
