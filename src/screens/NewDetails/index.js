import React, { memo, useCallback, useRef, useState, useEffect } from "react";
import {
  View,
  Image,
  Text,
  Animated,
  TouchableOpacity,
  LogBox,
  Platform,
} from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import { widthScreen } from "@utils/dimensions";
import FONTS from "@utils/fonts";
import TabBarItem from "@screens/NewDetails/components/TabBarItem";
import SvgSpeechBubble from "@svgs/NewsDetails/SvgSpeechBubble";
import SvgLike from "@svgs/NewsDetails/SvgLike";
import SvgBookMarkTabBar from "@svgs/NewsDetails/SvgBookMarkTabBar";
import SvgLevels from "@svgs/NewsDetails/SvgLevels";
import SvgCircular from "@svgs/NewsDetails/SvgCircular";
import Header from "@components/Header";
import ROUTES from "@utils/routes";
import SvgLeftArrow from "@svgs/SvgLeftArrow";
import { getStatusBarHeight } from "react-native-iphone-x-helper";

const NEWS_DETAILS_DATA = {
  img: require("@assets/NewsDetails/img.png"),
  topic: "food",
  title: "Can It Help Your Blurred Vision Food",
  date: "July 9, 2020",
  author: "Troy Burton",
  description:
    "A healthy lifestyle can help people with various disorders and diseases better control them, gaining a better quality of life. High blood pressure is one the diseases that can be better controlled with a healthy lifestyle. \n" +
    "\n" +
    "In some people, a healthy lifestyle \n" +
    "Can prevent high blood pressure from developing. Many of us have heard over and over to “lose weight and get more exercise” because it will help a person to maintain better health. \n" +
    "\n" +
    "Maintaining a healthy weight and exercising regularly can do a lot to help prevent and control high blood pressure. High blood pressure and a high weight are closely related. Being overweight significantly raises a person’s risk of developing high blood pressure. An overweight person raises their risk by as much as six times. But, as a person starts to take the extra pounds off, their blood pressure typically goes down too. Try to eat more fruits, vegetables, whole grains, low-fat dairy products, and lean protein.  Exercise is another important factor in preventing and controlling high blood pressure (http://www.gothypertension.com/managing/highbloodpressureandexercise). Exercising makes the heart stronger and enables it to pump blood throughout the body with less effort. The easier it is for the heart to pump blood, the easier it is on the arteries. Regular physical activity helps a person reach and maintain a healthy weight. The latest federal guidelines suggest a person engage in moderate physical activity 30-60 minutes a day, 5-7 days a week. Walking is a good physical activity, especially for people just starting an exercise routine. Swimming, biking, and jogging are also great forms of exercise. In addition, federal guidelines suggest a person engage in vigorous physical activities, such as strength training, three times a week for at least 20 minutes each time.  Smoking is hard on the heart and nicotine cases the blood vessels to constrict, narrowing the blood vessels and making the heart work harder to pump blood through the body. Smoking also interferes with some blood pressure medications, making them much less effective. Quitting smoking reduces the risk for high blood pressure, will help to control existing high blood pressure, and will also reduce a person’s risk of developing lung cancer, heart disease, and having a stroke. Quitting smoking is very difficult, possibly the hardest thing a person will ever do, but doing so goes a long way towards improving a person’s health. \n" +
    "\n" +
    "Avoiding excessive sodium is suggested to help control and prevent high blood pressure, although there has been controversy in recent years about whether or not reducing sodium intake will have much of an effect on blood pressure. It may not have a big impact, but even a small reduction in sodium can have a positive effect on a person’s health. Take any prescribed high blood pressure medications as directed – don’t skip doses or quit taking it entirely. If, after being on medication for a period of time blood pressure returns to normal levels, it does not mean that person’s blood pressure has become normal. It means the medication is doing its job and is controlling the blood pressure. Blood pressure medication needs to be taking indefinitely, often for life. Avoid excessive alcohol consumption. Not only can it cause high blood pressure, it’s also bad for the liver and kidneys. Although studies have not proven whether or not caffeine affects high blood pressure, some studies have shown that people who regularly consume caffeine each day have higher blood pressure than people who don’t. On the other hand, some studies have shown that people eventually develop a tolerance to caffeine and that it then no longer affects their blood pressure. As a precautionary measure, physicians will usually advice patients with high blood pressure to limit their caffeine intake. Word count: 623\n" +
    "\n" +
    "Incoming search terms:free plr articles on high blood pressure     \t",
};

const NewsDetails = memo(({ navigation }) => {
  const [newDetailsData, setNewsDetailsData] = useState(NEWS_DETAILS_DATA);
  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    LogBox.ignoreAllLogs();
  }, []);

  const onBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const onComments = useCallback(() => {
    navigation.navigate(ROUTES.NewsComment);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Header svgGoBack={true} title={newDetailsData.title} scrollY={scrollY} />
      <Animated.ScrollView
        onScroll={Animated.event(
          [
            {
              nativeEvent: { contentOffset: { y: scrollY } },
            },
          ],
          { useNativeDriver: true }
        )}
        bounces={false}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
      >
        <Image style={styles.img} source={newDetailsData.img} />
        <View style={styles.topicView}>
          <Text style={styles.txtTopic}>{newDetailsData.topic}</Text>
        </View>
        <Text style={styles.txtTitle}>{newDetailsData.title}</Text>
        <Text style={styles.txtDate}>
          {newDetailsData.date} by
          <Text style={styles.txtAuthor}> {newDetailsData.author}</Text>
        </Text>
        <Text style={styles.txtDescription}> {newDetailsData.description}</Text>
      </Animated.ScrollView>
      <View style={styles.tabBarView}>
        <TabBarItem onPress={onComments} Svg={<SvgSpeechBubble />} />
        <TabBarItem Svg={<SvgLike />} />
        <TabBarItem Svg={<SvgBookMarkTabBar />} />
        <TabBarItem Svg={<SvgLevels />} />
        <TabBarItem Svg={<SvgCircular />} />
      </View>
      <TouchableOpacity onPress={onBack} style={styles.headerLeftIcon}>
        <SvgLeftArrow />
      </TouchableOpacity>
    </View>
  );
});

export default NewsDetails;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pageBackGround,
  },
  contentContainerStyle: {
    paddingBottom: 100,
  },
  img: {
    width: widthScreen,
    height: widthScreen / 1.8,
  },
  topicView: {
    width: 104,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.blueAccent,
    borderRadius: 40,
    marginLeft: 16,
    marginTop: -20,
  },
  txtTopic: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 18,
    lineHeight: 29,
    color: colors.white,
    textTransform: "capitalize",
  },
  txtTitle: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 32,
    lineHeight: 40,
    color: colors.semiBlack,
    marginTop: 16,
    marginHorizontal: 16,
  },
  txtDate: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 26,
    color: colors.brown,
    marginTop: 6,
    marginHorizontal: 16,
    letterSpacing: 0.3,
  },
  txtAuthor: {
    color: colors.classicBlue,
  },
  txtDescription: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.brown1,
    marginTop: 24,
    marginHorizontal: 16,
  },
  tabBarView: {
    backgroundColor: colors.white,
    borderTopColor: colors.line,
    width: widthScreen,
    height: 80,
    borderTopWidth: 1,
    bottom: 0,
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeftIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    width: 50,
    height: 50,
    top: Platform.OS === "ios" ? getStatusBarHeight() + 10 : 16,
    left: 0,
  },
});
