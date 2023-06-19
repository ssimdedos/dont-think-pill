import React, { memo, useCallback, useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform,
} from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@utils/routes";
import WalkThroughScreen from "@screens/WalkThrough/components/WalkThroughScreen";
import SvgTriangleRight from "@svgs/WalkThought/SvgTriangleRight";
import SvgTriangleLeft from "@svgs/WalkThought/SvgTriangleLeft";
import { heightScreen } from "@utils/dimensions";
import AppIntroSlider from "react-native-app-intro-slider";
import SvgCarer from "@svgs/SvgCarer";
import SvgDoctor1 from "@svgs/WalkThrough/SvgDoctor1";
import SvgDoctor2 from "@svgs/WalkThrough/SvgDoctor2";
import SvgDoctor3 from "@svgs/WalkThrough/SvgDoctor3";
import Container from "@components/Container";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const DATA = [
  {
    id: "0",
    Svg: <SvgDoctor1 />,
    description1: "Cutting Prescription\nDoctors Costs",
    description: "5 Tips To Finding Effective Anti\nSnore Devices",
  },
  {
    id: "1",
    Svg: <SvgDoctor2 />,
    description1: "Diabetes Cause And\nPrevention",
    description: "Tips For Preventing And\nControlling High Blood Pressure",
  },
  {
    id: "2",
    Svg: <SvgDoctor3 />,
    description1: "Genital Warts How To\nAvoid Them",
    description:
      "Skin Cancer Prevention 5 Ways\nTo Protect Yourself From Uv\nRays",
  },
];

const WalkThrough = memo(() => {
  const [id, setID] = useState(0);
  const { navigate } = useNavigation();
  const { bottom, top } = useSafeAreaInsets();

  const onSignIn = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, [navigate]);

  const onDone = useCallback(() => {
    navigate(ROUTES.SignIn);
  }, [navigate]);

  const renderPrevButton = useCallback(() => {
    return (
      <View style={styles.prevButton}>
        <SvgTriangleLeft />
      </View>
    );
  }, []);

  const renderNextButton = useCallback(() => {
    return (
      <View style={styles.nextButton}>
        <SvgTriangleRight />
      </View>
    );
  }, []);

  const renderDoneButton = useCallback(() => {
    return (
      <View style={styles.doneButton}>
        <Text style={styles.txtGetStarted}>Get Started</Text>
      </View>
    );
  }, []);

  const renderItem = useCallback(({ item }) => {
    const { Svg, description, description1 } = item;
    return (
      <WalkThroughScreen
        Svg={Svg}
        description={description}
        description1={description1}
      />
    );
  }, []);

  return (
    <Container style={styles.container}>
      <AppIntroSlider
        key={id}
        data={DATA}
        renderItem={renderItem}
        showPrevButton={true}
        showNextButton={true}
        showDoneButton={true}
        renderPrevButton={renderPrevButton}
        renderNextButton={renderNextButton}
        renderDoneButton={renderDoneButton}
        onDone={onDone}
        dotStyle={styles.dotStyle}
        activeDotStyle={styles.activeDotStyle}
      />
      <View
        style={{
          position: "absolute",
          right: 0,
          left: 0,
          paddingTop: top,
          top: 0,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          paddingLeft: 32,
          paddingRight: 24,
        }}
      >
        <SvgCarer />
        <TouchableOpacity onPress={onSignIn} style={styles.skipView}>
          <Text style={styles.txtSkip}>Skip!</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
});

export default WalkThrough;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.backGround,
  },
  content: {
    flex: 1,
    backgroundColor: colors.backGround,
  },
  txtSkip: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 12,
    color: colors.classicBlue,
    textTransform: "uppercase",
  },
  skipView: {
    alignItems: "flex-end",
    justifyContent: "center",
    width: 48,
    height: 48,
  },
  dotStyle: {
    width: 8,
    height: 4,
    backgroundColor: colors.platinum,
    marginBottom: heightScreen * 0.75,
  },
  activeDotStyle: {
    backgroundColor: colors.classicBlue,
    width: 20,
    height: 4,
    marginBottom: heightScreen * 0.75,
  },
  prevButton: {
    backgroundColor: colors.classicBlue,
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    left: 18,
    bottom: 24,
  },
  nextButton: {
    backgroundColor: colors.classicBlue,
    width: 48,
    height: 48,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
    right: 18,
    bottom: 24,
  },
  doneButton: {
    backgroundColor: colors.classicBlue,
    width: 160,
    height: 48,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    right: 18,
    bottom: 24,
  },
  txtGetStarted: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 26,
    textTransform: "uppercase",
    textAlign: "center",
    color: colors.white,
  },
});
