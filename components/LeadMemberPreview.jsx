import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";

const LeadMemberPreview = ({
  CandidateName,
  TopVotePercentage,
  outOfVote,
  voteAcquired,
  CandidateImage,
  PreviewWidth,
}) => {
  return (
    <View className="flex-row justify-between " style={{ width: PreviewWidth }}>
      {/* PROFILE */}
      <View>
        <Image
          source={{ uri: CandidateImage }}
          style={{
            width: 50,
            height: 50,
            borderRadius: 30,
            backgroundColor: "white",
            marginBottom: 10,
          }}
        />
        <View className="flex-row">
          <View>
            <Text className="text-lg w-48  font-bold text-white">
              {CandidateName}
            </Text>
            <Text className="text-base items-center justify-center font-JakartaSemiBold text-white">
              <MaterialCommunityIcons
                name="vote-outline"
                size={24}
                color="white"
              />
              {"  "}
              {voteAcquired}
            </Text>
          </View>
        </View>
      </View>

      <View style={{ alignItems: "flex-end", marginRight: 50 }}>
        <AntDesign
          name="earth"
          size={45}
          color="white"
          style={{ marginBottom: 10 }}
        />
        <Text className="text-lg font-bold text-white">
          Top {TopVotePercentage}
        </Text>
        <Text
          style={{ textAlign: "right" }}
          className="text-base font-JakartaSemiBold text-white"
        >
          Out of {outOfVote} votes
        </Text>
      </View>
    </View>
  );
};

export default LeadMemberPreview;

const styles = StyleSheet.create({});
