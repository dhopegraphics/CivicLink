import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/hooks/theme";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

import { elections } from "@/data/ElectionsTable";
import { ElectionItem } from "@/utils/ElectionTimer";

const HomeDashboard = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const onBlueCardText = useThemeColor({}, "onBlueCardText");
  const BlueCard = useThemeColor({}, "cardBlueBackground");
  // Group elections by type
  const generalElections = elections.filter(
    (election) => election.election_type === "general"
  );
  const inclusiveElections = elections.filter(
    (election) => election.election_type === "inclusive"
  );

  const TopInset = useSafeAreaInsets();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.scrollContent,
        {
          top: TopInset.top,
          bottom: TopInset.bottom,
          paddingBottom: 50,
          marginBottom: 100,
        },
      ]}
      style={{
        flex: 1,
        backgroundColor: backgroundColor,
      }}
    >
      <Text className="mb-6 font-JakartaSemiBold" style={{ color: textColor }}>
        Welcome to CivicLink
      </Text>
      <Card title="Upcoming Elections">
        <Text>Next election: November 5, 2024</Text>
        <Button title="View Details" onPress={() => {}} />
      </Card>
      <View
        className="mt-6  "
        style={{
          flexWrap: "wrap",
          flexDirection: "row", // Add this
          justifyContent: "space-between", // Optional for spacing
        }}
      >
        {/* Render "general" elections */}
        {generalElections.length > 0 && (
          <View>
            <Text
              style={{ color: textColor }}
              className="text-lg mb-4 font-JakartaBold"
            >
              General Elections
            </Text>
            {generalElections.map((election) => (
              <ElectionItem
                key={election.election_id}
                election={election}
                textColor={textColor}
                style={{ width: "48%" }} // Allows two items per row
              />
            ))}
          </View>
        )}

        {/* Render "inclusive" elections */}
        {inclusiveElections.length > 0 && (
          <View>
            <Text
              style={{ color: textColor }}
              className="text-lg mb-4 font-JakartaBold"
            >
              Inclusive Elections
            </Text>
            {inclusiveElections.map((election) => (
              <ElectionItem
                key={election.election_id}
                election={election}
                textColor={textColor}
              />
            ))}
          </View>
        )}
      </View>
      <View
        className="  rounded-2xl  w-full h-36 "
        style={{
          backgroundColor: BlueCard,
        }}
      >
        <ScrollView></ScrollView>
        <View className="p-4">
          <TouchableOpacity
            onPress={() => router.navigate("/(main)/VoteStats")}
          >
            <Text
              style={{ color: onBlueCardText }}
              className="text-xl  font-JakartaMedium"
            >
              View Elections Stats
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
});

export default HomeDashboard;
