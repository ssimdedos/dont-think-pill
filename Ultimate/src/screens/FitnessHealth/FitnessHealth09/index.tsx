import * as React from "react";
import { Image, Platform } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Button,
  Icon,
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
  NavigationAction,
  Content,
  VStack,
  HStack,
  Text,
  LinearGradientText,
} from "components";
import CustomProgressCircle from "./CustomProgressCircle";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
} from "victory-native";
import { LinearGradient, Stop } from "react-native-svg";

const FitnessHealth01 = () => {
  const { goBack } = useNavigation();
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  const theme = useTheme();

  const data_chart = [
    { x: "Apr", y: 3, time: "Mon" },
    { x: "May", y: 4, time: "Tue" },
    { x: "Jun", y: 6.5, time: "Wed" },
    { x: "Jul", y: 10, time: "Thu" },
    { x: "Aug", y: 5.5, time: "Fri" },
    { x: "Sep", y: 7, time: "Sat" },
    { x: "Sep", y: 8, time: "Sun" },
  ];
  const tickes = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
  return (
    <Container style={styles.container}>
      <TopNavigation
        title="Running"
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="pencil" />}
      />
      <Content>
        <VStack itemsCenter mt={4}>
          <CustomProgressCircle />
        </VStack>
        <HStack alignSelfCenter mt={16} mb={2}>
          <Text category="h4">3.289</Text>
          <Text category="h4" status="platinum">
            /5.000
          </Text>
        </HStack>
        <Text center category="body">
          Today
        </Text>
        <VStack level="2" border={16} padding={16} mt={52} mh={4}>
          <HStack mb={24}>
            <LinearGradientText
              text={"Goal Progess"}
              textStyle={styles.title}
            />
            <Icon
              pack="assets"
              name={"calendar-check"}
              style={styles.calendar}
            />
          </HStack>
          <VictoryChart
            animate={{
              duration: 1000,
              onLoad: { duration: 500 },
            }}
            width={width - 48}
            height={180}
            padding={{ left: 40, bottom: 24, right: 24, top: 0 }}
          >
            <VictoryAxis
              style={{
                axis: { stroke: "transparent" },
                ticks: { stroke: "transparent", size: 0 },
                tickLabels: {
                  fill: "#889098",
                  fontSize: 12,
                },
              }}
              tickFormat={tickes}
            />
            <VictoryBar
              events={[
                {
                  target: "data",
                  eventHandlers: {
                    onPressIn: () => {
                      return [
                        {
                          target: "data",
                          eventKey: "all",
                          mutation: () => ({
                            style: { fill: "#E8E9EB20" },
                          }),
                        },
                        {
                          target: "labels",
                          eventKey: "all",
                          mutation: () => ({
                            style: {
                              fill: "transparent",
                              fontSize: 12,
                            },
                          }),
                        },
                        {
                          target: "data",
                          mutation: () => ({
                            style: { fill: "url(#gradient1)" },
                          }),
                        },
                        {
                          target: "labels",
                          mutation: () => ({
                            style: {
                              fill: theme["color-basic-100"],
                              fontSize: 12,
                            },
                          }),
                        },
                      ];
                    },
                    onPressOut: () => {
                      return [];
                    },
                  },
                },
              ]}
              labels={({ datum }) => null}
              data={data_chart}
              x="time"
              colorScale={"qualitative"}
              barWidth={40}
              padding={{ left: 100 }}
              cornerRadius={{ bottom: 8, top: 8 }}
              style={{
                data: {
                  fill: "#E8E9EB20",
                },
                labels: {
                  fill: "transparent",
                  fontSize: 12,
                },
              }}
            />
            <LinearGradient id="gradient1" x1="100%" y1="0%" x2="0%" y2="10%">
              <Stop offset="10%" stopColor="#FFFDE1" />
              <Stop offset="100%" stopColor="#CFE1FD" />
            </LinearGradient>
          </VictoryChart>
        </VStack>
      </Content>

      <Button
        style={styles.button}
        children={"Let's Start"}
        accessoryRight={<Icon pack="assets" name={"caret-right"} />}
      />
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
  button: {
    marginTop: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    lineHeight: 30,
    fontFamily: "SpaceGrotesk-Bold",
  },
  calendar: {
    width: 24,
    height: 24,
  },
});
