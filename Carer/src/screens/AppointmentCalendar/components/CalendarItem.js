import React, { useState } from "react";

import colors from "@utils/colors";
import FONTS from "@utils/fonts";
import { Calendar, LocaleConfig } from "react-native-calendars";
import moment from "moment";
import { ScaledSheet } from "react-native-size-matters";

const CalendarItem = () => {
  const date = moment().format();
  const [dateSelect, setDateSelect] = useState(date);
  const markedDay = {
    [dateSelect.dateString]: { selected: true, marked: true },
  };
  LocaleConfig.locales.en = {
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    monthNamesShort: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    dayNames: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  };
  LocaleConfig.defaultLocale = "en";
  return (
    <Calendar
      style={styles.calendarView}
      firstDay={1}
      startFromMonday={true}
      current={date}
      markedDates={markedDay}
      onDayPress={(dateChose) => setDateSelect(dateChose)}
      theme={{
        arrowColor: "#FFF",
        "stylesheet.calendar.header": {
          week: {
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 16,
            marginTop: 24,
            marginBottom: 14,
          },
          dayHeader: {
            color: colors.white,
            fontFamily: FONTS.HIND.Regular,
            fontWeight: "600",
            fontSize: 14,
            textAlign: "center",
          },
        },
        selectedDayBackgroundColor: colors.white,
        calendarBackground: colors.classicBlue,
        textDayFontFamily: FONTS.HIND.Regular,
        textDayFontSize: 12,
        textMonthFontFamily: FONTS.HIND.Regular,
        textMonthFontWeight: "500",
        textMonthFontSize: 18,
        textDayHeaderFontFamily: FONTS.HIND.Regular,
        textDayHeaderFontSize: 12,
        monthTextColor: colors.white,
        dayTextColor: colors.white,
        todayTextColor: colors.white,
        textDisabledColor: "#D5D5D5",
        selectedDayTextColor: colors.classicBlue,
      }}
    />
  );
};

export default CalendarItem;

const styles = ScaledSheet.create({
  calendarView: {
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    overflow: "hidden",
    paddingBottom: 20,
    marginBottom: 16,
  },
});
