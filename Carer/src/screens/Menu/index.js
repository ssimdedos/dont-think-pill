import React, { memo, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Platform,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import FONTS from "@utils/fonts/index";
import ROUTES from "@utils/routes";
import colors from "@utils/colors";
import SvgHoverLine from "@svgs/Menu/SvgHoverLine";
import { getStatusBarHeight } from "react-native-iphone-x-helper";
import SvgFakeScreens from "@svgs/Menu/SvgFakeScreens";
import SvgAvatar from "@svgs/Menu/SvgAvatar";

const SCREENS = [
  "Home",
  "Drugs",
  "Doctors",
  "Services",
  "Dashboard",
  "Profile",
  "News Healthly",
  "Log out",
];

const DATA_USER = {
  avatar: require("@assets/Menu/Avatar.png"),
  userName: "Oscar Barrett",
  balance: "$1,359.00",
};

const Menu = memo(({ route }) => {
  const indexTab = route.params;
  const [index, setIndex] = useState(
    route && indexTab.index ? indexTab.index : 0
  );
  const [user, setUser] = useState(DATA_USER);
  const navigation = useNavigation();

  const onPress = (key) => {
    onNavigate(key);
  };

  const onNavigate = (key) => {
    switch (key) {
      case "Home":
        navigation.navigate(ROUTES.MainPage);
        setIndex(0);
        break;
      case "Drugs":
        navigation.navigate(ROUTES.Drugs);
        setIndex(1);
        break;
      case "Doctors":
        navigation.navigate(ROUTES.Doctors);
        setIndex(2);
        break;
      case "Services":
        navigation.navigate(ROUTES.Services);
        setIndex(3);
        break;
      case "Dashboard":
        navigation.navigate(ROUTES.DashBoard);
        setIndex(4);
        break;
      case "Profile":
        navigation.navigate(ROUTES.UserProfile);
        setIndex(5);
        break;
      case "News Healthly":
        navigation.navigate(ROUTES.News);
        setIndex(6);
        break;
      case "Log out":
        navigation.navigate(ROUTES.SignIn);
        break;
    }
  };

  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      bounces={false}
      style={styles.container}
    >
      <View style={styles.avatar}>
        <SvgAvatar />
      </View>
      <Text style={styles.txtName}>{user.userName}</Text>
      <Text style={styles.txtBalance}>Balance: {user.balance}</Text>
      {SCREENS.map((item, key) => {
        return (
          <TouchableOpacity
            key={key}
            style={styles.btn}
            onPress={() => onPress(item)}
          >
            {index === key && <SvgHoverLine style={styles.svgHoverLine} />}
            <Text
              style={[
                styles.txt,
                {
                  color: index === key ? colors.classicBlue : colors.semiBlack,
                },
              ]}
            >
              {item}
            </Text>
          </TouchableOpacity>
        );
      })}
      <SvgFakeScreens style={styles.svgFakeScreens} />
    </ScrollView>
  );
});

export default Menu;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  btn: {
    height: 44,
    marginBottom: 20,
    justifyContent: "center",
    paddingLeft: 40,
  },
  txt: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: FONTS.HIND.Medium,
    textTransform: "uppercase",
  },
  txtBalance: {
    fontSize: 14,
    lineHeight: 22,
    color: colors.brown,
    fontFamily: FONTS.HIND.Regular,
    marginBottom: 44,
    marginLeft: 40,
  },
  txtName: {
    fontSize: 18,
    lineHeight: 29,
    fontWeight: "600",
    color: colors.black1,
    fontFamily: FONTS.HIND.SemiBold,
    textTransform: "uppercase",
    marginTop: 9,
    letterSpacing: 0.5,
    marginLeft: 40,
  },
  svgHoverLine: {
    position: "absolute",
    left: 0,
  },
  avatar: {
    width: 64,
    height: 64,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 64,
    backgroundColor: colors.classicBlue,
    marginLeft: 40,
    marginTop: Platform.OS === "ios" ? getStatusBarHeight() + 40 : 40,
  },
  svgFakeScreens: {
    position: "absolute",
    right: 0,
    top: Platform.OS === "ios" ? getStatusBarHeight() + 103 : 103,
  },
});
