import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { candidates } from "@/data/CandidatesTable";
import { votesCasts } from "@/data/VotesTable";
import { parties } from "@/data/PartiesTable";
import { getCandidateStatsByElection } from "@/utils/CandidateStats";

// Utility function to get initials
const getInitials = (name) => {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .toUpperCase();
};

const ProgressBarWithImages = ({ progressData }) => {
  const screenWidth = Dimensions.get("window").width; // Full screen width
  const progressBarWidth = screenWidth - 70; // Adjust width to leave some margin

  // Calculate cumulative widths
  let cumulativePercentage = 0;

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View
        style={[styles.progressBar, { width: progressBarWidth, height: 10 }]}
      >
        {progressData.map((item, index) => {
          const segmentWidth =
            (parseFloat(item.percentage) / 100) * progressBarWidth -
            cumulativePercentage;

          cumulativePercentage += segmentWidth;

          return (
            <View
              key={index}
              style={[
                styles.segment,
                {
                  width: segmentWidth,
                  backgroundColor: item.party.color,
                },
              ]}
            />
          );
        })}
      </View>

      {/* Markers, Labels, and Images */}
      {progressData.map((item, index) => {
        const markerPosition =
          (parseFloat(item.percentage) / 100) * progressBarWidth;

        return (
          <React.Fragment key={index}>
            <View
              style={{
                position: "absolute",
                left: markerPosition + 16, // Center the text
                top: 2,
              }}
            >
              <Text style={{ fontSize: 8, fontWeight: "bold" }}>
                {getInitials(item.party.name)}
              </Text>
            </View>
            {/* Triangle Marker */}
            <View
              style={{
                position: "absolute",
                left: markerPosition + 8, // Center the triangle horizontally
                top: 27,
              }}
            >
              <Entypo name="triangle-up" size={24} color="white" />
            </View>

            {/* Percentage Label */}
            <View
              style={{
                position: "absolute",
                left: markerPosition + 13, // Center the text
                top: 62,
              }}
            >
              <Text style={{ fontSize: 8, fontWeight: "bold" }}>
                {parseFloat(item.percentage)}%
              </Text>
            </View>

            {/* Candidate Image */}
            <View
              style={[
                styles.imageContainer,
                {
                  position: "absolute",
                  left: markerPosition + 10, // Center the image
                },
              ]}
            >
              <Image
                source={{ uri: item.party.logoUri }}
                style={styles.iconImage}
              />
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default function ProgressBarReader() {
  const stats = getCandidateStatsByElection(
    "EL001",
    candidates,
    votesCasts,
    parties
  );

  return <ProgressBarWithImages progressData={stats.candidateVoteCounts} />;
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  progressBar: {
    height: 20,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    position: "relative",
    flexDirection: "row", // Ensures segments align side by side
    overflow: "hidden",
  },
  segment: {
    height: "100%",
  },
  imageContainer: {
    position: "absolute",
    top: 40,
    alignItems: "center",
    backgroundColor: "white",
    borderRadius: 20,
  },
  iconImage: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
