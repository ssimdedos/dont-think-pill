import * as React from 'react';
// ----------------------------- UI kitten -----------------------------------
import {StyleService, useStyleSheet, Icon, Layout} from '@ui-kitten/components';
// ----------------------------- @Types -----------------------------------
import {IOptionProfileProps} from 'types/element-types';
// ----------------------------- Components -----------------------------------
import {Text, HStack, VStack} from 'components';

const OptionProfile = ({
  title,
  desc,
  onPress,
  style,
  icon,
}: IOptionProfileProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <HStack
      style={[styles.container, style]}
      onPress={onPress}
      itemsCenter
      level="2">
      <HStack justify="flex-start">
        <Layout level="3" style={styles.layoutIcon}>
          <Icon pack="assets" name={icon} style={styles.icon} />
        </Layout>
        <VStack>
          <Text category="h5" marginBottom={8}>
            {title}
          </Text>
          <Text category="subhead" status="placeholder">
            {desc}
          </Text>
        </VStack>
      </HStack>
      <Icon pack="assets" name={'caret-right'} style={styles.caret} />
    </HStack>
  );
};

export default OptionProfile;

const themedStyles = StyleService.create({
  container: {
    borderRadius: 16,
    padding: 16,
  },
  layoutIcon: {
    width: 48,
    height: 48,
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 16,
  },
  icon: {
    tintColor: 'text-basic-color',
    width: 28,
    height: 28,
  },
  caret: {
    tintColor: 'text-placeholder-color',
    width: 28,
    height: 28,
  },
});
