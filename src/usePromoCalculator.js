import { useState, useEffect } from 'react';
import { sumBy } from 'lodash-es';

export default function usePromoCalculator(total, items) {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    const sumItems = sumBy(items, 'amount');
    const calculated = items.map(item => ({ ...item, result: total * (item.amount / sumItems) }));
    setLocalItems(calculated);
  }, [total, items]);

  return localItems;
}
