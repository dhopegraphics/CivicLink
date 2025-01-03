import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/hooks/theme";
import Button from "@/components/Button";
import Feather from "@expo/vector-icons/Feather";
import Card from "@/components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";
import AntDesign from "@expo/vector-icons/AntDesign";

import { elections } from "@/data/ElectionsTable";
import { ElectionItem } from "@/utils/ElectionTimer";
import TabChangeButton from "../../../components/tabChangeConstituencyButton";
import LeadMemberPreview from "../../../components/LeadMemberPreview";

const SCREEN_WIDTH = Dimensions.get("window").width;
const ITEM_WIDTH = 200; // Width of each item including margins

const HomeDashboard = () => {
  const [focusedIndex, setFocusedIndex] = useState(0);
  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;

    // Calculate the nearest index with a threshold
    const currentIndex = Math.round(offsetX / ITEM_WIDTH);
    const exactOffset = currentIndex * ITEM_WIDTH;

    // Check if the current position is within a snapping threshold
    const threshold = ITEM_WIDTH * 0.3; // 30% of the item width
    if (Math.abs(offsetX - exactOffset) < threshold) {
      setFocusedIndex(currentIndex);
    }
  };

  const [activeConstituencyTab, setActiveConstituencyTab] =
    useState("Constituency");

  const renderContent = () => {
    if (activeConstituencyTab === "Friends") {
      return <Text>Friends List</Text>;
    } else if (activeConstituencyTab === "Global") {
      return <Text>Global Feed</Text>;
    }
  };

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
          paddingBottom: 150,
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
            {generalElections.map((election, index) => (
              <ElectionItem
                key={election.election_id}
                election={election}
                textColor={textColor}
                style={{ width: "48%" }} // Allows two items per row
                index={index}
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
            {inclusiveElections.map((election, index) => (
              <ElectionItem
                key={election.election_id}
                election={election}
                textColor={textColor}
                index={index + 2}
              />
            ))}
          </View>
        )}
      </View>
      <View className="p-2">
        {/* Tab space to check leaderBoard parliamentary votes stats */}
        <View className="bg-slate-300  rounded-3xl " style={{ height: 400 }}>
          {/* for top part of the screen */}
          <View className="bg-slate-900 w-full h-60">
            <View className="flex-1 flex-row  p-6 justify-between ">
              {/* Switch Button */}
              <TabChangeButton
                activeConstituencyTab={activeConstituencyTab}
                setActiveConstituencyTab={setActiveConstituencyTab}
              />
              {/* share button*/}
              <View className="mr-4">
                <TouchableOpacity className="bg-slate-200 w-10 h-10 rounded-lg items-center justify-center ">
                  <Feather name="share" size={24} color="black" />
                </TouchableOpacity>
              </View>
            </View>
            {/* for candidates details */}
            <ScrollView
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              pagingEnabled={true} // Enables snapping to each child view
              contentContainerStyle={styles.scrollViewContent}
              decelerationRate="normal"
              snapToInterval={ITEM_WIDTH} // Width of each item including padding/margin
              snapToAlignment="center"
              onScroll={handleScroll} // Track the current scroll position
              scrollEventThrottle={16} // Increase scroll event frequency
            >
              {/* Render multiple LeadMemberPreview components */}
              <LeadMemberPreview
                CandidateName={"Isaac Mensah"}
                voteAcquired={"240"}
                outOfVote={"500"}
                TopVotePercentage={"50%"}
              />
              <LeadMemberPreview
                CandidateName={"Nathaniel Mensah"}
                voteAcquired={"500"}
                outOfVote={"1000"}
                TopVotePercentage={"50%"}
              />
              <LeadMemberPreview
                CandidateName={"Rudolf Quansah "}
                voteAcquired={"350"}
                outOfVote={"400"}
                TopVotePercentage={"70%"}
                PreviewWidth={ITEM_WIDTH}
              />
              {/* Add as many as needed */}
            </ScrollView>
          </View>

          <View>
            <Text style={styles.focusText}>Focused Index: {focusedIndex}</Text>
          </View>
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
  switchContainer: {
    flexDirection: "row",
    backgroundColor: "#23272a", // Background color for the switch
    borderRadius: 25, // Rounded edges
    padding: 4,
  },
  switchButton: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20, // Rounded edges
  },
  activeButton: {
    backgroundColor: "#5865f2", // Active button background
  },
  switchText: {
    color: "#888", // Inactive text color
    fontSize: 14,
    fontWeight: "500",
  },
  activeText: {
    color: "#fff", // Active text color
  },
  scrollViewContent: {
    paddingHorizontal: 25, // Add padding to the sides of the scroll view
  },
});

export default HomeDashboard;
