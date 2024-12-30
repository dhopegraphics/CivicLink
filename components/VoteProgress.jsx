import React from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import Svg, { G, Text as SvgText } from "react-native-svg";
import PieChart from "react-native-pie-chart";

const PartyVotePieChart = ({ parties }) => {
  const widthAndHeight = 220;
  const radius = widthAndHeight / 2;
  const totalVotes = parties.reduce((sum, party) => sum + party.votes, 0);

  // Calculate the cumulative angles for each party
  let cumulativeAngle = 0;
  const partyData = parties.map((party) => {
    const percentage = (party.votes / totalVotes) * 100;
    const angle = (percentage / 100) * 360;
    const startAngle = cumulativeAngle;
    const endAngle = cumulativeAngle + angle;
    cumulativeAngle += angle;
    return {
      ...party,
      percentage,
      startAngle,
      endAngle,
    };
  });

  // Function to calculate label positions
  const calculateLabelPosition = (startAngle, endAngle) => {
    const middleAngle = (startAngle + endAngle) / 2;
    const radians = (middleAngle * Math.PI) / 180;
    const x = radius + (radius + 20) * Math.cos(radians);
    const y = radius + (radius + 20) * Math.sin(radians);
    return { x, y };
  };

  return (
    <View style={styles.container}>
      <Svg width={widthAndHeight} height={widthAndHeight}>
        <PieChart
          widthAndHeight={widthAndHeight}
          series={partyData.map((party) => ({
            value: party.percentage,
            color: party.color,
          }))}
          doughnut={true}
          coverRadius={0.6}
          coverFill="white"
        />
        {partyData.map((party, index) => {
          const { x, y } = calculateLabelPosition(
            party.startAngle,
            party.endAngle
          );
          return (
            <G key={index}>
              <SvgText
                x={x}
                y={y}
                fill="black"
                fontSize="12"
                textAnchor="middle"
                alignmentBaseline="middle"
              >
                {`${party.name} (${party.percentage.toFixed(1)}%)`}
              </SvgText>
            </G>
          );
        })}
      </Svg>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginVertical: 20,
  },
});

export default PartyVotePieChart;
