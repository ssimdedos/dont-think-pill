import React, { memo } from "react";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

import Content from "@components/Content";
import Container from "@components/Container";
import ButtonPrimary from "@components/ButtonPrimary";
import TextInputHealer from "@components/TextInputHealer";

import ROUTES from "@utils/routes";
import colors from "@utils/colors";

const FullName = memo(() => {
  const { navigate } = useNavigation();

  const onGender = () => {
    navigate(ROUTES.Gender);
  };

  const [fullName, setFullName] = React.useState<string>("No13design");

  return (
    <Container
      paddingBottom={false}
      paddingTop={false}
      style={styles.container}
    >
      <Content contentContainerStyle={styles.contentContainerStyle}>
        <TextInputHealer
          value={fullName}
          placeholder={"Full Name"}
          onChangeText={setFullName}
        />
        <ButtonPrimary
          style={styles.buttonPrimacy}
          title={"Next"}
          onPress={onGender}
        />
      </Content>
    </Container>
  );
});

export default FullName;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingHorizontal: 40,
    paddingTop: 40,
  },
  buttonPrimacy: {
    marginTop: 32,
  },
});
