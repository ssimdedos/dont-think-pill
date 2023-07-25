import React, { memo, useCallback, useState } from 'react';
import { View, StyleSheet, Text, FlatList } from 'react-native';

import FONTS from '@utils/fonts/index';
import colors from '@utils/colors';
import DoctorItem from '@components/DoctorItem';
import keyExtractor from '@utils/keyExtractor';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const DATA_NAVIGATE = {
  location: 'New York',
};

const RESULT_DATA = [
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/02.png'),
    doctorName: 'Jeremy Porter',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/03.png'),
    doctorName: 'Cecelia Boone',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/04.png'),
    doctorName: 'Jesse Burgess',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
  {
    imgDoctor: require('@assets/ResultFindDoctor/01.png'),
    doctorName: 'Angel Manning',
    specialized: 'Cardiologist',
    rating: '5.0',
    location: 'Newyork, United States',
  },
];

const ResultFindDoctor = memo(() => {
  const [data, setData] = useState(DATA_NAVIGATE);
  const [resultData, setResultData] = useState(RESULT_DATA);

  const listHeaderComponent = useCallback(() => {
    return (
      <Text style={styles.txtFound}>
        Found <Text style={styles.txtNumberResult}> {resultData.length} </Text>
        doctors near
        <Text style={styles.txtPlace}> {data.location} </Text>
      </Text>
    );
  }, [data.location, resultData.length]);

  const renderItem = useCallback(({ item }) => {
    const { imgDoctor, doctorName, specialized, rating, location } = item;
    return (
      <DoctorItem
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        location={location}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={resultData}
        renderItem={renderItem}
        ListHeaderComponent={listHeaderComponent}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        style={styles.flatList}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default ResultFindDoctor;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
    paddingRight: 24,
  },
  txtFound: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.brown,
    marginBottom: 16,
    marginLeft: 24,
  },
  txtNumberResult: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.black1,
  },
  txtPlace: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 16,
    lineHeight: 24,
    color: colors.black1,
  },
  contentContainerStyle: {
    paddingTop: 16,
    paddingBottom: getBottomSpace(),
  },
});
