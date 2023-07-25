import React from 'react';
import { View, Text, Image } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';

import FONTS from '@utils/fonts';

const CommentItem = (props) => {
  const { avatar, nameUser, timeComment, comment } = props;
  return (
    <View style={styles.container}>
      <View style={styles.infoView}>
        <View style={styles.setRow}>
          <Image source={avatar} style={styles.avatar} />
          <Text style={styles.nameUser}>{nameUser}</Text>
        </View>
        <Text style={styles.txtTimeComment}>{timeComment}</Text>
      </View>
      <Text style={styles.txtComment}>{comment}</Text>
    </View>
  );
};

export default CommentItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: 8,
    paddingHorizontal: 16,
    paddingTop: 15,
    paddingBottom: 12,
    marginBottom: 24,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  nameUser: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: '500',
    fontSize: 16,
    lineHeight: 26,
    color: colors.semiBlack,
    textTransform: 'uppercase',
    marginLeft: 12,
  },
  txtTimeComment: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
  },
  txtComment: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    marginTop: 9,
    color: colors.dimGray,
  },
  infoView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  setRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
