import React from 'react';
import {Layout} from '@ui-kitten/components';
import useLayout from 'hooks/useLayout';
import {ContainerProps} from 'types/component-types';

const Container: React.FC<ContainerProps> = ({
  children,
  style,
  useSafeArea = true,
  ...props
}) => {
  const {top, bottom} = useLayout();
  return (
    <Layout
      {...props}
      style={[
        {flex: 1},
        useSafeArea && {paddingTop: top, paddingBottom: bottom},
        style,
      ]}>
      {children}
    </Layout>
  );
};

export default Container;
