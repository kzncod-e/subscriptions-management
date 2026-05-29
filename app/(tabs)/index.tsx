import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";
import { styled } from "nativewind";

import { SafeAreaView as RnSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RnSafeAreaView);
export default function App() {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text className="text-5xl font-sans-extrabold ">Home</Text>

      <Link
        href={`/onboarding`}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to onboarding
      </Link>
      <Link
        href="/(auth)/sign-up"
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to sign up
      </Link>
      <Link
        href={`/(auth)/sign-in`}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to sign in
      </Link>
    </SafeAreaView>
  );
}
