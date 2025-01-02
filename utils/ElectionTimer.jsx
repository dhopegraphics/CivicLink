import DashboardProgressCard from "@/components/DashboardProgressCard";
import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";

import AntDesign from "@expo/vector-icons/AntDesign";
import { calculateTimeLeft } from "./timeLeftCalc";
import ParliamentaryVotesPreview from "../components/ParliamentaryElectionsPreview";

const Timer = ({ targetDate, onTimerEnd, backgroundColor, electionData }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      const updatedTimeLeft = calculateTimeLeft(targetDate);
      setTimeLeft(updatedTimeLeft);

      if (!updatedTimeLeft) {
        clearInterval(timer);
        if (onTimerEnd) onTimerEnd(); // Notify parent component
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, onTimerEnd]);

  if (!timeLeft) return null;

  return (
    <View
      style={{
        backgroundColor: backgroundColor,
        width: 165,
        height: 165,
        paddingHorizontal: 15,
        borderRadius: 30,
      }}
    >
      <View
        className=" flex-row  mt-8 mb-6 "
        style={{ justifyContent: "space-between" }}
      >
        <Text className=" font-JakartaBold" style={{ color: "black" }}>
          TIME
        </Text>
      </View>

      <View className="flex-row justify-center items-center">
        <AntDesign name="clockcircleo" size={30} color="black" />
        <Text
          className="font-JakartaBold ml-2 text-black"
          style={{ fontSize: 27 }}
        >
          {timeLeft.hours}:
        </Text>
        <Text className="font-JakartaBold  text-black" style={{ fontSize: 27 }}>
          {timeLeft.minutes}
        </Text>
        <Text
          className="font-JakartaBold mt-4 ml-1 text-black"
          style={{ fontSize: 10 }}
        >
          {timeLeft.seconds}s
        </Text>
      </View>

      <Text className="font-JakartaMedium text-left  text-black">
        Starts in {timeLeft.days} days
      </Text>
      <Text className="font-JakartaBold  text-black" style={{ fontSize: 10.5 }}>
        {electionData.election_name}
      </Text>
    </View>
  );
};

export const ElectionItem = ({ election, textColor, index }) => {
  const colors = ["#94dafb", "#ff9a62", "#fede67", "#c9a0ff", "#94dafb"];
  const backgroundColor = colors[index % colors.length]; // Cycle through colors

  const currentDate = new Date();
  const startDate = new Date(election.start_date);
  const endDate = new Date(election.end_date);
  const [isTimerActive, setIsTimerActive] = useState(currentDate < startDate);

  if (currentDate > endDate) return null;

  return (
    <View key={election.election_id} className="mb-4">
      {/* <Text
        style={{ color: textColor, fontSize: 12 }}
        className="font-JakartaMedium text-xs mb-4"
      >
        {election.election_name}
      </Text> */}
      {isTimerActive ? (
        <Timer
          targetDate={startDate}
          onTimerEnd={() => setIsTimerActive(false)}
          backgroundColor={backgroundColor} // Pass the color here
          electionData={election}
        />
      ) : (
        <>
          {election.election_id === "EL001" ? (
            <DashboardProgressCard />
          ) : election.election_id === "EL002" ? (
            <ParliamentaryVotesPreview ElectionData={election} />
          ) : (
            <Text className="font-JakartaMedium">
              Default Election Component
            </Text>
          )}
        </>
      )}
    </View>
  );
};
