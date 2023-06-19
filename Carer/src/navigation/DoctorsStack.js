import React, { memo } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ROUTES from "@utils/routes";
import HeaderTitle from "@components/HeaderTittle";
import ButtonHeader from "@components/ButtonHeader";
import HeaderBackGround from "@components/HeaderBackGround";
import DoctorsTab from "@navigation/DoctorsTab";
import SvgSearch from "@svgs/SvgSearch";
import SvgMenu from "@svgs/SvgMenu";

const Stack = createStackNavigator();

const DoctorsStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.Doctors}
        component={DoctorsTab}
        options={({ navigation }) => ({
          headerTitleAlign: "center",
          headerTitle: () => <HeaderTitle title={"Doctors"} />,
          headerLeft: () => (
            <ButtonHeader
              onPress={() => navigation.openDrawer()}
              children={<SvgMenu />}
            />
          ),
          headerRight: () => <ButtonHeader children={<SvgSearch />} />,
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default DoctorsStack;
