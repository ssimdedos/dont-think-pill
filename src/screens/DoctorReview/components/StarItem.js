import React, { useCallback } from "react";
import { View } from "react-native";
import colors from "@utils/colors/index";
import { ScaledSheet } from "react-native-size-matters";
import SvgStar from "@svgs/SvgStar";

const StarItem = (props) => {
  const { rateStar } = props;
  const renderStars = useCallback(() => {
    let star = [];
    let starNumber = rateStar || 0;
    for (let i = 0; i <= 5; i++) {
      if (i < starNumber) {
        star.push(<SvgStar key={i} />);
      }
      if (i > starNumber) {
        star.push(<SvgStar color={colors.silverChalice} key={i} />);
      }
    }
    return star;
  }, [rateStar]);
  return <View style={styles.container}>{renderStars()}</View>;
};
export default StarItem;

const styles = ScaledSheet.create({
  container: {
    flexDirection: "row",
    marginHorizontal: 2,
  },
});
