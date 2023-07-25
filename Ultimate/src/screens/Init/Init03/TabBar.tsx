import React from "react";
import { StyleSheet, ViewStyle } from "react-native";
import { Layout, useTheme } from "@ui-kitten/components";
import { VStack, Text } from "components";

interface TabBarProps {
  style?: ViewStyle;
  tabs: string[];
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
}

const TabBar: React.FC<TabBarProps> = ({ style, tabs, index, setIndex }) => {
  const theme = useTheme();
  return (
    <Layout level="2" style={[styles.tabView, style]}>
      {tabs.map((tab, i) => {
        const acitve = i === index;
        return (
          <VStack
            key={i}
            style={[styles.tab, acitve && styles.tabActive]}
            onPress={() => {
              setIndex(i);
            }}
          >
            <Text
              category="footnote"
              style={{ color: !acitve ? "#A0A7AD" : "#FFFFFF" }}
            >
              {tab}
            </Text>
          </VStack>
        );
      })}
    </Layout>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  tabView: {
    flexDirection: "row",
    overflow: "hidden",
    borderRadius: 12,
    width: 165,
    height: 34,
    padding: 2,
    gap: 4,
    borderWidth: 1,
    borderColor: "#414F5B",
  },
  tab: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
  },
  tabActive: {
    backgroundColor: "#106AF3",
  },
  icon: {
    width: 20,
    height: 20,
  },
});
