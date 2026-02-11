import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
export default function RootLayout() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <>
          <StatusBar style="dark" backgroundColor="#2a2f37" />
          <Stack
            screenOptions={{
              headerShown: false,
              contentStyle: { backgroundColor: "#1A1A2E" },
              animation: "fade",
            }}
          />
        </>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
