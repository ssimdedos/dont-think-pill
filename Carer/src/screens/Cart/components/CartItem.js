import React, { memo, useState, useContext, useCallback } from "react";
import { View, Image, TouchableOpacity, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";

import FONTS from "@utils/fonts";
import SvgSub from "@svgs/Cart/SvgSub";
import SvgAdd from "@svgs/Cart/SvgAdd";
import { TotalContext } from "@screens/Cart";

const CartItem = memo((props) => {
  const { imgDrug, drugName, drugPrice } = props;
  const [count, setCount] = useState(0);
  const { total, setTotal } = useContext(TotalContext);

  const onAdd = useCallback(() => {
    setCount(count + 1);
    setTotal(total + drugPrice);
  }, [count, total, drugPrice, setTotal, setCount]);

  const onSub = useCallback(() => {
    if (count === 0) {
      return;
    }
    setTotal(total - drugPrice);
    setCount(count - 1);
  }, [count, total, drugPrice, setTotal, setCount]);

  return (
    <View style={styles.container}>
      <Image style={styles.imgDrug} source={imgDrug} />
      <Text style={styles.txtDrugName}>{drugName}</Text>
      <Text style={styles.txtDrugPrice}>${drugPrice}.00</Text>
      <View style={styles.btnView}>
        <TouchableOpacity
          onPress={onSub}
          activeOpacity={0.6}
          style={styles.btnSub}
        >
          <SvgSub />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={onAdd}
          activeOpacity={0.6}
          style={styles.btnAdd}
        >
          <SvgAdd />
        </TouchableOpacity>
        <Text style={styles.txtNumber}>{count}</Text>
      </View>
    </View>
  );
});

export default CartItem;

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingVertical: 16,
    paddingHorizontal: 16,
    height: 112,
    marginBottom: 16,
    marginHorizontal: 16,
    flexDirection: "row",
  },
  imgDrug: {
    width: 80,
    height: 80,
  },
  btmView: {
    position: "absolute",
    flexDirection: "row",
    justifyContent: "space-between",
    marginLeft: 104,
    bottom: 12,
    alignItems: "flex-end",
  },
  txtDrugPrice: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 18,
    lineHeight: 27,
    color: colors.bluePrimary,
    position: "absolute",
    left: 112,
    bottom: 12,
  },
  btnView: {
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    right: 0,
    bottom: 5,
  },
  btnSub: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },
  btnAdd: {
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
  },
  txtNumber: {
    fontFamily: FONTS.HIND.Regular,
    fontSize: 18,
    lineHeight: 27,
    color: colors.semiBlack,
    position: "absolute",
    left: 42,
    top: 7,
  },
  txtDrugName: {
    fontFamily: FONTS.HIND.Regular,
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 25,
    marginLeft: 16,
    marginTop: 3,
    color: colors.semiBlack,
    marginRight: 30,
    height: 50,
    flex: 1,
  },
});
