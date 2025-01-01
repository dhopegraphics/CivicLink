import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useState, useEffect } from "react";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import ProgressBarReader from "@/components/BarWIthImage";
import { useThemeColor } from "@/hooks/useThemeColor";
import AnimatedNumbers from "react-native-animated-numbers";
import { candidates } from "@/data/CandidatesTable";
import { votesCasts } from "@/data/VotesTable";
import { parties } from "@/data/PartiesTable";
import { getCandidateStatsByElection } from "@/utils/CandidateStats";

const DashboardProgressCard = () => {
  // Function to fetch and update the stats
  const fetchStats = () => {
    const stats = getCandidateStatsByElection(
      "EL001",
      candidates,
      votesCasts,
      parties
    );
    setVotes(stats.totalVotes);
  };

  const [initialVote, setVotes] = useState(0);
  const [rejectedVote, setRejectedVotes] = useState(0);
  const increaseVote = () => {
    setVotes(initialVote + 1560);
  };
  const decreaseVote = () => {
    setVotes(initialVote - 1560);
  };

  const increaseRejectedVote = () => {
    setRejectedVotes(rejectedVote + 1);
  };
  const decreaseRejectedVote = () => {
    setRejectedVotes(rejectedVote - 3);
  };
  // useEffect to periodically fetch data
  useEffect(() => {
    fetchStats(); // Initial fetch
    const interval = setInterval(fetchStats, 5000); // Fetch every 5 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <View className=" bg-slate-300 w-[100%] h-52 mb-4 rounded-3xl ">
      <View className="flex-row justify-between pl-4 mt-4">
        <View className="flex-row items-center">
          <Text className="text-xl font-JakartaBold mr-2  text-center">
            In Progress
          </Text>
          <Text className="text-xl text-red-500 font-JakartaBold  text-center">
            (Presidential)
          </Text>
        </View>

        <View className="mr-4">
          <TouchableOpacity className="bg-slate-200 w-10 h-10 rounded-lg items-center justify-center ">
            <Feather name="share" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      <View className="pl-2 flex-row items-center">
        <MaterialIcons name="how-to-vote" size={45} color="black" />
        <AnimatedNumbers
          includeComma
          animateToNumber={initialVote}
          fontStyle={{ fontSize: 20, fontWeight: "bold" }}
        />
        <View className="ml-4">
          <View className=" flex-row">
            <Text className="font-JakartaSemiBold ">out of </Text>
            <Text className="font-JakartaBold "> 17M</Text>
          </View>

          <View className="flex-row items-center">
            <Text className=" font-JakartaMedium text-sm">Rejected :</Text>
            <AnimatedNumbers
              includeComma
              animateToNumber={rejectedVote}
              fontStyle={{ fontSize: 15, fontWeight: "bold" }}
            />
          </View>
        </View>
      </View>
      <ProgressBarReader />
    </View>
  );
};

export default DashboardProgressCard;

const styles = StyleSheet.create({});
