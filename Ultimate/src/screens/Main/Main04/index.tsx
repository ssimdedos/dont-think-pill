import React, { memo } from "react";
import { TouchableOpacity } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  Icon,
  Avatar,
  StyleService,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";

// ----------------------------- Components -----------------------------------
import {
  NavigationAction,
  Container,
  Content,
  Text,
  HStack,
  VStack,
} from "components";
import { LinearGradient } from "expo-linear-gradient";
import { NameIcon } from "types/iconpack-name";
import { Images } from "assets/images";
import { PieChart } from "react-native-svg-charts";
import { Labels } from "./Label";
import BottomBar from "./BottomBar";
import { useLayout } from "hooks";
import { useNavigation, useTheme } from "@react-navigation/native";
import BottomBar01 from "elements/Health/BottomBar01";

const Main04 = memo(() => {
  const { navigate } = useNavigation();
  const theme = useTheme();
  const onHome = React.useCallback(() => navigate('Main01'), []);
  const onDaily = React.useCallback(() => navigate('Main02'), []);
  const onWeekly = React.useCallback(() => navigate('Main03'), []);
  const onDiagnose = React.useCallback(() => navigate('Main04'), []);

  const styles = useStyleSheet(themedStyles);
  const { width } = useLayout();
  const Color_Gradient = ["#CFE1FD", "#FFFDE1"];
  const ButtonNotification = ({
    icon,
    notification,
    onPress,
  }: {
    icon: NameIcon;
    notification: number;
    onPress?(): void;
  }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onPress}
        style={styles.buttonNotification}
      >
        {notification > 0 && (
          <VStack style={styles.notification}>
            <Text style={styles.textNotification} status="warning" center>
              {notification}
            </Text>
          </VStack>
        )}
        <Icon pack="assets" name={icon} style={styles.iconNav} />
      </TouchableOpacity>
    );
  };

  const DATA = [
    { title: "Other", value: 25, svg: { fill: "#CFE1FD" } },
    { title: "💖  Crush", value: 25, svg: { fill: "#B1CEDE" } },
    { title: "🎉  Party", value: 21, svg: { fill: "#F6D938" } },
    { title: "🔥  Hot", value: 18, svg: { fill: "#106AF3" } },
    { title: "🔥  ", value: 8, svg: { fill: "#9AD960" } },
  ];
  const pieData = DATA.filter((value) => value.value > 0).map(
    (value, index) => ({
      title: value.title,
      value: value.value,
      svg: { fill: value.svg.fill },
      key: `pie-${index}`,
      arc: { outerRadius: "100%", cornerRadius: 6 },
    })
  );

  return (
    <Container style={styles.container}>
      <TopNavigation
        appearance="control"
        accessoryLeft={
          <HStack gap={16}>
            <NavigationAction icon="user" status="placeholder" />
            <NavigationAction icon="search" status="placeholder" />
          </HStack>
        }
        accessoryRight={
          <LinearGradient colors={Color_Gradient} style={styles.rightNav}>
            <HStack>
              {DATA_Avatar.map((item, i) => {
                //@ts-ignore
                return (
                  <Avatar
                    source={item}
                    key={i}
                    //@ts-ignore
                    style={[styles.avatar, { zIndex: -i }]}
                  />
                );
              })}
            </HStack>
            <ButtonNotification icon="house-fill" notification={3} />
            <ButtonNotification icon="heart-fill" notification={4} />
          </LinearGradient>
        }
      />
      <Content contentContainerStyle={styles.content}>
        <HStack justify="flex-start" gap={16} ml={16} mb={40}>
          <Avatar source={Images.avatar.avatar_01} size="small" />
          <VStack gap={8}>
            <Text category="h4">{"Hi, Albert Flores!"}</Text>
            <Text category="subhead" status="placeholder">
              {"Hi, Albert Flores!"}
            </Text>
          </VStack>
        </HStack>
        <PieChart
          style={{ width: width, height: 380 }}
          data={pieData}
          innerRadius={50}
          outerRadius={100}
          labelRadius={160}
          // @ts-ignore
          sort={(a, b) => b.key - a.key}
        >
          <Labels />
        </PieChart>
        <VStack style={styles.tab}>
          {pieData.reverse().map((item, i) => {
            if (item.title === "Other") {
            } else {
              return (
                <VStack level="1" key={i} pv={8} ph={16} border={99}>
                  <Text category="h4" center>
                    {item.title}
                  </Text>
                </VStack>
              );
            }
          })}
          <LinearGradient colors={Color_Gradient} style={styles.buttonAdd}>
            <Text category="h4" center status="black">
              + add your own
            </Text>
          </LinearGradient>
        </VStack>
      </Content>
      <VStack style={styles.tabBar}>
      </VStack>
      <BottomBar01 onHome={onHome} onDaily={onDaily} onWeekly={onWeekly} onDiagnose={onDiagnose} iconActiveColor={theme["text-basic-color"]} />
    </Container>
  );
});

export default Main04;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    backgroundColor: "#0D0D14",
    paddingBottom: 0,
  },
  content: {
    paddingTop: 24,
  },
  rightNav: {
    flexDirection: "row",
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
    gap: 12,
  },
  iconNav: {
    tintColor: "text-black-color",
    width: 24,
    height: 24,
  },
  buttonNotification: {},
  textNotification: {
    fontSize: 10,
    lineHeight: 12,
    fontWeight: "bold",
  },
  notification: {
    position: "absolute",
    top: -8,
    right: -8,
    backgroundColor: "color-primary-default",
    width: 16,
    height: 16,
    borderRadius: 99,
    zIndex: 100,
    justifyContent: "center",
  },
  avatar: {
    width: 24,
    height: 24,
    borderWidth: 1,
    borderColor: "background-basic-color-1",
    borderRadius: 99,
    marginLeft: -4,
  },
  tab: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderRadius: 16,
    backgroundColor: "color-primary-default",
    flex: 1,
    paddingVertical: 28,
    paddingHorizontal: 24,
    gap: 12,
  },
  buttonAdd: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 99,
  },
  tabBar: {
    position: "absolute",
    bottom: 24,
  },
});

const DATA_Avatar = [
  Images.avatar.avatar_01,
  Images.avatar.avatar_02,
  Images.avatar.avatar_03,
];
