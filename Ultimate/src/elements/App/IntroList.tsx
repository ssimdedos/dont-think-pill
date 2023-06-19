import React, {memo} from 'react';
import {View, FlatList, TouchableOpacity} from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet} from '@ui-kitten/components';
// ----------------------------- @Types -----------------------------------
import {IntroButtonProps, IIntroListProps} from 'types/element-types';
// ----------------------------- Components -----------------------------------
import {Text} from 'components';
// ----------------------------- Utils -----------------------------------
import {keyExtractoUtil} from 'utils';

const IntroList = memo(
  ({title, data, renderItem, ...rest}: IIntroListProps) => {
    const styles = useStyleSheet(themedStyles);

    const [activeButton, setActiveButton] = React.useState('');

    const ListHeaderComponent = () => {
      return (
        <Text center category="h2" marginBottom={32}>
          {title}
        </Text>
      );
    };
    const basicRenderItem = ({
      item,
      index,
    }: {
      item: IntroButtonProps;
      index: number;
    }) => {
      const _onPress = () => {
        item.onPress();

        setActiveButton(item.title);
      };
      const isActive = item.title === activeButton;
      return (
        <TouchableOpacity
          style={styles.button}
          onPress={_onPress}
          activeOpacity={0.7}>
          <Text status={isActive ? 'warning' : 'placeholder'} category="h4">
            {item.title}
          </Text>
          <View
            style={[styles.indicator, isActive && styles.activeIndicator]}
          />
        </TouchableOpacity>
      );
    };
    return (
      <>
        <FlatList
          data={data}
          contentContainerStyle={styles.content}
          keyExtractor={keyExtractoUtil}
          renderItem={renderItem || basicRenderItem}
          stickyHeaderIndices={[0]}
          ListHeaderComponent={ListHeaderComponent}
        />
      </>
    );
  },
);

export default IntroList;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  content: {},
  button: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingVertical: 12,
    marginBottom: 8,
    alignItems: 'center',
    marginHorizontal: 32,
  },
  indicator: {
    width: 40,
    height: 4,
    borderRadius: 12,
  },
  activeIndicator: {
    backgroundColor: 'color-warning-default',
  },
});
