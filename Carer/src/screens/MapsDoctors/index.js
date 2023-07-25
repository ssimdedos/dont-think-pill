import React, { memo, useCallback, useMemo, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE, MAP_TYPES } from "react-native-maps";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgUserLocation from "@svgs/MapsDoctors/SvgUserLocation";
import { widthScreen } from "@utils/dimensions";
import keyExtractor from "@utils/keyExtractor";
import LocationView from "@screens/MapsDoctors/Components/LocationView";
import { getBottomSpace } from "react-native-iphone-x-helper";
import SvgDoctorMap from "@svgs/MapsDoctors/SvgDoctorMap";
import ROUTES from "@utils/routes";
import SvgCurrentLocation from "@svgs/MapsDoctors/SvgCurrentLocation";

export const eventLocation = [
  {
    id: 0,
    coordinate: { latitude: 37.78025, longitude: -122.434 },
  },
  {
    id: 1,
    coordinate: { latitude: 37.78925, longitude: -122.4364 },
  },
  {
    id: 2,
    coordinate: { latitude: 37.78425, longitude: -122.4314 },
  },
  {
    id: 3,
    coordinate: { latitude: 37.78489, longitude: -122.4394 },
  },
  {
    id: 4,
    coordinate: { latitude: 37.7925, longitude: -122.4304 },
  },
];

const LISTDOCTORSDATA = [
  {
    Svg: <SvgDoctorMap />,
    doctorName: "Angel Manning",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    Svg: <SvgDoctorMap />,
    doctorName: "Jeremy Porter",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    Svg: <SvgDoctorMap />,
    doctorName: "Cecelia Boone",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
  {
    Svg: <SvgDoctorMap />,
    doctorName: "Jesse Burgess",
    specialized: "Cardiologist",
    rating: "5.0",
    location: "Newyork, United States",
  },
];

const KEY_API = "AIzaSyCnjNATsrxO4oDyuocz5iF2yySw5SpK-A8";

export const userLocation = {
  latitude: 37.78825,
  longitude: -122.4324,
};
export const initialLatitudeDelta = 0.01202;
export const initialLongitudeDelta = 0.00081;
export const initialRadius = 1000;

const MapsDoctors = memo(({ navigation }) => {
  const [listDoctorsData, setListDoctorsData] = useState(LISTDOCTORSDATA);
  const [showDirection, setShowDirection] = useState(false);
  const region = useMemo(
    () => ({
      ...eventLocation[3].coordinate,
      latitudeDelta: initialLatitudeDelta,
      longitudeDelta: initialLatitudeDelta,
    }),
    []
  );
  const origin = { latitude: 37.3318456, longitude: -122.0296002 };
  const destination = { latitude: 37.771707, longitude: -122.4053769 };

  const onMapDirection = useCallback(() => {
    setShowDirection(true);
  }, []);

  const onCall = useCallback(() => {
    navigation.navigate(ROUTES.CallDoctor);
  }, [navigation]);

  const onMessage = useCallback(() => {
    navigation.navigate(ROUTES.DoctorMessage);
  }, [navigation]);

  const renderItem = useCallback(
    ({ item }) => {
      const { Svg, doctorName, specialized, rating, location } = item;
      return (
        <LocationView
          style={styles.locationView}
          Svg={Svg}
          doctorName={doctorName}
          specialized={specialized}
          rating={rating}
          location={location}
          onCall={onCall}
          onMessage={onMessage}
        />
      );
    },
    [onCall, onMessage]
  );

  return (
    <View style={styles.container}>
      <MapView
        showsUserLocation={true}
        mapType={MAP_TYPES.STANDARD}
        style={styles.mapView}
        provider={PROVIDER_GOOGLE}
        region={region}
      >
        <Marker
          coordinate={eventLocation[3].coordinate}
          tracksViewChanges={false}
        >
          <SvgUserLocation />
        </Marker>
        {/*<MapViewDirections*/}
        {/*  origin={origin}*/}
        {/*  destination={destination}*/}
        {/*  apikey={KEY_API}*/}
        {/*/>*/}
      </MapView>
      <View style={styles.linearGradient} />
      <View style={styles.btmView}>
        <FlatList
          style={styles.flatList}
          contentContainerStyle={styles.contentContainerStyle}
          data={listDoctorsData}
          renderItem={renderItem}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={keyExtractor}
        />
      </View>
      <TouchableOpacity activeOpacity={0.9} style={styles.svgLocationView}>
        <SvgCurrentLocation />
      </TouchableOpacity>
    </View>
  );
});
export default MapsDoctors;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.pageBackGround,
  },
  mapView: {
    width: "100%",
    flex: 1,
  },
  locationView: {
    marginRight: 24,
  },
  flatList: {
    marginBottom: getBottomSpace() + 24,
  },
  contentContainerStyle: {
    paddingLeft: 24,
  },
  btmView: {
    position: "absolute",
    width: widthScreen,
    bottom: 0,
  },
  linearGradient: {
    width: widthScreen,
    height: getBottomSpace() + 80,
  },
  svgLocationView: {
    width: 60,
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.classicBlue,
    borderRadius: 30,
    position: "absolute",
    right: 17,
    bottom: getBottomSpace() + 196,
  },
});
