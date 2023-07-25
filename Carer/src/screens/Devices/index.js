import React, { memo, useState, useCallback } from 'react';
import { View, StyleSheet, FlatList } from 'react-native';
import DeviceItem from '@screens/Devices/components/DeviceItem';
import keyExtractor from '@utils/keyExtractor';

import { getStatusBarHeight } from 'react-native-iphone-x-helper';

const DEVICE_DATA = [
  {
    imgDevice: require('@assets/Devices/img.png'),
    nameDevice: 'Apple Health',
  },
  {
    imgDevice: require('@assets/Devices/img1.png'),
    nameDevice: 'Fitbit',
  },
  {
    imgDevice: require('@assets/Devices/img2.png'),
    nameDevice: 'Withings',
  },
  {
    imgDevice: require('@assets/Devices/img3.png'),
    nameDevice: 'iHealh',
  },
  {
    imgDevice: require('@assets/Devices/img4.png'),
    nameDevice: 'MiBand',
  },
  {
    imgDevice: require('@assets/Devices/img5.png'),
    nameDevice: 'Cerner',
  },
  {
    imgDevice: require('@assets/Devices/img6.png'),
    nameDevice: 'Cerner',
  },
];

const Devices = memo(() => {
  const [devicesData, setDevicesData] = useState(DEVICE_DATA);

  const renderItem = useCallback(({ item }) => {
    const { imgDevice, nameDevice } = item;
    return <DeviceItem imgDevice={imgDevice} nameDevice={nameDevice} />;
  }, []);
  return (
    <View style={styles.container}>
      <FlatList
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        data={devicesData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
      />
    </View>
  );
});

export default Devices;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingTop: getStatusBarHeight() + 55,
  },
});
