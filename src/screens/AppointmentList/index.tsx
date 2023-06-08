import React, { memo } from "react";
import { View, StyleSheet } from "react-native";
import AppointmentListTab from "@navigation/AppointmentListTab";
import colors from "@utils/colors";
import ROUTES from "@utils/routes";
import ButtonBottom from "@components/ButtonBottom";
import { useNavigation } from "@react-navigation/native";

const AppointmentList = memo(() => {
  const { navigate } = useNavigation();

  const onCreateAppointment = React.useCallback(() => {
    navigate(ROUTES.CreateAppointment);
  }, []);

  return (
    <View style={styles.container}>
      <AppointmentListTab upcoming={2} past={14} />
      <ButtonBottom onPress={onCreateAppointment} title={"Book Appointment"} />
    </View>
  );
});

export default AppointmentList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
});
