import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { theme } from "../hooks/theme";
import { useThemeColor } from "@/hooks/useThemeColor";

interface CardProps {
  title: string;
  children: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, children }) => {
  const cardBackground = useThemeColor({}, "cardBackground");

  return (
    <View style={[styles.card, { backgroundColor: cardBackground }]}>
      <Text className="mb-4 font-JakartaBold text-xl">{title}</Text>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
});

export default Card;
