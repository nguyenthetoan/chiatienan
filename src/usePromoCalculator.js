import { useState, useEffect } from 'react';
import { sumBy } from 'lodash-es';

export default function usePromoCalculator(total, items) {
  const [localItems, setLocalItems] = useState([]);

  useEffect(() => {
    // =if((C$2)*DIVIDE(B5,sum(B$2:B$101))=0,0,C$2*DIVIDE(B5,sum(B$2:B$101)))
    const sumItems = sumBy(items, 'amount');
    const calculated = items.map(item => ({ ...item, result: total * (item.amount / sumItems) }));

    setLocalItems(calculated);
  }, [total, items]);

  return localItems;
}
