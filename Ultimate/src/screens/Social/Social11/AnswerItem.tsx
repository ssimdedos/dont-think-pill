import React from 'react';
import { Text } from 'components';
import { StyleSheet, TouchableOpacity, View, ViewStyle } from 'react-native';
import { Icon, useTheme } from '@ui-kitten/components';

import { IAnswer } from './types';

interface AnswerItemProps {
  style?: ViewStyle;
  item: IAnswer;
  selectedItem?: IAnswer;
  onPress?(): void;
}

const AnswerItem: React.FC<AnswerItemProps> = ({ item, selectedItem, onPress, style }) => {
  const theme = useTheme();
  const { id, description } = item;

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[styles.container, { backgroundColor: theme['background-basic-color-2'] }, style]}>
      <Icon
        pack="assets"
        name={selectedItem?.id === id ? 'check-circle' : 'radio-normal'}
        style={styles.icon}
      />
      <View style={styles.content}>
        <Text
          category="subhead"
          status={selectedItem?.id === id ? 'basic' : 'placeholder'}
          marginLeft={12}>
          {description}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default AnswerItem;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderRadius: 16,
    marginTop: 16,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 24,
    height: 24,
  },
  box: {
    width: 24,
    height: 24,
  },
  content: {
    flex: 1,
  },
});
