import React, { memo } from "react";
import { View, Image } from "react-native";
// ----------------------------- UI kitten -----------------------------------
import {
  TopNavigation,
  useTheme,
  StyleService,
  useStyleSheet,
} from "@ui-kitten/components";

// ----------------------------- @Types -----------------------------------
import { IntroButtonProps } from "types/element-types";

// ----------------------------- Hook -----------------------------------
import { useLayout } from "hooks";
// ----------------------------- Navigation -----------------------------------
import { NavigationProp, useNavigation } from "@react-navigation/native";

// ----------------------------- Components -----------------------------------
import { NavigationAction, Container } from "components";
import { AuthStackParamList } from "types/navigation-types";
import IntroList from "elements/App/IntroList";
import ThemeLogo from "elements/App/ThemeLogo";

const AuthIntro = memo(() => {
  const { goBack, navigate } =
    useNavigation<NavigationProp<AuthStackParamList>>();
  const { height, width, top, bottom } = useLayout();
  const theme = useTheme();
  const styles = useStyleSheet(themedStyles);
  const data: IntroButtonProps[] = [
    {
      title: "init2",
      onPress: () => {
        navigate("Auth07");
      },
    }
  ];
  return (
    <Container style={styles.container}>
      <TopNavigation
        style={styles.topNavigation}
        accessoryLeft={<ThemeLogo />}
        accessoryRight={<NavigationAction icon="close" />}
      />
      <IntroList data={data} title="Authenticate" />
    </Container>
  );
});

export default AuthIntro;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  topNavigation: {},
});
