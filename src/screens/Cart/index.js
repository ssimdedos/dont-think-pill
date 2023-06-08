import React, { memo, createContext, useState, useCallback } from "react";
import { View, FlatList, Text } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
//import keyExtractor from "@utils/keyExtractor";
import { getBottomSpace } from "react-native-iphone-x-helper";
import FONTS from "@utils/fonts";
import { widthScreen } from "@utils/dimensions";
import ButtonPrimary from "@components/ButtonPrimary";
import ROUTES from "@utils/routes";
//import CartItem from "./components/CartItem";

const CART_DATA = [
  {
    imgDrug: require("@assets/Cart/Drug.png"),
    drugName: "Amoxicillin and Clavulanate",
    drugPrice: 29,
  },
  {
    imgDrug: require("@assets/Cart/Drug.png"),
    drugName: "Acetaminophen and Hydrocodone",
    drugPrice: 29,
  },
  {
    imgDrug: require("@assets/Cart/Drug.png"),
    drugName: "Buprenorphine and Naloxone",
    drugPrice: 29,
  },
  {
    imgDrug: require("@assets/Cart/Drug.png"),
    drugName: "Calcium carbonate",
    drugPrice: 29,
  },
  {
    imgDrug: require("@assets/Cart/Drug.png"),
    drugName: "Divalproex sodium",
    drugPrice: 29,
  },
];

export const TotalContext = createContext({
  total: 0,
  setTotal: () => {},
});

const Cart = memo(({ navigation }) => {
  const [cartData, setCartData] = useState(CART_DATA);
  const [total, setTotal] = useState(0);

  const onCheckOut = useCallback(() => {
    navigation.navigate(ROUTES.Billing);
  }, [navigation]);

  const renderItem = useCallback(({ item }) => {
    const { imgDrug, drugName, drugPrice } = item;

    return (
      <CartItem imgDrug={imgDrug} drugName={drugName} drugPrice={drugPrice} />
    );
  }, []);

  const paddingBottom = total !== 0 ? 100 : getBottomSpace();

  return (
    <TotalContext.Provider value={{ total, setTotal }}>
      <View style={styles.container}>
        {/* <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={[
            styles.contentContainerStyle,
            { paddingBottom: paddingBottom },
          ]}
          data={cartData}
          renderItem={renderItem}
          keyExtractor={keyExtractor}
        /> */}
        {total !== 0 ? (
          <View style={styles.btmView}>
            <Text style={styles.txtTotal}>
              Total:
              <Text style={styles.txtNumberTotal}>
                {"  "}${total}.00
              </Text>
            </Text>
            <ButtonPrimary
              onPress={onCheckOut}
              title={"Check Out"}
              style={styles.buttonPrimary}
            />
          </View>
        ) : null}
      </View>
    </TotalContext.Provider>
  );
});

export default Cart;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  contentContainerStyle: {
    paddingTop: 24,
  },
  btmView: {
    position: "absolute",
    height: 110,
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    flexDirection: "row",
    width: widthScreen,
    justifyContent: "space-between",
    bottom: 0,
    borderTopRightRadius: 24,
    borderTopLeftRadius: 24,
    shadowOffset: { width: 2, height: 6 },
    shadowRadius: 15,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    elevation: 5,
  },
  txtTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 16,
    lineHeight: 27,
    color: colors.brown1,
    marginTop: 28,
  },
  txtNumberTotal: {
    fontFamily: FONTS.HIND.SemiBold,
    fontWeight: "600",
    fontSize: 20,
    lineHeight: 32,
    color: colors.classicBlue,
  },
  buttonPrimary: {
    marginTop: 16,
    marginLeft: 72,
  },
});
