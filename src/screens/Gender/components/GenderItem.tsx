import React from "react";
import { Image, ImageSourcePropType, StyleSheet, Text, View } from "react-native";
import Animated, { interpolate, useAnimatedStyle } from "react-native-reanimated";
import { BlurView } from 'expo-blur';
import fonts from "@utils/fonts";
import colors from "@utils/colors";


interface ItemProps {
  source: ImageSourcePropType;
  title:string;
  animationValue: Animated.SharedValue<number>;
}

const GenderItem: React.FC<ItemProps> = ({ source,title, animationValue }) => {
  const maskStyle = useAnimatedStyle(() => {
      const opacity = interpolate(
          animationValue.value,
          [-1, 0, 1],
          [1, 0, 1]
      );

      return {
          opacity,
      };
  }, [animationValue]);

  return (
      <View
          style={{
              flex: 1,
              overflow: 'hidden',
              justifyContent: 'center',
              alignItems: 'center',
          }}
      >
          <Image
              source={source}
              resizeMode='contain'
              style={{width:'100%',height:'100%', flex:1}}
          />
          <Text style={styles.txtGender}>{title}</Text>
      </View>
  );
};

export default GenderItem;

const styles = StyleSheet.create({
  txtGender: {
    fontFamily: fonts.HIND.Regular,
    fontSize: 32,
    lineHeight: 48,
    color: colors.semiBlack,
    textAlign: "center",
    marginTop: 36,
  },
});