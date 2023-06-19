import React, { memo, useCallback, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SvgScale from '@svgs/SvgScale';
import colors from '@utils/colors';
import ButtonsSecondary from '@components/ButtonsSecondary';
import RLSlider from '@components/RLSlider';
import ButtonPrimary from '@components/ButtonPrimary';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import ROUTES from '@utils/routes';

const SetGoal = memo(({ navigation }) => {
  const [enable, setEnable] = useState(false);
  const [unitOfMeasure, setUnitOfMeasure] = useState('kg');

  const onHeight = useCallback(() => {
    navigation.navigate(ROUTES.Height);
  }, [navigation]);

  const onLb = useCallback(() => {
    setEnable(true);
    setUnitOfMeasure('lb');
  }, []);
  const onKg = useCallback(() => {
    setEnable(false);
    setUnitOfMeasure('kg');
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.topView}>
        <View style={styles.svgScale}>
          <SvgScale width={24} height={24} color={colors.green} />
        </View>
        <ButtonsSecondary
          enable={enable}
          labelButton1={'lb'}
          labelButton2={'kg'}
          onPressButton1={onLb}
          onPressButton2={onKg}
        />
      </View>
      <RLSlider
        ratio={10}
        unitOfMeasure={unitOfMeasure}
        minValue={0}
        maxValue={2000}
        value={2000}
      />
      <ButtonPrimary
        onPress={onHeight}
        title={'Set Goal'}
        style={styles.buttonPrimary}
      />
    </View>
  );
});

export default SetGoal;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  topView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 32,
    marginRight: 40,
    marginTop: 34,
    alignItems: 'center',
  },
  svgScale: {
    height: 48,
    width: 48,
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  buttonPrimary: {
    width: 295,
    alignSelf: 'center',
    position: 'absolute',
    bottom: getBottomSpace() + 24,
  },
});
