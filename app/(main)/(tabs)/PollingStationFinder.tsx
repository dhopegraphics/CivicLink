import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MapView, { Marker } from "react-native-maps";
import { theme } from "@/hooks/theme";
import Button from "@/components/Button";

const PollingStationFinder = () => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const pollingStations = [
    { id: 1, name: "City Hall", latitude: 37.79, longitude: -122.43 },
    { id: 2, name: "Community Center", latitude: 37.785, longitude: -122.435 },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <Text className=" font-JakartaBold text-blue-500 text-2xl mb-4 ml-4 ">
        Find Your Polling Station
      </Text>
      <MapView style={styles.map} initialRegion={initialRegion}>
        {pollingStations.map((station) => (
          <Marker
            key={station.id}
            coordinate={{
              latitude: station.latitude,
              longitude: station.longitude,
            }}
            title={station.name}
          />
        ))}
      </MapView>
      <View style={styles.buttonContainer}>
        <Button title="Use Current Location" onPress={() => {}} />
        <Button title="Enter Address" onPress={() => {}} variant="secondary" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  title: {
    ...theme.typography.h1,
    margin: 16,
    color: theme.colors.primary,
  },
  map: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 16,
  },
});

export default PollingStationFinder;
