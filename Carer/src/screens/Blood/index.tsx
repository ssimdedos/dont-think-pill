import React, { memo, useCallback, useState } from "react";
import { View } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import BloodItem from "@screens/Blood/components/BloodItem";
import SvgBlood from "@svgs/Blood/SvgBlood";
import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@utils/routes";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const data = [
  {
    id: "0",
    blood: "A",
  },
  {
    id: "1",
    blood: "O",
  },
  {
    id: "2",
    blood: "B",
  },
  {
    id: "3",
    blood: "AB",
  },
  {
    id: "4",
    blood: "Other",
  },
];

const Blood = memo(() => {
  const { navigate } = useNavigation();
  const { bottom } = useSafeAreaInsets();

  const [isChoose, setChoose] = useState(1);

  const onWeight = useCallback(() => {
    navigate(ROUTES.Weight);
  }, []);

  const onChoose = useCallback((index) => {
    setChoose(index);
  }, []);

  return (
    <Container
      paddingTop={false}
      paddingBottom={false}
      style={styles.container}
    >
      <View style={styles.svgBlood}>
        <SvgBlood />
      </View>
      <View style={[styles.content, { paddingBottom: bottom + 24 }]}>
        {data.map((item, index) => {
          const { id, blood } = item;
          return (
            <BloodItem
              isChoose={isChoose}
              onChoose={onChoose}
              id={id}
              blood={blood}
              key={index}
            />
          );
        })}
      </View>
      <View style={[styles.buttonView, { paddingBottom: bottom + 24 }]}>
        <ButtonPrimary title={"Next"} onPress={onWeight} />
      </View>
    </Container>
  );
});

export default Blood;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 40,
  },
  svgBlood: {
    width: 48,
    height: 48,
    marginTop: 34,
    backgroundColor: colors.frame,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 8,
    marginLeft: 32,
  },
  buttonView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
});
