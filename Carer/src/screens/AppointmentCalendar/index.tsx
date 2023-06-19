import React, { memo, useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import { useSafeAreaInsets } from "react-native-safe-area-context";

import colors from "@utils/colors";
import AppointmentItem from "@screens/AppointmentCalendar/components/AppointmentItem";
import keyExtractor from "@utils/keyExtractor";

import CalendarItem from "@screens/AppointmentCalendar/components/CalendarItem";

const APPOINTMENT_DATA = [
  {
    imgDoctor: require("@assets/AppointmentCalendar/01.png"),
    time: "11:00AM - 01:25PM",
    title: "Periodic health checks",
    color: "#0084F4",
  },
  {
    imgDoctor: require("@assets/AppointmentCalendar/02.png"),
    time: "11:00AM - 01:25PM",
    title: "Dentist checks",
    color: "#00C48C",
  },
  {
    imgDoctor: require("@assets/AppointmentCalendar/03.png"),
    time: "11:00AM - 01:25PM",
    title: "Blood Test day",
    color: "#F23A56",
  },
  {
    imgDoctor: require("@assets/AppointmentCalendar/04.png"),
    time: "11:00AM - 01:25PM",
    title: "Fix medical time",
    color: "#FFCF5C",
  },
  {
    imgDoctor: require("@assets/AppointmentCalendar/01.png"),
    time: "11:00AM - 01:25PM",
    title: "Periodic health checks",
    color: "#0084F4",
  },
  {
    imgDoctor: require("@assets/AppointmentCalendar/02.png"),
    time: "11:00AM - 01:25PM",
    title: "Dentist checks",
    color: "#00C48C",
  },
];

const AppointmentCalendar = memo(() => {
  const { bottom } = useSafeAreaInsets();

  const [appointmentData, setAppointmentData] = useState(APPOINTMENT_DATA);

  const renderItem = useCallback(({ item }) => {
    const { imgDoctor, time, title, color } = item;
    return (
      <AppointmentItem
        style={styles.appointmentItem}
        imgDoctor={imgDoctor}
        time={time}
        title={title}
        color={color}
      />
    );
  }, []);

  const listHeaderComponent = useCallback(() => {
    return <CalendarItem />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        bounces={false}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={{ paddingBottom: bottom }}
        data={appointmentData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default AppointmentCalendar;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  appointmentItem: {
    marginHorizontal: 24,
  },
});
