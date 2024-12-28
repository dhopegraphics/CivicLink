import { AntDesign, FontAwesome, SimpleLineIcons } from "@expo/vector-icons";
import { View } from "react-native";
import { Tabs } from "expo-router";
import { TabBar } from "../../../components/TabBar";

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <TabBar {...props} />}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="PollingStationFinder"
        options={{
          title: "Finder",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
