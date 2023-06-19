import * as React from "react";
import { Image } from "react-native";
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
// ----------------------------- Components -----------------------------------
import {
  Container,
  Content,
  HStack,
  NavigationAction,
  Text,
  VStack,
} from "components";

const FitnessHealth01 = () => {
  const { height, bottom, width, top } = useLayout();
  const styles = useStyleSheet(themedStyles);

  const Option = ({ icon, title }: { icon: string; title: string }) => {
    return (
      <HStack
        style={{ width: 144, gap: 8 }}
        mb={32}
        justify="flex-start"
        itemsCenter
      >
        <Icon pack="assets" name={icon} style={styles.icon} />
        <Text>{title}</Text>
      </HStack>
    );
  };
  return (
    <Container style={styles.container} useSafeArea={false}>
      <TopNavigation
        appearance="control"
        style={[styles.topNavigation, { top: top }]}
        accessoryLeft={<NavigationAction />}
        accessoryRight={<NavigationAction icon="circles-four" />}
      />
      <Content
        contentContainerStyle={{ flexGrow: 1, paddingBottom: bottom }}
      >
        {/* @ts-ignore */}
        <Image
          source={Images.health.fitness}
          style={{ width: width, height: width }}
        />
        <VStack
          level="2"
          mt={4}
          style={[styles.bottom, { height: height - 4 - width }]}
        >
          <Text category="h1" marginBottom={32}>
            Total The Fitness Factory Builder
          </Text>
          <HStack wrap>
            <Option icon="calendar" title="4 Week" />
            <Option icon="clock" title="10-30mins" />
            <Option icon="chart-bar" title="Beginer" />
            <Option icon="barbell" title="Equiment" />
          </HStack>
          <Text category="body" status="placeholder" marginBottom={16} numberOfLines={5}>
            A fitness app is a tool that helps you achieve your fitness goals by
            providing you with guidance, motivation
          </Text>
          <Button children={`Let's Start`} style={styles.button} />
        </VStack>
      </Content>
    </Container>
  );
};
export default FitnessHealth01;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    position: "absolute",
    zIndex: 100,
    left: 0,
    right: 0,
  },
  content: {
    marginTop: 12,
  },
  bottom: {
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingHorizontal: 24,
    paddingTop: 24,
  },
  icon: {
    width: 20,
    height: 20,
    tintColor: "text-white-color",
  },
  button: {
    marginBottom: 24,
  },
});
