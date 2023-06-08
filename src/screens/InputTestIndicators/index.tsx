import React, { memo, useCallback } from "react";
import { View, StyleSheet } from "react-native";

import ButtonPrimary from "@components/ButtonPrimary";
import colors from "@utils/colors";
import InputButton from "@components/InputButton";
import Content from "@components/Content";

const InputTestIndicators = memo(() => {
  const onDate = useCallback(() => {}, []);

  const onTime = useCallback(() => {}, []);

  const onWeight = useCallback(() => {}, []);

  return (
    <View style={styles.container}>
      <Content contentContainerStyle={{ paddingHorizontal: 40 }}>
        <InputButton onPress={onDate} style={styles.input} title={"Date"} />
        <InputButton
          onPress={onTime}
          style={styles.inputButton}
          title={"Time"}
        />
        <InputButton onPress={onWeight} title={"Weight"} />
        <ButtonPrimary style={styles.buttonPrimary} title={"Update"} />
      </Content>
    </View>
  );
});

export default InputTestIndicators;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  input: {
    marginTop: 32,
    marginBottom: 24,
  },
  inputButton: {
    marginBottom: 24,
  },
  buttonPrimary: {
    marginTop: 32,
  },
});
