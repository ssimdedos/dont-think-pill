import Text from 'components/Text';
import React from 'react';
import {
  View,
  ViewStyle,
  StyleProp,
  ColorValue,
  TouchableOpacity,
} from 'react-native';
import {StyleService, useStyleSheet, useTheme} from '@ui-kitten/components';

interface Props {
  tabs?: string[];
  style?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  backgroundTab?: string | ColorValue;
  backgroundTabActive?: string | ColorValue;
  onChangeTab: (index: number) => void;
  tabActive: number;
  uppercase?: boolean;
  capitalize?: boolean;
}
const TabBar = ({
  tabs,
  onChangeTab,
  style,
  tabStyle,
  capitalize,
  uppercase = true,
  backgroundTab = '#2A3947',
  tabActive,
  backgroundTabActive = '#106AF3',
}: Props) => {
  const theme = useTheme();
  const _onChangeTab = React.useCallback(
    (number: number) => {
      onChangeTab(number);
    },
    [onChangeTab],
  );
  const styles = useStyleSheet(themedStyles);

  return (
    <View style={[styles.container, style, {backgroundColor: backgroundTab}]}>
      {tabs?.map((item, index) => {
        const backgroundColor = {
          backgroundColor:
            tabActive === index ? backgroundTabActive : undefined,
        };
        return (
          <TouchableOpacity
            onPress={() => _onChangeTab(index)}
            key={index}
            style={[styles.tabStyle, backgroundColor, tabStyle]}>
            <Text
              capitalize={capitalize}
              uppercase={uppercase}
              center
              category="c1"
              children={item}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};
export default TabBar;

const themedStyles = StyleService.create({
  container: {
    flexDirection: 'row',
    borderRadius: 12,
    padding: 2,
    backgroundColor: 'background-basic-color-1',
    borderWidth: 1,
    borderColor: 'background-basic-color-3',
  },
  tabStyle: {
    height: 32,
    borderRadius: 12,
    justifyContent: 'center',
    flex: 1,
    borderWidth: 0,
    marginBottom: 2,
  },
});
