import { tabs } from "@/constants/data";
import { Tabs } from "expo-router";

import clsx from "clsx";

import { View, Image } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { colors, components } from "@/constants/theme";

const TabsLayout = () => {
  const tabBar = components.tabBar;
  const insets = useSafeAreaInsets();
  const tabIcon = ({ focused, icon }: TabIconProps) => {
    return (
      <View className={"tabs-icon"}>
        <View className={clsx("tabs-pill", focused && "tabs-active")}>
          <Image source={icon} className={"tabs-glyph"} />
        </View>
      </View>
    );
  };
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          bottom: Math.max(insets.bottom, tabBar.height),
          height: tabBar.height,
          marginHorizontal: tabBar.horizontalInset,
          borderRadius: tabBar.radius,
          backgroundColor: colors.primary,
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarItemStyle: {
          paddingVertical: tabBar.height / 2 - tabBar.iconFrame / 1.6,
        },
        tabBarIconStyle: {
          width: tabBar.iconFrame,
          height: tabBar.iconFrame,
          alignItems: "center",
        },
      }}
    >
      {tabs.map((tab) => (
        <Tabs.Screen
          key={tab.name}
          name={tab.name}
          options={{
            title: tab.title,
            tabBarIcon: ({ focused }) => tabIcon({ focused, icon: tab.icon }),
          }}
        />
      ))}
      r
    </Tabs>
  );
};

export default TabsLayout;
