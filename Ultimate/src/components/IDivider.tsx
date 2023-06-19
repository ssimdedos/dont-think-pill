import * as React from 'react';
import {Divider, DividerProps, useTheme} from '@ui-kitten/components';
import {ViewStyle} from 'react-native';
interface IDividerProps extends DividerProps {
  marginLeft?: number;
  marginRight?: number;
  marginTop?: number;
  marginBottom?: number;
  marginHorizontal?: number;
  marginVertical?: number;
  margin?: number;
  style?: ViewStyle;
  level?: string;
}
const IDivider = ({
  margin,
  marginBottom,
  marginHorizontal,
  marginLeft,
  marginRight,
  marginTop,
  marginVertical,
  style,
  appearance,
  level = '11',
  ...rest
}: IDividerProps) => {
  const theme = useTheme();
  return (
    <Divider
      {...rest}
      style={{
        opacity: 0.2,
        backgroundColor: `${theme[`background-basic-color-${level}`]}`,
        margin: margin,
        height: 1,
        flex: 1,
        marginLeft: marginLeft,
        marginRight: marginRight,
        marginTop: marginTop,
        marginBottom: marginBottom,
        marginHorizontal: marginHorizontal,
        marginVertical: marginVertical,
        ...style,
      }}
    />
  );
};
export default IDivider;
