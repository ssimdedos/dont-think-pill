import * as React from "react";
import {
  ImageBackground,
  ImageRequireSource,
  StyleProp,
  ViewStyle,
} from "react-native";
import { StyleService, useStyleSheet } from "@ui-kitten/components";
import { VStack, Text } from "components";
import { useLayout } from "hooks";

const CardLession = ({
  item,
  style,
}: {
  style?: StyleProp<ViewStyle>;
  item: { title: string; img: ImageRequireSource; des: string };
}) => {
  const { height, width } = useLayout();
  const styles = useStyleSheet(themedStyles);
  return (
    <ImageBackground
      style={[
        styles.image,
        {
          width: width - 32,
          height: 220 * (height / 812),
        },
        style,
      ]}
      resizeMode="cover"
      source={item.img}
    >
      <VStack style={styles.content}>
        <Text category="h4">{item.title}</Text>
        <Text category="body">{item.des}</Text>
      </VStack>
    </ImageBackground>
  );
};
export default CardLession;

const themedStyles = StyleService.create({
  image: {
    marginHorizontal: 16,
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 20,
  },
  content: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    gap: 4,
  },
});
