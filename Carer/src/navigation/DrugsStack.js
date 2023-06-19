import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import SvgMenu from "@svgs/SvgMenu";
import SvgNotification from "@svgs/SvgNotification";
import Drugs from "@screens/Drugs";

const Stack = createStackNavigator();

const DrugsStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.Drugs}
        component={Drugs}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={"Drugs"} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => (
            <ButtonHeader
              left={true}
              children={<SvgNotification />}
              onPress={() => {
                navigation.navigate(ROUTES.Notification);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default DrugsStack;
