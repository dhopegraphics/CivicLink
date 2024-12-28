import { Feather } from "@expo/vector-icons";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export const icon = {
  index: (props) => <Feather name="home" size={24} {...props} />,
  PollingStationFinder: (props) => (
    <Feather name="compass" size={24} {...props} />
  ),
};
