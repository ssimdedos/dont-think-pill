import React, { memo, useState, useCallback } from "react";
import { View, Text, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";

import GoalSettingItem from "@screens/GoalSettings/components/GoalSettingItem";
import keyExtractor from "@utils/keyExtractor";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgShape from "@svgs/SvgShape";

const GOAL_SETTING_DATA = {
  totalGoal: "49.7",
  content: [
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 69,
    },
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 50,
    },
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 49,
    },
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 36,
    },
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 99,
    },
    {
      Svg: <SvgShape />,
      title: "Desinfectant",
      bpm: 89,
      percent: 10,
    },
  ],
};

const GoalSettings = memo(() => {
  const [goalSettingData, setGoalSettingData] = useState(GOAL_SETTING_DATA);

  const renderItem = useCallback(({ item }) => {
    const { Svg, title, bpm, percent } = item;
    return (
      <GoalSettingItem Svg={Svg} title={title} bpm={bpm} percent={percent} />
    );
  }, []);

  const listHeaderComponent = useCallback(() => {
    return (
      <>
        <Text style={styles.totalGoal}>Total Goal</Text>
        <Text style={styles.txtNumber}>
          {goalSettingData.totalGoal}
          <Text style={styles.txtPercent}>%</Text>
        </Text>
      </>
    );
  }, [goalSettingData.totalGoal]);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={goalSettingData.content}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default GoalSettings;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  totalGoal: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    marginLeft: 32,
    textTransform: "uppercase",
  },
  txtNumber: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 96,
    marginLeft: 32,
    textTransform: "uppercase",
    color: colors.blue,
    marginTop: 16,
  },
  txtPercent: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "300",
    fontSize: 48,
    lineHeight: 114,
    marginTop: 24,
    marginLeft: 32,
    textTransform: "uppercase",
    color: colors.blue,
  },
  contentContainerStyle: {
    paddingTop: 34,
    paddingBottom: getStatusBarHeight(),
  },
});
