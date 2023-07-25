import {useTheme} from '@ui-kitten/components';
import React, {memo} from 'react';
import {TouchableOpacity} from 'react-native';
import {VStackProps} from 'types/component-types';

const VStack: React.FC<VStackProps> = memo(
  ({
    style,
    padder,
    children,
    mt,
    mb,
    pt,
    mh,
    pl,
    mv,
    ml,
    mr,
    ph,
    pv,
    pb,
    padding,
    margin,
    itemsCenter,
    wrap,
    level,
    onLongPress,
    justify = 'space-between',
    onPress,
    border,
    maxWidth,
    minWidth,
    alignSelfCenter,
    gap,
    rowGap,
    columnGap,
    borderStyle,
    overflow,
    ...props
  }) => {
    const theme = useTheme();
    const disabled = !!!onPress && !!!onLongPress;
    return (
      <>
        <TouchableOpacity
          onLongPress={onLongPress}
          disabled={disabled}
          activeOpacity={disabled ? 1 : 0.54}
          onPress={onPress}
          style={[
            {
              gap: gap,
              rowGap: rowGap,
              columnGap: columnGap,
              borderRadius: border,
              maxWidth: maxWidth,
              minWidth: minWidth,
              alignItems: itemsCenter ? 'center' : undefined,
              paddingHorizontal: padder ? 24 : ph,
              paddingBottom: pb,
              paddingLeft: pl,
              padding: padding,
              justifyContent: justify,
              marginTop: mt,
              borderStyle:borderStyle,
              alignSelf: alignSelfCenter ? 'center' : undefined,
              marginBottom: mb,
              marginLeft: ml,
              overflow:overflow,
              marginRight: mr,
              marginHorizontal: mh,
              marginVertical: mv,
              paddingTop: pt,
              flexWrap: wrap ? 'wrap' : undefined,
              margin: margin,
              paddingVertical: pv,
              backgroundColor: level
                ? theme[`background-basic-color-${level}`]
                : 'transparent',
            },
            style,
          ]}
          {...props}>
          {children}
        </TouchableOpacity>
      </>
    );
  },
);

export default VStack;
