import React, { memo } from 'react';
import { TouchableOpacity } from 'react-native';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { HStack } from 'components';

const BottomBar = memo(() => {
  const styles = useStyleSheet(themedStyles);
  const [activeId, setActiveId] = React.useState(0);

  const DATA = ['house', 'user-four', 'lightning', 'user'];
  const ButtonBar = ({ icon, index }: { icon: string; index: number }) => {
    const active = index === activeId;
    return (
      <TouchableOpacity
        style={[styles.button, active && styles.buttonActive]}
        onPress={() => {
          setActiveId(index);
        }}>
        <Icon pack="assets" name={icon} style={[styles.icon, active && styles.activeIcon]} />
      </TouchableOpacity>
    );
  };
  return (
    <HStack style={styles.container}>
      {DATA.map((item, i) => {
        return <ButtonBar key={i} icon={item} index={i} />;
      })}
    </HStack>
  );
});

export default BottomBar;

const themedStyles = StyleService.create({
  container: {
    gap: 20,
    backgroundColor: 'background-basic-color-2',
    marginHorizontal: 47.5,
    borderRadius: 99,
    paddingVertical: 2,
    paddingHorizontal: 3,
  },
  button: {
    padding: 14,
    borderRadius: 99,
  },
  buttonActive: {
    backgroundColor: 'color-primary-default',
  },
  icon: {
    width: 24,
    height: 24,
    tintColor: 'text-placeholder-color',
  },
  activeIcon: {
    tintColor: 'text-white-color',
  },
});
