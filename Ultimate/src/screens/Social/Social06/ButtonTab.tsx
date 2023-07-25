import React from 'react';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { Text, VStack, LinearGradientText } from 'components';

interface ButtonTabProps {
  title: string;
  earn: string;
  desc: string;
}

const ButtonTab = ({
  item,
  onPress,
  active,
}: {
  item: ButtonTabProps;
  onPress?(): void;
  active: boolean;
}) => {
  const { title, earn, desc } = item;
  const styles = useStyleSheet(themedStyles);

  return (
    <VStack
      border={16}
      style={[styles.buttonTab, active && styles.buttonTabActive]}
      onPress={onPress}
      itemsCenter>
      <Text category="subhead" status="white" marginBottom={24}>
        {title}
      </Text>
      <Text category="h4" status="white" marginBottom={4}>
        {earn}
      </Text>
      <LinearGradientText text={desc} colors={['#CFE1FD', '#FFFDE1']} />
    </VStack>
  );
};

export default ButtonTab;

const themedStyles = StyleService.create({
  container: {
    flex: 1,
  },
  buttonTab: {
    flex: 1,
    borderRadius: 16,
    padding: 16,
    backgroundColor: 'background-basic-color-2',
  },
  buttonTabActive: {
    backgroundColor: 'color-primary-default',
  },
});
