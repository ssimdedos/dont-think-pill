import React, { memo, useState, useCallback } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  Platform,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import SvgStar from "@svgs/AppointmentList/SvgStar";
import FONTS from "@utils/fonts";
import ButtonPrimary from "@components/ButtonPrimary";
import SvgVideo from "@svgs/SvgVideo";
import SvgMessage from "@svgs/SvgMessage";
import SvgBackArrow from "@svgs/SvgBackArrow";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgStethoscopeInactive from "@svgs/MainBottomTab/SvgStethoscopeInactive";
import SvgArrowDown from "@svgs/SvgArrowDown";
import DoctorServiceItem from "@screens/DoctorProfile/components/DoctorServiceItem";
import TopicItem from "@components/TopicItem";
import SvgDoctor from "@svgs/MainPage/SvgDoctor";
import SvgLocation from "@svgs/SvgLocation";
import ROUTES from "@utils/routes";
import { useNavigation } from "@react-navigation/native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import Container from "@components/Container";
import Content from "@components/Content";

const DOCTOR_DATA = {
  imgDoctor: require("@assets/DoctorProfile/Doctor.png"),
  doctorName: "Dr. Ann Carlson",
  specialized: "Cardiologist",
  title: "The Advantages Of Minimal Repair Technique",
  rating: "5.0",
  location: "Newyork, United States",
  doctorServices: ["Pediatrics", "Medical", "Heart", "Ophthalmic", "Dentistry"],
  reviewer: "34",
};

const DoctorProfile = memo(({}) => {
  const { navigate, goBack } = useNavigation();
  const { top } = useSafeAreaInsets();
  const [doctorData, setDoctorData] = useState(DOCTOR_DATA);

  const onBookAppointment = useCallback(() => {
    navigate(ROUTES.BookAppointment);
  }, []);

  const onVideoCall = useCallback(() => {
    navigate(ROUTES.VideoCall);
  }, []);

  const onMessage = useCallback(() => {
    navigate(ROUTES.DoctorMessage);
  }, []);

  const onDoctorInfomation = useCallback(() => {
    navigate(ROUTES.DoctorInformation);
  }, []);

  const onWorkingAddress = useCallback(() => {
    navigate(ROUTES.DoctorAddress);
  }, []);

  const onDoctorReview = useCallback(() => {
    navigate(ROUTES.DoctorReview);
  }, []);

  const renderItem = useCallback(() => {
    return doctorData.doctorServices.map((item, index) => {
      return <DoctorServiceItem key={index} title={item} />;
    });
  }, [doctorData.doctorServices]);

  return (
    <Container paddingTop={false} style={styles.container}>
      <Content bounces={false}>
        <View style={[styles.headerView, { paddingTop: top + 24 }]}>
          <View style={styles.header}>
            <View style={styles.setRow}>
              <Text style={styles.doctorName}>{doctorData.doctorName}</Text>
              <View style={styles.rateView}>
                <Text style={styles.specialized}>{doctorData.specialized}</Text>
                <SvgStar style={styles.svgStart} />
                <Text style={styles.txtRating}>{doctorData.rating}</Text>
              </View>
              <Text style={styles.txtTitle}>{doctorData.title}</Text>
            </View>
            <Image style={styles.imgDoctor} source={doctorData.imgDoctor} />
          </View>
          <View style={styles.buttonsView}>
            <ButtonPrimary
              onPress={onBookAppointment}
              style={styles.buttonPrimary}
              title={"Book Appoitnment"}
              titleStyle={styles.txtBtn}
            />
            <TouchableOpacity onPress={onVideoCall} style={styles.svgVideo}>
              <SvgVideo />
            </TouchableOpacity>
            <TouchableOpacity onPress={onMessage} style={styles.svgMessage}>
              <SvgMessage />
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            onPress={goBack}
            style={[styles.svgBackArrow, { top: top + 12, left: 8 }]}
          >
            <SvgBackArrow color={colors.semiBlack} />
          </TouchableOpacity>
        </View>
        <View style={styles.doctorServices}>
          <View style={styles.topView}>
            <View style={styles.flexDirection}>
              <SvgStethoscopeInactive height={21} color={colors.classicBlue} />
              <Text style={styles.txtDoctorServices}>
                {"  "}Doctor Services
              </Text>
            </View>
            <TouchableOpacity style={styles.svgArrowDown}>
              <SvgArrowDown />
            </TouchableOpacity>
          </View>
          <View style={styles.itemView}>{renderItem()}</View>
        </View>
        <TopicItem
          Svg={<SvgDoctor />}
          title={"Personal Infomation"}
          onPress={onDoctorInfomation}
        />
        <TopicItem
          Svg={<SvgLocation width={18} height={20} color={colors.green} />}
          title={"Working Address"}
          onPress={onWorkingAddress}
        />
        <TopicItem
          Svg={<SvgStar width={21} height={20} />}
          title={`Reviewer (${doctorData.reviewer})`}
          onPress={onDoctorReview}
        />
      </Content>
    </Container>
  );
});

export default DoctorProfile;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  headerView: {
    backgroundColor: colors.white,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
    paddingLeft: 32,
    paddingBottom: 24,
    justifyContent: "flex-end",
    paddingRight: 24,
    paddingTop: 24,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
  },
  doctorName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
  },
  specialized: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.silverChalice,
  },
  txtRating: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 18,
    marginBottom: -4,
    color: colors.orange,
  },
  svgStart: {
    marginBottom: 5,
    marginLeft: 7,
    marginRight: 5,
  },
  rateView: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 6,
    marginBottom: 11,
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 14,
    lineHeight: 20,
    color: colors.dimGray,
    marginRight: 16,
  },
  imgDoctor: {
    width: 88,
    height: 128,
    borderRadius: 16,
    overflow: "hidden",
  },
  setRow: {
    width: 215,
  },
  buttonPrimary: {
    marginRight: 24,
    height: 40,
  },
  txtBtn: {
    fontFamily: FONTS.HIND.SemiBold,
    fontSize: 14,
    textTransform: "capitalize",
    fontWeight: "600",
  },
  buttonsView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 26,
  },
  svgVideo: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.green,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 24,
  },
  svgMessage: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: colors.orange,
    justifyContent: "center",
    alignItems: "center",
  },
  svgBackArrow: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "transparent",
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
  },
  doctorServices: {
    backgroundColor: colors.white,
    borderRadius: 16,
    marginHorizontal: 16,
    paddingBottom: 3,
    marginTop: 22,
    marginBottom: 23,
  },
  txtDoctorServices: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 24,
    textTransform: "uppercase",
    color: colors.semiBlack,
  },
  svgArrowDown: {
    width: 40,
    height: 40,
    borderRadius: 16,
    backgroundColor: "transparent",
    justifyContent: "flex-start",
    alignItems: "flex-end",
  },
  topView: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 22,
    paddingLeft: 16,
    paddingRight: 20,
    height: 60,
    marginBottom: 16,
  },
  flexDirection: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  itemView: {
    flexDirection: "row",
    paddingLeft: 16,
    flexWrap: "wrap",
  },
});
