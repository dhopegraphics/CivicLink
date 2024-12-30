import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";

const PartyVoteDetails = ({ parties }) => {
  return (
    <View style={styles.container}>
      {parties.map((party) => (
        <View key={party.party_id} style={styles.partyContainer}>
          <Image source={{ uri: party.logoUri }} style={styles.logo} />
          <Text style={styles.partyName}>{party.name}</Text>
          <Text style={styles.votePercentage}>{party.votePercentage}%</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
  },
  partyContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  partyName: {
    flex: 1,
    fontSize: 16,
  },
  votePercentage: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default PartyVoteDetails;
