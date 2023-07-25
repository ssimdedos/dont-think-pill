import React, { FC } from "react";
import { Text, TextStyle, StyleSheet } from "react-native";
import MaskedView from "@react-native-masked-view/masked-view";
import { LinearGradient } from "expo-linear-gradient";

interface Props {
  text: string|React.ReactNode
  textStyle?: TextStyle;
  colors?: string[];
  start?: { x: number; y: number };
  end?: { x: number; y: number };
}

export const LinearGradientText: FC<Props> = (props) => {
  const {
    text,
    textStyle = {},
    colors = ["#CFE1FD", "#FFFDE1"],
    start = { x: 1, y: 1 },
    end = { x: 0, y: 0.33 },
  } = props;

  return (
    // @ts-ignore
    <MaskedView
      maskElement={<Text style={[styles.maskText, textStyle]}>{text}</Text>}
    >
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        children={<Text style={[styles.text, textStyle]}>{text}</Text>}
      />
    </MaskedView>
  );
};

const styles = StyleSheet.create({
  maskText: {
    backgroundColor: "transparent",
  },
  text: {
    opacity: 0,
  },
});
