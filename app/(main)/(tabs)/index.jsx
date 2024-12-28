import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "@/hooks/theme";
import Button from "@/components/Button";
import Card from "@/components/Card";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useThemeColor } from "@/hooks/useThemeColor";
import { router } from "expo-router";

const HomeDashboard = () => {
  const backgroundColor = useThemeColor({}, "background");
  const textColor = useThemeColor({}, "text");
  const onBlueCardText = useThemeColor({}, "onBlueCardText");
  const BlueCard = useThemeColor({}, "cardBlueBackground");

  const TopInset = useSafeAreaInsets();
  return (
    <ScrollView
      contentContainerStyle={[styles.scrollContent, { top: TopInset.top }]}
      style={{ backgroundColor: backgroundColor }}
    >
      <Text className="mb-6 font-JakartaSemiBold" style={{ color: textColor }}>
        Welcome to CivicLink
      </Text>
      <Card title="Upcoming Elections">
        <Text style={styles.cardText}>Next election: November 5, 2024</Text>
        <Button title="View Details" onPress={() => {}} />
      </Card>
      <Card title="Your Voting Status">
        <Text style={styles.cardText}>Registered and ready to vote!</Text>
        <Button
          title="Check Registration"
          onPress={() => {}}
          variant="secondary"
        />
      </Card>
      <Card title="Latest News">
        <Text style={styles.cardText}>
          New voting laws passed in your state
        </Text>
        <Button title="Read More" onPress={() => {}} />
      </Card>
      <View
        className="  rounded-2xl  w-full h-36 "
        style={{
          backgroundColor: BlueCard,
        }}
      >
        <ScrollView></ScrollView>
        <View className="p-4">
          <TouchableOpacity
            onPress={() => router.navigate("/(main)/VotesStats")}
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
    backgroundColor: theme.colors.background,
  },
  scrollContent: {
    padding: 16,
  },
  title: {
    marginBottom: 16,
    color: theme.colors.primary,
  },
  cardText: {
    ...theme.typography.body,
    marginBottom: 8,
  },
});

export default HomeDashboard;
