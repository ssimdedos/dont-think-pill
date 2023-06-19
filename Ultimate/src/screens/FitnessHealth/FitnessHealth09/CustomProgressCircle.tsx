import { Images } from "assets/images";
import { HStack, Text } from "components";
import React, { useState } from "react";
import { Image, View } from "react-native";
import Svg, { Circle } from "react-native-svg";

const CustomProgressCircle = () => {
  const r = 96;
  const strokeWidth = 8;
  const centerX = 100;
  const centerY = 100;
  const circumference = 2 * Math.PI * r;
  const [progress, setProgress] = useState((3 / 7) * 100);

  const progressOffset = circumference - (circumference * progress) / 100;

  return (
    <>
      <Image
        source={Images.health.runner}
        style={{
          width: 80,
          height: 80,
          position: "absolute",
          alignSelf: "center",
          zIndex: 100,
          top: 60,
        }}
      />
      <View
        style={{
          transform: [{ rotate: "-90deg" }],
          width: 200,
          height: 200,
        }}
      >
        <Svg width={200} height={200}>
          {/* Progress Background */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={r}
            fill="none"
            stroke="#2A3947"
            strokeWidth={strokeWidth}
            strokeDashoffset={24}
          />
          {/* Progress Bar */}
          <Circle
            cx={centerX}
            cy={centerY}
            r={r}
            stroke="#106AF3"
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            fill="none"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={progressOffset}
          />
        </Svg>
      </View>
    </>
  );
};

export default CustomProgressCircle;
