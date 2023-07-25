import React, { memo, useCallback, useState, useRef, useEffect } from "react";
import { Animated, Platform, ScrollView, LogBox } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import StaticsHealthItem from "@screens/Day/Components/StaticsHealthItem";
import SvgNurse from "@svgs/SvgNurse";
import StaticsHealthChart from "@components/StaticsHealthChart";
import ROUTES from "@utils/routes";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgBlood from "@svgs/Blood/SvgBlood";
import SvgScale from "@svgs/SvgScale";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

const NOTIFICATION_DATA = {
  title: "Good Health 👍",
  description: "Keep track it everyday!",
  Svg: <SvgNurse width={90} height={90} />,
};

const Day = memo(({}) => {
  const { navigate } = useNavigation();
  const { top } = useSafeAreaInsets();
  const [notificationData, setNotificationData] = useState(NOTIFICATION_DATA);
  const [viewState, setViewState] = useState(false);
  const [view, setView] = useState(false);
  const [showChart1, setShowChart1] = useState(true);
  const [showChart2, setShowChart2] = useState(true);
  const opacityAnim = useRef(new Animated.Value(1)).current;
  const opacityAnim1 = useRef(new Animated.Value(1)).current;

  const opacityStyle = {
    opacity: opacityAnim,
  };

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const onChart1 = useCallback(() => {
    startAnimationOpacity();
    setViewState(!viewState);
    viewState === false ? setShowChart2(false) : setShowChart2(true);
  }, [viewState]);

  const onChart2 = useCallback(() => {
    startAnimationOpacity1();
    setView(!view);
    view === false ? setShowChart1(false) : setShowChart1(true);
  }, [view]);

  const onSeeGoals = useCallback(() => {
    navigate(ROUTES.GoalSettings);
  }, []);

  const onEditGoal = useCallback(() => {
    navigate(ROUTES.SetGoal);
  }, []);

  const startAnimationOpacity = useCallback(() => {
    if (viewState === true) {
      Animated.timing(opacityAnim, {
        toValue: 1,
        timing: 400,
      }).start();
    } else {
      Animated.timing(opacityAnim, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [opacityAnim, viewState]);

  const startAnimationOpacity1 = useCallback(() => {
    if (view === true) {
      Animated.timing(opacityAnim1, {
        toValue: 1,
        timing: 400,
      }).start();
    } else {
      Animated.timing(opacityAnim1, {
        toValue: 0,
        duration: 300,
      }).start();
    }
  }, [opacityAnim1, view]);

  return (
    <ScrollView
      contentContainerStyle={styles.contentContainerStyle}
      showsVerticalScrollIndicator={false}
      style={styles.container}
    >
      <StaticsHealthItem
        style={{ marginTop: top + 130 }}
        title={notificationData.title}
        description={notificationData.description}
        Svg={notificationData.Svg}
      />
      {showChart1 && (
        <StaticsHealthChart
          Svg={<SvgBlood width={12} height={16} />}
          glycemicIndex={89}
          percentage={73}
          onSeeGoals={onSeeGoals}
          onSeeDetails={onChart1}
          onPress={onChart1}
          onEditGoal={onEditGoal}
        />
      )}
      {showChart2 && (
        <StaticsHealthChart
          Svg={<SvgScale color={colors.secondRed} />}
          glycemicIndex={89}
          percentage={25}
          onSeeGoals={onSeeGoals}
          onSeeDetails={onChart2}
          onPress={onChart2}
          style={opacityStyle}
        />
      )}
    </ScrollView>
  );
});
export default Day;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  staticsHealthChart: {
    marginBottom: 16,
  },
  contentContainerStyle: {
    paddingBottom: Platform.OS === "ios" ? getStatusBarHeight() + 100 : 100,
  },
});
