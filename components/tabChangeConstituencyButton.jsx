import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";

const TabChangeButton = ({
  activeConstituencyTab,
  setActiveConstituencyTab,
}) => {
  return (
    <View style={styles.switchContainer}>
      {/* Friends Tab */}
      <TouchableOpacity
        style={[
          styles.switchButton,
          activeConstituencyTab === "Constituency" && styles.activeButton,
        ]}
        onPress={() => setActiveConstituencyTab("Constituency")}
      >
        <Text
          style={[
            styles.switchText,
            activeConstituencyTab === "Constituency" && styles.activeText,
          ]}
        >
          Constituency
        </Text>
      </TouchableOpacity>

      {/* Global Tab */}
      <TouchableOpacity
        style={[
          styles.switchButton,
          activeConstituencyTab === "Global" && styles.activeButton,
        ]}
        onPress={() => setActiveConstituencyTab("Global")}
      >
        <Text
          style={[
            styles.switchText,
            activeConstituencyTab === "Global" && styles.activeText,
          ]}
        >
          Global
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TabChangeButton;

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
    width: "75%",
    height: "30%",
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
});
