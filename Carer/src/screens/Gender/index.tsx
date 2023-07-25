import React, { memo, useCallback } from "react";
import { Text, View, StyleSheet, ImageRequireSource } from "react-native";
import colors from "@utils/colors";
import FONTS from "@utils/fonts/index";

import ButtonPrimary from "@components/ButtonPrimary";
import { useNavigation } from "@react-navigation/native";
import ROUTES from "@utils/routes";
import GenderItem from "./components/GenderItem";
import { Images } from "@assets/index";
import Carousel from "react-native-reanimated-carousel";
import useLayout from "@hooks/useLayout";
import { parallaxLayout } from "./components/parallaxLayout";

interface GenderItemProps {
  source: ImageRequireSource;
  title: string;
}

const data: GenderItemProps[] = [
  {
    source: Images.other,
    title: "Other",
  },
  {
    source: Images.woman,
    title: "Woman",
  },
  {
    source: Images.man,
    title: "Man",
  },
];

const Gender = memo(() => {
  const { navigate } = useNavigation();
  const { bottom ,width,height} = useLayout();

  const onBirthDay = useCallback(() => {
    navigate(ROUTES.BirthDay);
  }, []);

  const renderItem = ({ item }: GenderItemProps) => {
    return <GenderItem {...item} />;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.txtIam}>I am a</Text>
        <Carousel
                loop={true}
                style={{
                    marginTop: 48,
                    width: width,
                    height: '70%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                width={width}
                data={data || []}
                renderItem={({ item, index, animationValue }) => {
                    return (
                        <GenderItem
                            key={index}
                            source={item.source}
                            title={item.title}
                            animationValue={animationValue}
                        />
                    );
                }}
                customAnimation={parallaxLayout(
                    {
                        size: width/1.9,
                        vertical: false,
                    },
                    {
                        parallaxScrollingScale: 1,
                        parallaxAdjacentItemScale: 0.7,
                        parallaxScrollingOffset: 40,
                    }
                )}
                scrollAnimationDuration={1200}
            />
      <View style={[styles.buttonView, { paddingBottom: bottom + 24 }]}>
        <ButtonPrimary title={"Next"} onPress={onBirthDay} />
      </View>
    </View>
  );
});

export default Gender;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  carouselContainer: {
    paddingTop: 100,
    backgroundColor: colors.white,
  },
  txtIam: {
    marginTop: 40,
    alignSelf: "center",
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 24,
    lineHeight: 32,
    color: colors.bluePrimary,
  },
  buttonView: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    paddingTop: 8,
    paddingHorizontal: 40,
    backgroundColor: colors.white,
  },
});
