import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import keyExtractor from '@utils/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';

import DrugItem from '@screens/ListDrugs/components/DrugItem';
import SvgDrug from '@svgs/ListDrugs/SvgDrug';
import SvgAspirin from '@svgs/ListDrugs/SvgAspirin';
import ROUTES from '@utils/routes';

const LIST_DRUGS_DATA = [
  {
    Svg: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgAspirin />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
  {
    Svg: <SvgDrug />,
    drugName: 'Aspirin',
    concentration: '10mg/piece',
  },
];

const ListDrugs = memo(({ navigation }) => {
  const [drugData, setDrugData] = useState(LIST_DRUGS_DATA);

  const onDrugDetails = useCallback(() => {
    navigation.navigate(ROUTES.DrugDetails);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      const { Svg, drugName, concentration } = item;

      return (
        <DrugItem
          Svg={Svg}
          drugName={drugName}
          concentration={concentration}
          onPress={onDrugDetails}
        />
      );
    },
    [onDrugDetails],
  );

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={drugData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default ListDrugs;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace(),
  },
});
