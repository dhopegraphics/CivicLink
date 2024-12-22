import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { theme } from "../hooks/theme";

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: "primary" | "secondary";
}

const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  variant = "primary",
}) => {
  return (
    <TouchableOpacity
      style={[styles.button, variant === "secondary" && styles.secondaryButton]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.buttonText,
          variant === "secondary" && styles.secondaryButtonText,
        ]}
      >
        {title}
      </Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: theme.colors.primary,
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    ...theme.typography.button,
  },
  secondaryButton: {
    backgroundColor: theme.colors.secondary,
  },
  secondaryButtonText: {
    color: "#FFFFFF",
  },
});

export default Button;
