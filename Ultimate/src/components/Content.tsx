import React from 'react';
import {ScrollView} from 'react-native';
import {useTheme} from '@ui-kitten/components';
import {ContentProps} from 'types/component-types';

const Content: React.FC<ContentProps> = ({
  style,
  contentContainerStyle,
  children,
  padder,
  level,
  ...props
}) => {
  const theme = useTheme();
  return (
    <ScrollView
      {...props}
      style={[
        padder && {paddingHorizontal: 24},
        {backgroundColor: theme[`background-basic-color-${level}`]},
        style,
      ]}
      showsHorizontalScrollIndicator={false}
      scrollEventThrottle={16}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={contentContainerStyle}>
      {children}
    </ScrollView>
  );
};

export default Content;
