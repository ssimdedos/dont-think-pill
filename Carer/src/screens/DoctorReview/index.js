import React, { memo, useCallback, useState } from "react";
import { View, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import DoctorReviewItem from "@screens/DoctorReview/components/DoctorReviewItem";
import keyExtractor from "@utils/keyExtractor";

import ButtonPrimary from "@components/ButtonPrimary";
import { getBottomSpace } from "react-native-iphone-x-helper";
import ButtonBottom from "@components/ButtonBottom";
import { useSafeAreaInsets } from "react-native-safe-area-context";

const REVIEW_DATA = [
  {
    avatarUser: require("@assets/DoctorReview/01.png"),
    nameUser: "Marion Wheeler",
    rateStar: 5,
    timeReview: "28 Jun 2020",
    descriptionReview: "Understanding Drug And Alcohol Rehabilitation",
  },
  {
    avatarUser: require("@assets/DoctorReview/02.png"),
    nameUser: "Andre Gonzalez",
    rateStar: 4,
    timeReview: "30 Jun 2020",
    descriptionReview:
      "Non Steroidal Anti Inflammatory Drugs As A Serious Risk Factor For Ulcer",
  },
  {
    avatarUser: require("@assets/DoctorReview/03.png"),
    nameUser: "Elijah Wallace",
    rateStar: 3,
    timeReview: "18 Jun 2020",
    descriptionReview: "Using Laser Treatment To Help You Quit Smoking",
  },
  {
    avatarUser: require("@assets/DoctorReview/04.png"),
    nameUser: "Lora Berry",
    rateStar: 2,
    timeReview: "12 Jun 2020",
    descriptionReview:
      "Tips For Preventing And Controlling High Blood Pressure",
  },
];

const DoctorReview = memo(() => {
  const [doctorReviewData, setDoctorReview] = useState(REVIEW_DATA);
  const { bottom } = useSafeAreaInsets();

  const onWriteReview = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }) => {
    const {
      avatarUser,
      nameUser,
      rateStar,
      timeReview,
      descriptionReview,
    } = item;

    return (
      <DoctorReviewItem
        avatarUser={avatarUser}
        nameUser={nameUser}
        rateStar={rateStar}
        timeReview={timeReview}
        descriptionReview={descriptionReview}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          styles.contentContainerStyle,
          { paddingBottom: bottom + 72 },
        ]}
        data={doctorReviewData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
      <ButtonBottom onPress={onWriteReview} title={"Write Review"} />
    </View>
  );
});
export default DoctorReview;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 24,
  },
});
