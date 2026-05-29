import { View, Text } from "react-native";
import React from "react";
import { styled } from "nativewind";

import { SafeAreaView as RnSafeAreaView } from "react-native-safe-area-context";
const SafeAreaView = styled(RnSafeAreaView);
const Insights = () => {
  return (
    <SafeAreaView className="flex-1 p-5 bg-background">
      <Text>Insights</Text>
  </SafeAreaView>
  );
};

export default Insights;
