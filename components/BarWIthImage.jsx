import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

const ProgressBarWithImages = ({ progressData }) => {
  const screenWidth = Dimensions.get("window").width; // Full screen width
  const progressBarWidth = screenWidth - 60; // Adjust width to leave some margin

  return (
    <View style={styles.container}>
      {/* Progress Bar */}
      <View
        style={[styles.progressBar, { width: progressBarWidth, height: 10 }]}
      >
        {progressData.map((item, index) => {
          const segmentWidth =
            index === 0
              ? `${item.percentage}%`
              : `${item.percentage - progressData[index - 1].percentage}%`;

          return (
            <View
              key={index}
              style={[
                styles.segment,
                {
                  width: segmentWidth,
                  backgroundColor: item.color,
                },
              ]}
            />
          );
        })}
      </View>
      {progressData.map((item, index) => {
        // Calculate the exact pixel position for each marker
        const markerPosition = (item.percentage / 100) * progressBarWidth;

        return (
          <React.Fragment key={index}>
            {/* Triangle marker */}
            <View
              style={{
                position: "absolute",
                left: markerPosition,
                transform: [
                  { translateX: 2 }, // Place at the end of the segment
                ],
                top: 27,
                alignItems: "center",
              }}
            >
              <Entypo name="triangle-up" size={24} color="white" />
            </View>

            <View
              style={{
                position: "absolute",
                left: markerPosition,
                transform: [
                  { translateX: 4 }, // Place at the end of the segment
                ],
                top: 62,
                alignItems: "center",
              }}
            >
              <Text className="font-JakartaBold text-xs">
                {item.percentage}%
              </Text>
            </View>

            {/* Image */}
            <View
              style={[
                styles.imageContainer,
                {
                  position: "absolute",
                  left: markerPosition,
                  transform: [
                    { translateX: 4 }, // Center the image horizontally
                  ],
                },
              ]}
            >
              <Image source={item.image} style={styles.iconImage} />
            </View>
          </React.Fragment>
        );
      })}
    </View>
  );
};

export default function ProgressBarReader() {
  const progressData = [
    {
      percentage: 10,
      image: require("@/assets/images/CivicLink-Splash-icon.png"),
      color: "#FF5733",
    },
    {
      percentage: 30,
      image: require("@/assets/images/CivicLinkAppLogoLight.png"),
      color: "#33FF57",
    },
    {
      percentage: 60,
      image: require("@/assets/images/GhanaCountryballCasting.png"),
      color: "#3357FF",
    },
    {
      percentage: 90,
      image: require("@/assets/images/MandateToFreedom.png"),
      color: "#FFC300",
    },
  ];

  return <ProgressBarWithImages progressData={progressData} />;
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
