import React, { memo, useCallback, useState } from 'react';
import { View, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import keyExtractor from '@utils/keyExtractor';
import AppointmentListItem from '@components/AppointmentListItem';
import { getBottomSpace } from 'react-native-iphone-x-helper';


const UPCOMING_DATA = [
  {
    description:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor.png'),
    doctorName: 'Dr. Ann Carlson',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Checking your healthcare',
    location: '949 Satterfield Fort Suite 520',
    time: '26 Jun, 16:00 - 17:00',
  },
  {
    description:
      'Skin Cancer Prevention 5 Ways To Protect Yourself From Uv Rays',
    imgDoctor: require('@assets/AppointmentList/Doctor1.png'),
    doctorName: 'Dr. Christian Vasquez',
    specialized: 'Cardiologist',
    rating: '5.0',
    title: 'The Advantages Of\nMinimal Repair Technique',
    shortTitle: 'Checking your healthcare',
    location: '949 Satterfield Fort Suite 520',
    time: '26 Jun, 16:00 - 17:00',
  },
];

const Upcoming = memo(() => {
  const [upcomingData, setUpcomingData] = useState(UPCOMING_DATA);

  const onCancel = () => {};
  const onReschedule = () => {};

  const renderItem = useCallback(({ item }) => {
    const {
      description,
      imgDoctor,
      doctorName,
      specialized,
      rating,
      title,
      shortTitle,
      location,
      time,
      done,
      cancel,
    } = item;
    return (
      <AppointmentListItem
        description={description}
        imgDoctor={imgDoctor}
        doctorName={doctorName}
        specialized={specialized}
        rating={rating}
        title={title}
        shortTitle={shortTitle}
        location={location}
        time={time}
        done={done}
        cancel={cancel}
        onCancel={onCancel}
        onReschedule={onReschedule}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={upcomingData}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
});

export default Upcoming;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F6F7',
  },
  contentContainerStyle: {
    paddingTop: 80,
    paddingBottom: getBottomSpace(),
  },
});
