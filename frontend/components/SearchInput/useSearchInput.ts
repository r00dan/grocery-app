import { useDebounce } from '@/hooks/useDebounce';
import { useState, ChangeEvent, useCallback } from 'react';

export function useSearchInput() {
  const [query, setQuery] = useState<string>('');
  const debouncedGetData = useDebounce(() => console.log(query), 1000);

  const handleChangeSearch = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
  }

  return {
    query,
    handleChangeSearch,
  };
}
