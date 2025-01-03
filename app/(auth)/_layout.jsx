import { Stack } from "expo-router";

export default function AuthLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen
        name="SignIn"
        options={{ headerShown: false, presentation: "modal" }}
      />
    </Stack>
  );
}
