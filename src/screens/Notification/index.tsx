import React, { memo, useCallback, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Platform } from "react-native";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import SvgClose from "@svgs/Notification/SvgClose";
import SvgOption from "@svgs/Notification/SvgOption";
import SvgClient1 from "@svgs/Notification/SvgClient1";
import SvgClient2 from "@svgs/Notification/SvgClient2";
import SvgClient3 from "@svgs/Notification/SvgClient3";
import keyExtractor from "@utils/keyExtractor";
import FONTS from "@utils/fonts/index";
import { ScaledSheet } from "react-native-size-matters";

import colors from "@utils/colors";
import NotificationItem from "@screens/Notification/components/NotificationItem";
import Container from "@components/Container";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DATA_NOTIS = [
  {
    id: 0,
    name: "Luke Casey",
    des: " rate your work 5* \n" + "“Healer patient app UI KIT”",
    Svg: SvgClient1,
    active: true,
    time: "48 mins ago",
  },
  {
    id: 1,
    name: "Luella Norton",
    des: "follow you",
    Svg: SvgClient2,
    active: true,
    time: "6 hours ago",
    follow: true,
  },
  {
    id: 2,
    name: "Dr. Luella Norton",
    des: "send you in a comment in post ",
    Svg: SvgClient3,
    active: true,
    reply: true,
    time: "2 days ago",
  },
  {
    id: 3,
    name: "Dr. Luke Casey",
    des: "accept your book appointment ",
    Svg: SvgClient1,
    time: "48 mins ago",
  },
  {
    id: 5,
    name: "Luke Casey",
    des: "like your project \n" + "“Healer patient app UI KIT”",
    Svg: SvgClient1,
    time: "48 mins ago",
  },
];

const Notification = memo(() => {
  const { goBack } = useNavigation();
  const { top } = useSafeAreaInsets();

  const onOption = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }) => {
    const { Svg, name, des, reply, time, follow, active, id } = item;
    return (
      <NotificationItem
        id={id}
        name={name}
        des={des}
        Svg={Svg}
        active={active}
        time={time}
        follow={follow}
        reply={reply}
      />
    );
  }, []);

  return (
    <Container
      paddingTop={false}
      paddingBottom={false}
      style={styles.container}
    >
      <View style={[styles.header, { paddingTop: top + 12 }]}>
        <TouchableOpacity onPress={goBack} activeOpacity={0.7}>
          <SvgClose />
        </TouchableOpacity>
        <Text style={styles.titleHeader}>Notification</Text>
        <TouchableOpacity onPress={onOption} activeOpacity={0.7}>
          <SvgOption />
        </TouchableOpacity>
      </View>
      <FlatList
        bounces={false}
        showsVerticalScrollIndicator={false}
        data={DATA_NOTIS}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </Container>
  );
});
export default Notification;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  header: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    alignItems: "center",
    paddingBottom: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  titleHeader: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    color: colors.semiBlack,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace(),
  },
});
