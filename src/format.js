import accounting from 'accounting-js';

export const formatNumber = number => accounting.formatNumber(number);

export default (value) =>
  value ? accounting.formatMoney(value, { symbol: 'vnđ', format: '%v %s' }) : '0';
