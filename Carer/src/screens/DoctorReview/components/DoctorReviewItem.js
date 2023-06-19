import React, { memo } from 'react';
import { View, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';
import StarItem from '@screens/DoctorReview/components/StarItem';

const DoctorReviewItem = memo((props) => {
  const {
    avatarUser,
    nameUser,
    rateStar,
    timeReview,
    descriptionReview,
  } = props;

  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <Image source={avatarUser} style={styles.avatarUser} />
        <View>
          <Text style={styles.txtNameUser}>{nameUser}</Text>
          <Text style={styles.txtTimeReview}>{timeReview}</Text>
        </View>
      </View>
      <Text style={styles.txtDescriptionReview}>{descriptionReview}</Text>
      <View style={styles.starItem}>
        <StarItem rateStar={rateStar} />
      </View>
    </View>
  );
});
export default DoctorReviewItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingVertical: 16,
    paddingHorizontal: 24,
    marginBottom: 24,
    marginHorizontal: 24,
  },
  infoView: {
    flexDirection: 'row',
  },
  avatarUser: {
    width: 40,
    height: 40,
    borderRadius: 20,
    overflow: 'hidden',
    marginRight: 12,
  },
  txtNameUser: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 24,
    color: colors.semiBlack,
    textTransform: 'uppercase',
  },
  txtTimeReview: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 16,
    color: colors.silverChalice,
  },
  txtDescriptionReview: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginTop: 13,
  },
  starItem: {
    position: 'absolute',
    right: 16,
    top: 19,
  },
});
