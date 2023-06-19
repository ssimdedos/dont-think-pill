import React, { memo } from 'react';
// ----------------------------- UI kitten -----------------------------------
import { StyleService, useStyleSheet, Icon } from '@ui-kitten/components';
// ----------------------------- Components -----------------------------------
import { HStack } from 'components';

interface RateStarProps {
  rate: number;
  type?: 'out-line' | 'fill';
  size?: number;
  justify?:
    | 'center'
    | 'space-between'
    | 'flex-start'
    | 'flex-end'
    | 'space-around'
    | 'space-evenly'
    | undefined;
}

const RateStar = memo(({ rate, type = 'out-line', size = 32, justify }: RateStarProps) => {
  const styles = useStyleSheet(themedStyles);
  const data = React.useRef<number[]>([...new Array(5).keys()]).current;
  return (
    <HStack gap={4} justify={justify}>
      {data.map((item, i) => {
        if (i + 1 <= rate) {
          return (
            <Icon
              pack="assets"
              name={type === 'fill' ? 'star' : 'outline-star'}
              key={i}
              style={[styles.icon, { width: size, height: size }]}
            />
          );
        } else {
          return (
            <Icon
              pack="assets"
              name="half-star"
              key={i}
              style={[styles.icon, { width: size, height: size }]}
            />
          );
        }
      })}
    </HStack>
  );
});

export default RateStar;

const themedStyles = StyleService.create({
  icon: {
    width: 32,
    height: 32,
  },
});
