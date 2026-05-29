import "@/global.css";
import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold text-blue-500">
        Welcome to Nativewin
      </Text>
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
      <Link
        href={`/subscriptions/spotify`}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Spotify
      </Link>
      <Link
        href={{ pathname: `/subscriptions/[id]`, params: { id: "claude" } }}
        className="mt-4 rounded bg-primary text-white p-4"
      >
        Go to Claude
      </Link>
    </View>
  );
}
