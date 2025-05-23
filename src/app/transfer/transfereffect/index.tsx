'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const TransferEffect = () => {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const params = new URLSearchParams(window.location.search);
      if (params.get('transferSuccess') === 'true') {
        params.delete('transferSuccess');
        const newSearch = params.toString();
        const newUrl = `${window.location.pathname}${newSearch ? `?${newSearch}` : ''}`;

        setTimeout(() => {
          router.replace(newUrl); 
        }, 0);
      }
    }
  }, []);

  return null;
};

export default TransferEffect;
