import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import keyExtractor from '@utils/keyExtractor';

import { getBottomSpace } from 'react-native-iphone-x-helper';
import DrugShopItem from '@screens/DrugShop/components/DrugShopItem';
import ROUTES from '@utils/routes';

const DRUG_SHOP_DATA = [
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
  {
    imgDrug: require('@assets/DrugShop/img.png'),
    drugName: 'Healer Drugs',
    drugPrice: '29.00',
  },
];

const DrugShop = memo(({ navigation }) => {
  const [drugData, setDrugData] = useState(DRUG_SHOP_DATA);

  const onDrugShopDetails = useCallback(() => {
    navigation.navigate(ROUTES.DrugShopDetails);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      const { imgDrug, drugName, drugPrice } = item;

      return (
        <DrugShopItem
          onPress={onDrugShopDetails}
          imgDrug={imgDrug}
          drugName={drugName}
          drugPrice={drugPrice}
        />
      );
    },
    [onDrugShopDetails],
  );

  return (
    <View style={styles.container}>
      <FlatList
        style={styles.flatList}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={drugData}
        numColumns={2}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default DrugShop;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
  flatList: {
    marginHorizontal: 15,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace(),
  },
});
