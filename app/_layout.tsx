import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen
        name="counter"
        options={{ title: "Counter" }}
      ></Stack.Screen>
      <Stack.Screen
        name="index"
        options={{ title: "Shopping List" }}
      ></Stack.Screen>
      <Stack.Screen name="idea" options={{ title: "Idea" }}></Stack.Screen>
    </Stack>
  );
}
