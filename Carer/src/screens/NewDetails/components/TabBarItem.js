import React from "react";
import { TouchableOpacity } from "react-native";
import { ScaledSheet } from "react-native-size-matters";

const TabBarItem = (props) => {
  const { Svg, onPress } = props;
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}
    >
      {Svg}
    </TouchableOpacity>
  );
};

export default TabBarItem;

const styles = ScaledSheet.create({
  container: {
    width: 70,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
  },
});
