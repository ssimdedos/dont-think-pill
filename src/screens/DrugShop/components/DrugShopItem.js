import React from "react";
import { TouchableOpacity, Text, Image } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import FONTS from "@utils/fonts";

const DrugShopItem = (props) => {
  const { imgDrug, drugName, drugPrice, onPress } = props;

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.6}
      style={styles.container}
    >
      <Image style={styles.imgDrug} source={imgDrug} />
      <Text style={styles.txtDrugName}>{drugName}</Text>
      <Text style={styles.txtPrice}>${drugPrice}</Text>
    </TouchableOpacity>
  );
};

export default DrugShopItem;

const styles = ScaledSheet.create({
  container: {
    paddingVertical: 16,
    paddingHorizontal: 25,
    borderRadius: 8,
    backgroundColor: colors.white,
    alignItems: "center",
    marginRight: 15,
    marginBottom: 16,
    width: 165,
    height: 220,
  },
  imgDrug: {
    width: 115,
    height: 115,
    marginBottom: 26,
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 16,
    lineHeight: 24,
    color: colors.dimGray,
    marginBottom: 5,
  },
  txtPrice: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 24,
    color: colors.semiBlack,
    marginBottom: 5,
  },
});
