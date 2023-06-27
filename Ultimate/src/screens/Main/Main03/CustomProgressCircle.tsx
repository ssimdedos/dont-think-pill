import { HStack, Text } from "components";
import React, { useState } from "react";
import { Button, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CustomProgressCircle = () => {
  const r = 31;
  const centerX = 32;
  const centerY = 32;
  const circumference = 2 * Math.PI * r;
  const [progress, setProgress] = useState((3 / 7) * 100);

  const progressOffset = circumference - (circumference * progress) / 100;

  return (
    <>
      <View style={{ transform: [{ rotate: "-90deg" }] }}>
        <Svg width={64} height={64}>
          {/* Progress Background */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={r}
            fill="none"
            stroke="#5784E8"
            strokeWidth={2}
            strokeDashoffset={24}
          />
          {/* Progress Bar */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={r}
            strokeWidth={2}
            stroke="#FFFFFF"
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progressOffset}
          ></Circle>
        </Svg>
      </View>
      <HStack
        style={{
          position: "absolute",
          alignSelf: "center",
          top: 20,
        }}
      >
        <Text category="h5">3</Text>
        <Text category="h5" status='placeholder'>/7</Text>
      </HStack>
    </>
  );
};

export default CustomProgressCircle;
