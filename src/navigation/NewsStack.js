import React, { memo } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ROUTES from '@utils/routes';
import HeaderTitle from '@components/HeaderTittle';
import ButtonHeader from '@components/ButtonHeader';
import HeaderBackGround from '@components/HeaderBackGround';
import NewsTab from '@navigation/NewsTab';
import SvgBookMark from '@svgs/SvgBookMark';

const Stack = createStackNavigator();

const NewsStack = memo(() => {
  return (
    <Stack.Navigator screenOptions={{ headerTransparent: true }}>
      <Stack.Screen
        name={ROUTES.News}
        component={NewsTab}
        options={({ navigation }) => ({
          headerTitle: () => <HeaderTitle title={'News Healthy'} />,
          headerLeft: () => <ButtonHeader />,
          headerRight: () => (
            <ButtonHeader
              children={<SvgBookMark />}
              onPress={() => {
                navigation.navigate(ROUTES.NewsBookmark);
              }}
            />
          ),
          headerBackground: () => <HeaderBackGround />,
        })}
      />
    </Stack.Navigator>
  );
});

export default NewsStack;
