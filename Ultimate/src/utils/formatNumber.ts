import numeral from 'numeral';

const formatLimit = (amount: string, _currency = '$') => {
  let textResult = `${_currency}`;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format('0,0.00a');
    } else {
      textResult += numeral(parseFloat(amount)).format('0,0.00a');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatLimitBasic = (amount: string) => {
  let textResult = '';
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format('0,0a');
    } else {
      textResult +=
        parseFloat(amount) > Math.pow(10, 10)
          ? numeral(parseFloat(amount)).format('0,0a')
          : numeral(parseFloat(amount)).format('0,0');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatLimitBasicCurrency = (amount: string, _currency = '$') => {
  let textResult = `${_currency}`;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format('0,0a');
    } else {
      textResult +=
        parseFloat(amount) > Math.pow(10, 10)
          ? numeral(parseFloat(amount)).format('0,0a')
          : numeral(parseFloat(amount)).format('0,0');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatDefault = (amount: string, _currency = '$') => {
  let textResult = `${_currency}`;
  try {
    if (isNaN(parseFloat(amount))) {
      textResult += numeral(parseFloat(amount.replace(',', ''))).format('0,0.00');
    } else {
      textResult += numeral(parseFloat(amount)).format('0,0.00');
    }
  } catch (e) {
    console.log(e);
  }
  return textResult;
};

const formatSecure = () => {
  return `***** USD`;
};

export { formatLimit, formatDefault, formatSecure, formatLimitBasic, formatLimitBasicCurrency };
