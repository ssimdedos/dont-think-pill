import React, { memo, useCallback, useState } from "react";
import { View, FlatList, Platform } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import DoctorItem from "@components/DoctorItem";
import keyExtractor from "@utils/keyExtractor";

import ROUTES from "@utils/routes";
import { ConfirmDialog } from "react-native-simple-dialogs";
import FONTS from "@utils/fonts";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const LIST_DOCTORS_DATA = [
  {
    imgDoctor: require("@assets/ResultFindDoctor/01.png"),
    doctorName: "Angel Manning",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/02.png"),
    doctorName: "Jeremy Porter",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/03.png"),
    doctorName: "Cecelia Boone",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/04.png"),
    doctorName: "Jesse Burgess",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    imgDoctor: require("@assets/ResultFindDoctor/01.png"),
    doctorName: "Angel Manning",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
];

const ListAll = memo(() => {
  const { navigate } = useNavigation();
  const { top, bottom } = useSafeAreaInsets();
  const [listDoctorsData, setListDoctorsData] = useState(LIST_DOCTORS_DATA);
  const [visible, setVisible] = useState(false);

  const onTouchOutside = useCallback(() => {
    setVisible(false);
  }, []);

  const onDoctorProfile = useCallback(() => {
    navigate(ROUTES.DoctorProfile);
  }, []);

  const onCallDoctor = useCallback(() => {
    navigate(ROUTES.CallDoctor);
  }, []);

  const onDoctorMessage = useCallback(() => {
    navigate(ROUTES.DoctorMessage);
  }, []);

  const onLocation = useCallback(() => {
    navigate(ROUTES.MapsDoctors);
  }, []);

  const renderItem = useCallback(
    ({ item }) => {
      const {
        imgDoctor,
        doctorName,
        specialized,
        rating,
        location,
      } = item;
      return (
        <DoctorItem
          activeRemove={true}
          imgDoctor={imgDoctor}
          doctorName={doctorName}
          specialized={specialized}
          rating={rating}
          location={location}
          onRemove={() => setVisible(!visible)}
          onPress={onDoctorProfile}
          onCall={onCallDoctor}
          onMessage={onDoctorMessage}
          onLocation={onLocation}
        />
      );
    },
    [onDoctorProfile, onDoctorMessage, onCallDoctor, visible]
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={listDoctorsData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { top: top + 130, paddingBottom: bottom + 230 },
        ]}
      />
      <ConfirmDialog
        dialogStyle={styles.dialogStyle}
        title="Delete Doctor"
        message="Do you want delete doctor
        Jose Holland on list?"
        visible={visible}
        messageStyle={styles.messageStyle}
        onTouchOutside={onTouchOutside}
        positiveButton={{
          title: "Done",
          onPress: () => setVisible(false),
          style: styles.positiveButton,
          titleStyle: styles.txtPositiveButton,
        }}
        negativeButton={{
          title: "Cancel",
          onPress: () => setVisible(false),
          style: styles.negativeButton,
          titleStyle: styles.txtNegativeButton,
        }}
      />
    </View>
  );
});
export default ListAll;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingRight: 24,
  },
  txtTitleAlert: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 29,
    color: colors.semiBlack,
  },
  dialogStyle: {
    width: 340,
    height: 190,
    borderRadius: 16,
    overflow: "hidden",
    backgroundColor: colors.white,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 25,
    shadowColor: "rgba(0, 0, 0, 0.1)",
    shadowOpacity: 0.1,
  },
  messageStyle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    textAlign: "center",
    marginHorizontal: 50,
  },
  txtPositiveButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    color: colors.classicBlue,
    textAlign: "center",
  },
  txtNegativeButton: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    color: colors.white,
    textAlign: "center",
  },
  negativeButton: {
    backgroundColor: colors.classicBlue,
    height: 55,
    justifyContent: "center",
    alignItems: "center",
  },
  positiveButton: {
    backgroundColor: colors.white,
    height: 55,
  },
});
