import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const userVoteSumViewCard = () => {
  return (
    <View>
      <View>
        <Image
          style={{ width: 30, height: 30 }}
          source={require("./assets/like.png")}
        />
      </View>
      <View></View>
    </View>
  );
};

export default userVoteSumViewCard;

const styles = StyleSheet.create({});
