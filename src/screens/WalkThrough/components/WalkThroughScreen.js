import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { widthScreen } from '@utils/dimensions';
import FONTS from '@utils/fonts/index';
import colors from '@utils/colors';


const WalkThroughScreen = (props) => {
  const { Svg, description, description1 } = props;
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <View style={styles.svg}>{Svg}</View>
      </View>
      <View style={styles.bottomContent}>
        <Text style={styles.txtTitle}>{description1}</Text>
        <Text style={styles.txtDescription}>{description}</Text>
      </View>
    </View>
  );
};

export default WalkThroughScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  svg: {
    alignItems: 'center',
    position: 'absolute',
    bottom: 0,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: '600',
    fontSize: 24,
    color: colors.bluePrimary,
    textAlign: 'center',
    marginTop: 24,
    lineHeight: 32,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
    textAlign: 'center',
    marginTop: 14,
  },
  content: {
    alignItems: 'center',
    height: '50%',
    width: widthScreen,
  },
  bottomContent: {
    marginTop: 52,
  },
});
