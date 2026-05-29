import { View, Text, Pressable } from "react-native";
import { router } from "expo-router";
import { useSession } from "../ctx";

const SignIn = () => {
  const { signIn } = useSession();

  const handleSignIn = () => {
    signIn();
    router.replace("/(tabs)");
  };

  return (
    <View className="flex-1 items-center justify-center bg-background">
      <Text className="text-xl font-bold mb-8">Sign In</Text>
      <Pressable
        onPress={handleSignIn}
        className="rounded bg-primary px-6 py-3"
      >
        <Text className="text-white font-medium">Sign In</Text>
      </Pressable>
    </View>
  );
};

export default SignIn;
