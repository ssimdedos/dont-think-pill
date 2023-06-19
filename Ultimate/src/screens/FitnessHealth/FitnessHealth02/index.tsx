import * as React from "react";
import { Image, Platform } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { useNavigation } from "@react-navigation/native";
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  LinearGradientText,
  NavigationAction,
  VStack,
  Text,
} from "components";
// ----------------------------- Reanimated 2 -----------------------------------
import Carousel from "react-native-reanimated-carousel";
import { useSharedValue } from "react-native-reanimated";
import Selected from "./Selected";
import CustomProgressCircle from "./CustomProgressCircle";
import TabBar from "./TabBar";
const FitnessHealth01 = () => {
  const { goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const bg = (index: number) => {
    switch (index) {
      case 0:
        return "#00CD50";
      case 1:
        return "#B1CEDE";
      case 2:
        return "#F6D938";
      default:
        break;
    }
  };
  return (
    <Container style={styles.container}>
      <TopNavigation accessoryRight={<NavigationAction icon="dot-six" />} />
      <Content contentContainerStyle={styles.content}>
        <LinearGradientText text="My Challenges" textStyle={styles.title} />
        <Selected />
        <HStack style={styles.card}>
          <VStack>
            <Text category="h4" marginBottom={8}>
              Done Achivements!
            </Text>
            <Text category="subhead">You are better than 25% user</Text>
          </VStack>
          <VStack>
            <CustomProgressCircle />
          </VStack>
          <Icon pack="assets" name="caret-right" />
        </HStack>
        {data.map((item, index) => {
          return (
            <VStack key={index} style={styles.item}>
              <HStack itemsCenter mb={16}>
                <HStack gap={8} itemsCenter justify="flex-start">
                  <HStack
                    style={[
                      styles.bgImage,
                      {
                        backgroundColor: bg(index),
                      },
                    ]}
                  >
                    {/* @ts-ignore */}
                    <Image source={item.image} style={[styles.image]} />
                  </HStack>
                  <Text>{item.title}</Text>
                </HStack>
                <VStack style={styles.percent}>
                  <Text category="h5">{item.percent}</Text>
                </VStack>
              </HStack>
              <HStack itemsCenter>
                {item.date.map((day, i) => {
                  return (
                    <VStack key={i}>
                      {day.finished === undefined ? (
                        <VStack style={styles.day}>
                          <Text category="body" status="platinum">
                            {day.time.charAt(0)}
                          </Text>
                        </VStack>
                      ) : (
                        <VStack>
                          <Image
                            source={
                              day.finished
                                ? Images.health.acitve
                                : Images.health.xcircle
                            }
                          />
                        </VStack>
                      )}
                    </VStack>
                  );
                })}
              </HStack>
            </VStack>
          );
        })}
      </Content>
      <TabBar />
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  content: {
    marginTop: 12,
  },
  title: {
    fontSize: 28,
    lineHeight: 40,
    fontFamily: "SpaceGrotesk-Bold",
    marginLeft: 16,
  },
  card: {
    backgroundColor: "color-primary-default",
    borderRadius: 16,
    marginHorizontal: 4,
    padding: 24,
    marginTop: 24,
    alignItems: "center",
    marginBottom: 8,
  },
  image: {
    width: 24,
    height: 24,
  },
  bgImage: {
    padding: 8,
    borderRadius: 16,
  },
  item: {
    backgroundColor: "background-basic-color-2",
    borderRadius: 16,
    marginBottom: 4,
    marginHorizontal: 4,
    padding: 16,
  },
  percent: {
    borderRadius: 16,
    backgroundColor: "color-primary-default",
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  day: {
    borderRadius: 99,
    borderColor: "#5A6570",
    borderWidth: 1,
    width: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
  },
});

const data = [
  {
    image: Images.health.runner,
    title: "Running",
    percent: "26%",
    date: [
      { time: "Monday", finished: true },
      { time: "Tueday", finished: false },
      { time: "Wednesday" },
      { time: "Thursday" },
      { time: "Friday" },
      { time: "Saturday" },
      { time: "Sunday" },
    ],
  },
  {
    image: Images.health.meditation,
    title: "Meditation",
    percent: "34%",
    date: [
      { time: "Monday", finished: false },
      { time: "Tueday" },
      { time: "Wednesday" },
      { time: "Thursday" },
      { time: "Friday" },
      { time: "Saturday" },
      { time: "Sunday" },
    ],
  },
  {
    image: Images.health.runner,
    title: "Reading",
    percent: "15%",
    date: [
      { time: "Monday", finished: true },
      { time: "Tueday", finished: false },
      { time: "Wednesday" },
      { time: "Thursday" },
      { time: "Friday" },
      { time: "Saturday" },
      { time: "Sunday" },
    ],
  },
];
