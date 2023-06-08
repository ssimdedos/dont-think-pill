import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import SvgLogo from '@svgs/Insurance/SvgLogo';

import keyExtractor from '@utils/keyExtractor';
import InsuranceItem from '@screens/Insurance/components/InsuranceItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const INSURANCE_DATA = [
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
  {
    logoHospital: <SvgLogo />,
    insurance: 'Medical Insurance',
    name: 'Julian Walker',
    enrolleeID: 'VMH9231458760',
    expDate: '16-2025',
  },
];

const Insurance = memo(() => {
  const [insuranceData, setInsuranceData] = useState(INSURANCE_DATA);

  const renderItem = useCallback(({ item }) => {
    const { logoHospital, insurance, name, enrolleeID, expDate } = item;

    const onPress = () => {};

    return (
      <InsuranceItem
        logoHospital={logoHospital}
        insurance={insurance}
        name={name}
        enrolleeID={enrolleeID}
        expDate={expDate}
        onPress={onPress}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={insuranceData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default Insurance;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace(),
  },
});
