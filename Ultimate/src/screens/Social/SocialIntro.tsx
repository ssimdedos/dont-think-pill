import React, { memo } from "react";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";
// ----------------------------- Components & Elements -----------------------------------
import { NavigationAction, Container } from "components";
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";
// ----------------------------- Types -----------------------------------
import { SocialStackParamList } from "types/navigation-types";
import { IntroButtonProps } from "types/element-types";

const SocialIntro = memo(() => {
  const { navigate } = useNavigation<NavigationProp<SocialStackParamList>>();
  const styles = useStyleSheet(themedStyles);

  const data: IntroButtonProps[] = [
    {
      title: "Social1",
      onPress: () => {
        navigate("Social04");
      },
    },
    {
      title: "Social2",
      onPress: () => {
        navigate("Social06");
      },
    },
    {
      title: "Nut5",
      onPress: () => {
        navigate("Social09");
      },
    },
    {
      title: "Main4",
      onPress: () => {
        navigate("Social10");
      },
    },
    {
      title: "Survey2",
      onPress: () => {
        navigate("Social11");
      },
    }
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon='close'/>}
      />
      <IntroList data={data} title="Social" />
    </Container>
  );
});

export default SocialIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
    paddingBottom: 0,
  },
  topNavigation: {
    paddingHorizontal: 24,
  },
});
