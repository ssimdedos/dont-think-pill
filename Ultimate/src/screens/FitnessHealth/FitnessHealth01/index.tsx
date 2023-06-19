import * as React from "react";
import { Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Avatar,
  useTheme,
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
  Text,
  NavigationAction,
  VStack,
  HStack,
} from "components";
// ----------------------------- Reanimated 2 -----------------------------------
import dayjs from "dayjs";
import BottomBar01 from "elements/Health/BottomBar01";

const FitnessHealth01 = () => {
  const { goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  const [selected, setSelected] = React.useState(0);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          //@ts-ignore
          <Avatar source={Images.avatar.avatar_01} style={styles.avatar} />
        }
        accessoryRight={<NavigationAction icon="notification" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text marginLeft={16} marginRight={64} marginBottom={24} category="h1">
          Tracking Habit Fitness Daily
        </Text>
        <HStack mh={16}>
          {DATA_DATE.map((date, index) => {
            const isActive = index === selected;
            return (
              <VStack
                key={index}
                onPress={() => {
                  setSelected(index);
                }}
                style={[
                  styles.date,
                  isActive && {
                    backgroundColor: theme["color-primary-default"],
                  },
                ]}
              >
                <Text category="h5">{dayjs(date.time).format("DD")}</Text>
                <Text category="c1" status="placeholder">
                  {dayjs(date.time).format("MMM")}
                </Text>
              </VStack>
            );
          })}
        </HStack>
        <HStack wrap mh={16} mt={24}>
          {DATA.map((item, i) => {
            return (
              <VStack
                key={i}
                style={[styles.item, { width: (width - 40) / 2 ,height:216*(height /812)}]}
              >
                <Image source={item.img} />
                <Text category="body" marginTop={8} marginBottom={55}>
                  {item.title}
                </Text>
                <HStack justify="flex-start">
                  <Text category="h4">{item.step}</Text>
                  <Text category="h4" status="placeholder">
                    /{item.goal}
                  </Text>
                </HStack>
                <Text category="body">{item.value}</Text>
              </VStack>
            );
          })}
        </HStack>
      </Content>
      <BottomBar01 iconActiveColor={theme["text-basic-color"]} />
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
    marginTop: 24,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  date: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
    alignItems: "center",
    backgroundColor: "background-basic-color-2",
    gap: 4,
    width: 42,
  },
  item: {
    backgroundColor: "background-basic-color-2",
    borderRadius: 24,
    padding: 24,
    marginBottom: 8,
  },
});
const DATA_DATE = [
  { time: "2023-07-13T05:57:14.533Z" },
  { time: "2023-07-14T05:57:14.533Z" },
  { time: "2023-07-15T05:57:14.533Z" },
  { time: "2023-07-16T05:57:14.533Z" },
  { time: "2023-07-17T05:57:14.533Z" },
  { time: "2023-07-18T05:57:14.533Z" },
  { time: "2023-07-19T05:57:14.533Z" },
];
const DATA = [
  {
    img: Images.health.runner,
    title: "뛰기",
    goal: "5.000",
    step: "3.289",
    value: "Step",
  },
  {
    img: Images.health.meditation,
    title: "Meditation",
    goal: "60",
    step: "30",
    value: "Mins",
  },
  {
    img: Images.health.life,
    title: "Water",
    goal: "8",
    step: "3",
    value: "Cups",
  },
  {
    img: Images.health.reading,
    title: "Reading",
    goal: "60",
    step: "30",
    value: "Mins",
  },
];
