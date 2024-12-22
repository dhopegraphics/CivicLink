import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { theme } from "../../../hooks/theme";
import Button from "../../../components/Button";
import Card from "../../../components/Card";

const HomeDashboard = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Welcome to CivicLink</Text>
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
      </ScrollView>
    </SafeAreaView>
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
