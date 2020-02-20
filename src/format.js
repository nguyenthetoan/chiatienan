import accounting from 'accounting-js';

export default (value) =>
  accounting.formatMoney(value, { symbol: 'vnđ', format: '%v %s' });
