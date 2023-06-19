import * as React from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
  Avatar,
} from "@ui-kitten/components";
// ----------------------------- Assets -----------------------------------
import { Images } from "assets/images";
// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Components -----------------------------------
import { Container, Content, NavigationAction, VStack, Text } from "components";
// ----------------------------- Reanimated 2 -----------------------------------
import CardLession from "./CardLession";

const FitnessHealth01 = () => {
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <Container style={styles.container}>
      <TopNavigation
        accessoryLeft={
          //@ts-ignore
          <Avatar source={Images.avatar.avatar_01} style={styles.avatar} />
        }
        accessoryRight={<NavigationAction icon="circles-four" />}
      />
      <Content contentContainerStyle={styles.content}>
        <Text category="h1" marginLeft={12}>
          {"Recomend\nClass for you"}
        </Text>
        <VStack gap={4} mt={24}>
          {LESSION.map((item, index) => {
            return (
              <CardLession
                item={item}
                key={index}
                style={{
                  width: width - 8,
                  height: 220 * (height / 812),
                  marginHorizontal: 0,
                }}
              />
            );
          })}
        </VStack>
      </Content>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
  avatar: {
    width: 32,
    height: 32,
  },
  content: {
    paddingHorizontal: 4,
    paddingBottom: 60,
  },
});
const LESSION = [
  { title: "Build muscle", des: "4 Week", img: Images.health.task_01 },
  { title: "Build muscle", des: "4 Week", img: Images.health.task_02 },
  { title: "Build muscle", des: "4 Week", img: Images.health.task_03 },
  { title: "Build muscle", des: "4 Week", img: Images.health.task_01 },
];
