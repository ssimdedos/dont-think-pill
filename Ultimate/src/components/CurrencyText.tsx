import React from 'react';
import Text, { MyTextProps } from './Text';
import { formatDefault, formatLimit, formatSecure } from 'utils/formatNumber';
import { EFormat } from 'types/component-types';

export interface CurrencyTextProps extends MyTextProps {
  formatType?: EFormat;
}

const CurrencyText: React.FC<CurrencyTextProps> = ({
  children,
  formatType = EFormat.DEFAULT,
  ...props
}: CurrencyTextProps) => {
  const _currency = '$';

  return (
    <Text {...props}>
      {formatType === EFormat.LIMIT
        ? formatLimit(children, _currency)
        : formatType === EFormat.DEFAULT
        ? formatDefault(children, _currency)
        : formatType === EFormat.SECURE
        ? formatSecure()
        : formatDefault(children, _currency)}
    </Text>
  );
};
export default CurrencyText;
