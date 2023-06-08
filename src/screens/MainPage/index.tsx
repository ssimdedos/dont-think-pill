import React, { memo } from "react";
import { View, Text, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";
import TopicItem from "@screens/MainPage/components/TopicItem";
import SvgNurse from "@svgs/SvgNurse";
import SvgDoctor from "@svgs/MainPage/SvgDoctor";
import SvgHospital from "@svgs/MainPage/SvgHospital";
import SvgCalendar from "@svgs/MainPage/SvgCalendar";
import SvgPoint from "@svgs/MainPage/SvgPoint";
import ServiceItem from "@screens/MainPage/components/ServiceItem";
import ROUTES from "@utils/routes";
import {
  getBottomSpace,
  getStatusBarHeight,
} from "react-native-iphone-x-helper";
import { useNavigation } from "@react-navigation/native";
import keyExtractor from "@utils/keyExtractor";

const TOPICDATA = [
  {
    color: colors.green,
    svg: <SvgNurse />,
    title: "Stay Home\nCovid-19",
  },
  {
    color: colors.orange,
    svg: <SvgNurse />,
    title: "Stay Home\nCovid-19",
  },
  {
    color: colors.classicBlue,
    svg: <SvgNurse />,
    title: "Stay Home\nCovid-19",
  },
];

const MainPage = memo(() => {
  const { navigate } = useNavigation();

  const data = [
    {
      id: 0,
      onPress: () => navigate(ROUTES.FindDoctors),
      svg: <SvgDoctor />,
      title: "Find Doctor",
      content: "128 Doctors",
    },
    {
      id: 1,
      onPress: () => navigate(ROUTES.FindHospital),
      svg: <SvgHospital />,
      title: "Find Hospital",
      content: "96 Hospital",
    },
    {
      id: 2,
      onPress: () => navigate(ROUTES.AppointmentList),
      svg: <SvgCalendar />,
      title: "Appointment",
      content: "05 doctors",
    },
    {
      id: 3,
      onPress: () => navigate(ROUTES.PricePlan),
      svg: <SvgPoint />,
      title: "Price Services",
      content: "03 Plans",
    },
  ];

  const renderItem = React.useCallback(({ item, index }) => {
    return (
      <ServiceItem
        style={{
          marginRight: 16,
          marginLeft: index % 2 === 0 ? 16 : 0,
        }}
        item={item}
      />
    );
  }, []);

  const renderTopic = React.useCallback(({ item }) => {
    return <TopicItem item={item} />;
  }, []);

  const listHeaderComponent = React.useCallback(() => {
    return (
      <>
        <Text style={styles.txtHi}>Hi! Gordon Aguilar,</Text>
        <Text style={styles.txtToday}>How about today?</Text>
        <FlatList
          data={TOPICDATA || []}
          renderItem={renderTopic}
          horizontal
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          keyExtractor={keyExtractor}
          snapToInterval={280 + 16}
          bounces={false}
          pagingEnabled={false}
          decelerationRate="fast"
          contentContainerStyle={styles.contentContainerStyle}
        />
      </>
    );
  }, []);

  return (
    <View style={styles.container}>
      <FlatList
        data={data || []}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        showsVerticalScrollIndicator={false}
        scrollEventThrottle={16}
        numColumns={2}
        ListHeaderComponent={listHeaderComponent}
        contentContainerStyle={{
          paddingTop: 24,
          paddingBottom: getBottomSpace() + 90,
        }}
      />
    </View>
  );
});
export default MainPage;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  txtHi: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 38,
    color: colors.semiBlack,
    marginLeft: 24,
  },
  txtToday: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 30,
    color: colors.brown,
    marginLeft: 24,
    marginBottom: 20,
  },
  contentContainerStyle: {
    paddingLeft: 16,
    marginBottom: 24,
  },
  contentContainerFlatList: {
    paddingBottom: 80,
  },
  header: {
    backgroundColor: colors.classicBlue,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    height: getStatusBarHeight() + 55,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 17,
    color: colors.bluePrimary,
  },
  btnClose: {
    position: "absolute",
    bottom: 11,
    left: 16,
  },
  btnOption: {
    position: "absolute",
    bottom: 11,
    right: 16,
  },
  svgCarer: {
    position: "absolute",
    bottom: 11,
  },
  flexWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    backgroundColor: "red",
    alignItems: "center",
    justifyContent: "center",
  },
});
