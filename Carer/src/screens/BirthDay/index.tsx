import React, { useState, useCallback, memo } from "react";
import { View,  Dimensions } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import SvgCake from "@svgs/BirthDay/SvgCake";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
import DatePickItem from "@screens/BirthDay/components/DatePickItem";
import { useNavigation } from "@react-navigation/native";
import Carousel from "react-native-reanimated-carousel";
import useLayout from "@hooks/useLayout";

const BirthDay = memo(() => {
  const { navigate } = useNavigation();
  const { top, bottom,width,height } = useLayout();

  const [monthIndex, setMonthIndex] = useState(6);
  const [dayIndex, setDayIndex] = useState(8);
  const [yearIndex, setYearIndex] = useState(89);

  const onBlood = useCallback(() => {
    navigate(ROUTES.Blood);
  }, []);

  let days = [];
  for (let i = 1; i <= 31; i++) {
    if (i < 10) {
      days.push("0" + i.toString());
    } else {
      days.push(i.toString());
    }
  }

  let years = [];
  for (let i = 1900; i <= 2030; i++) {
    years.push(i.toString());
  }

  let months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
  ];

  const SLIDER_HEIGHT = Dimensions.get("window").height / 1.8;

  const renderMonths = ({ item, index }) => {
    return (
      <DatePickItem
        index={index}
        id={monthIndex}
        style={styles.monthsView}
        label={item}
      />
    );
  };

  const renderDays = ({ item, index }) => {
    return (
      <DatePickItem
        index={index}
        id={dayIndex}
        style={styles.daysView}
        label={item}
      />
    );
  };

  const renderYears = ({ item, index }) => {
    return (
      <DatePickItem
        index={index}
        id={yearIndex}
        style={styles.yearsView}
        label={item}
      />
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.svgCake}>
        <SvgCake />
      </View>
      <View style={styles.pickerBox}>
        {/* <Carousel
          defaultIndex={monthIndex}
          style={styles.containerCustomStyle}
          data={months}
          width={width*0.3}
          height={57}
          snapEnabled
          renderItem={renderMonths}
          vertical={true}
          onSnapToItem={setMonthIndex}
          loop={false}
        /> */}
        {/* <Carousel
          defaultIndex={dayIndex}
          data={days}
          width={width*0.3}
          renderItem={renderDays}
          vertical={true}
        />
        <Carousel
         width={width*0.3}
          defaultIndex={yearIndex}
          style={styles.containerStyle}
          data={years}
          renderItem={renderYears}
          vertical={true}
        /> */}
      </View>
      <View style={[styles.selectView, { top: (height - top) / 2.59 ,width:width}]} />
      <View style={[styles.buttonView, { paddingBottom: bottom + 24 }]}>
        <ButtonPrimary title={"Next"} onPress={onBlood} />
      </View>
    </View>
  );
});

export default BirthDay;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 32,
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
  pickerBox: {
    flex: 1,
    flexDirection: "row",
    marginTop: 33,
  },
  txtUnSelect: {
    color: colors.brown,
    fontSize: 22,
    fontFamily: FONTS.HIND.Regular,
    letterSpacing: 1.2,
    opacity: 0.8,
    textTransform: "uppercase",
  },
  txtSelected: {
    color: colors.classicBlue,
    fontSize: 24,
    fontFamily: FONTS.HIND.Bold,
    textTransform: "uppercase",
  },
  svgCake: {
    width: 48,
    height: 48,
    marginTop: 34,
    backgroundColor: colors.frame,
    borderRadius: 16,
    justifyContent: "center",
    alignItems: "center",
  },
  monthsView: {
    alignItems: "flex-start",
  },
  daysView: {
    alignItems: "center",
  },
  yearsView: {
    alignItems: "flex-end",
  },
  selectView: {
    height: 57,
    position: "absolute",
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "rgba(75, 102, 234, 0.1)",
  },
  carouselContainer: {},
  dateItem: {
    flex: 1,
    marginBottom: 1,
    justifyContent: "center",
  },
  containerCustomStyle: {
    width: 110,
    height:'100%',
  },
  containerStyle: {
    width: 20,
  },
});
