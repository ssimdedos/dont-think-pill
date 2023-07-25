import React, { memo, useCallback, useState } from "react";
import { View, FlatList } from "react-native";
import { ScaledSheet } from "react-native-size-matters";
import colors from "@utils/colors";
import CardItem from "@screens/Billing/components/CardItem";
import keyExtractor from "@utils/keyExtractor";
import DropInput from "@components/DropInput";
import Content from "@components/Content";
import ButtonBottom from "@components/ButtonBottom";

const CARD_DATA = [
  {
    colorLinear1: "#ECBC3A",
    colorLinear2: "#D4A73B",
    cardNumber: "1234 5678 90** ****",
    userName: "Your name",
    date: "12/2025",
  },
  {
    cardColor: colors.brown,
    cardNumber: "1234 5678 90** ****",
    userName: "Your name",
    date: "12/2025",
  },
];

const Billing = memo(() => {
  const [cardData, setCardData] = useState(CARD_DATA);

  const onPayNow = useCallback(() => {}, []);

  const renderItem = useCallback(({ item }) => {
    const {
      cardColor,
      cardNumber,
      userName,
      colorLinear1,
      colorLinear2,
      date,
    } = item;
    return (
      <CardItem
        cardColor={cardColor}
        cardNumber={cardNumber}
        userName={userName}
        colorLinear1={colorLinear1}
        colorLinear2={colorLinear2}
        date={date}
      />
    );
  }, []);

  return (
    <View style={styles.container}>
      <Content>
        <View>
          <FlatList
            style={styles.flatList}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.contentContainerStyle}
            data={cardData}
            renderItem={renderItem}
            keyExtractor={keyExtractor}
          />
        </View>
        <DropInput
          nonArrow={true}
          style={styles.dropInput}
          title={"Fullname"}
        />
        <DropInput nonArrow={true} style={styles.dropInput} title={"Address"} />
        <View style={styles.viewBtn}>
          <DropInput
            style={[styles.btnDrop, { marginRight: 16 }]}
            title={"City"}
          />
          <DropInput nonArrow={true} style={styles.btnDrop} title={"Zipcode"} />
        </View>
        <View style={styles.viewBtn}>
          <DropInput
            style={[styles.btnDrop, { marginRight: 16 }]}
            title={"State"}
          />
          <DropInput style={styles.btnDrop} title={"Country"} />
        </View>
      </Content>
      <ButtonBottom onPress={onPayNow} title={"Pay now"} />
    </View>
  );
});
export default Billing;

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  flatList: {
    marginTop: 24,
    marginBottom: 40,
  },
  contentContainerStyle: {
    paddingLeft: 24,
    paddingRight: 8,
  },
  dropInput: {
    marginBottom: 24,
    marginHorizontal: 24,
  },
  btnDrop: {
    flex: 1,
  },
  viewBtn: {
    flexDirection: "row",
    marginHorizontal: 24,
    justifyContent: "space-between",
    marginBottom: 24,
  },
});
