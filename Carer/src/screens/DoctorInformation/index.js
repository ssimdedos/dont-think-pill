import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import colors from '@utils/colors';
import InformationItem from '@screens/DoctorInformation/components/InformationItem';
import keyExtractor from '@utils/keyExtractor';


const INFORMATION_DATA = [
  {
    title: 'About',
    description: [
      'If you are a male over the age of 40 and are suffering from weakness, impotence, pain, stiffness, drooping',
    ],
  },
  {
    title: 'Address & Timing',
    description: [
      '070 Heaney Lakes Suite 380',
      '9:00 - 17:00, Monday to Friday',
    ],
  },
  {
    title: 'Phone',
    description: ['+012 345 6789', '+098 765 4321'],
  },
  {
    title: 'Certificate',
    description: ['AAMA', 'ABMS'],
  },
];

const DoctorInformation = memo(() => {
  const [doctorInformation, setDoctorInformation] = useState(INFORMATION_DATA);

  const renderItem = useCallback(({ item }) => {
    const { title, description } = item;
    return <InformationItem title={title} description={description} />;
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={doctorInformation}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        bounces={false}
      />
    </View>
  );
});

export default DoctorInformation;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingTop: 24,
  },
});
