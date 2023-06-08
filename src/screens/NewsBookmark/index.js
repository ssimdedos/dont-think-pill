import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import keyExtractor from '@utils/keyExtractor';

import TrendListItem from '@components/TrendListItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const LIST_TRENDS_DATA = [
  {
    img: require('@assets/News/img1.png'),
    title: 'Using Laser Treatment To Help You Quit Smoking',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'Natural Home Remedies For Oily Skin',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'How To Remove Kidney Stones',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'Aromatherapy While Traveling',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'What Is Homeopathic Medicine',
    date: '23 Nov 2020',
  },
  {
    img: require('@assets/News/img1.png'),
    title: 'A Brief History Of Anesthetics',
    date: '23 Nov 2020',
  },
];

const NewsBookmark = memo(() => {
  const [listTrendData, setListTrendData] = useState(LIST_TRENDS_DATA);

  const renderTrendListItem = useCallback(({ item }) => {
    const { img, title, date } = item;
    return <TrendListItem img={img} title={title} date={date} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        data={listTrendData}
        renderItem={renderTrendListItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});
export default NewsBookmark;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 24,
    paddingBottom: getBottomSpace(),
  },
  flatList: {
    marginHorizontal: 16,
  },
});
