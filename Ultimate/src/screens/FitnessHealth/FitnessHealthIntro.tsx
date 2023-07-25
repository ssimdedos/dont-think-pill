import React, { memo } from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  StyleService,
  TopNavigation,
  useStyleSheet,
} from "@ui-kitten/components";
// ----------------------------- @Types -----------------------------------
import { FitnessHealthStackParamList } from "types/navigation-types";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";
// ----------------------------- Types -----------------------------------
import { IntroButtonProps } from "types/element-types";
// ----------------------------- Components & Elements -----------------------------------
import { NavigationAction, Container } from "components";
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";


const FitnessHealthIntro = memo(() => {
  const { navigate } = useNavigation<NavigationProp<FitnessHealthStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: "main1",
      onPress: () => {
        navigate("FitnessHealth01");
      },
    },
    {
      title: "main3",
      onPress: () => {
        navigate("FitnessHealth02");
      },
    },
    {
      title: "nut2",
      onPress: () => {
        navigate("FitnessHealth04");
      },
    },
    {
      title: "nut1",
      onPress: () => {
        navigate("FitnessHealth07");
      },
    },
    {
      title: "main2",
      onPress: () => {
        navigate("FitnessHealth09");
      },
    },
    {
      title: "init3",
      onPress: () => {
        navigate("FitnessHealth10");
      },
    },
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="FitnessHealth" />
    </Container>
  );
});

export default FitnessHealthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
