import { Tabs } from "expo-router";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import { theme } from "../theme";

export default function Layout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: theme.colorCerulean }}>
      <Tabs.Screen
        name="index"
        options={{
          title: "Shopping List",
          tabBarIcon: ({ size, color }) => (
            <Feather name="list" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="counter"
        options={{
          title: "Counter",
          headerShown: false,
          tabBarIcon: ({ size, color }) => (
            <AntDesign name="clockcircleo" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
      <Tabs.Screen
        name="idea"
        options={{
          title: "Idea",
          tabBarIcon: ({ size, color }) => (
            <FontAwesome5 name="lightbulb" size={size} color={color} />
          ),
        }}
      ></Tabs.Screen>
    </Tabs>
  );
}
