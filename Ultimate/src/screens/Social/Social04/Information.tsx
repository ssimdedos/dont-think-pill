import React from 'react';
import { ImageRequireSource } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Avatar } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { Text, VStack } from 'components';
import { Icons } from 'assets/icons';

interface IInformationProps {
  avatar: ImageRequireSource;
  name: string;
  tier: number;
  mmr: string;
}

const Information = ({ avatar, name, tier, mmr }: IInformationProps) => {
  const styles = useStyleSheet(themedStyles);
  return (
    <VStack style={styles.container}>
      <VStack alignSelfCenter>
        <Avatar source={avatar} />
        <VStack style={styles.layoutRadio}>
          {/* @ts-ignore */}
          <Avatar source={Icons['radio-active']} style={styles.radio} />
        </VStack>
      </VStack>
      <Text center category="h3" marginBottom={8}>
        {name}
      </Text>
      <Text category="body" status="placeholder" center>
        Tier {tier} - {mmr}MMR
      </Text>
    </VStack>
  );
};

export default Information;

const themedStyles = StyleService.create({
  container: {
    backgroundColor: 'color-primary-default',
    paddingVertical: 24,
    paddingHorizontal: 12,
    borderRadius: 16,
    marginBottom: 28,
  },
  radio: {
    width: 18,
    height: 18,
  },
  layoutRadio: {
    borderWidth: 2,
    borderRadius: 99,
    borderColor: 'text-white-color',
    position: 'absolute',
    bottom: 0,
    right: 0,
  },
});
