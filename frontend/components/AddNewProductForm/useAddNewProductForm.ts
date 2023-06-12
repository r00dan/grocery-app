import { useState, ChangeEvent } from 'react';
import { useMutation } from '@tanstack/react-query';

import { createProduct } from '@/api';

export function useAddNewProductForm() {
  const [inputValue, setInputValue] = useState<string>('');
  
  const { mutate } = useMutation(createProduct, {
    onSuccess: () => {
      setInputValue('');
    },
  });

  const handleChangeInputValue = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => setInputValue(value);

  const handleAddClick = () => mutate(inputValue);

  return {
    inputValue,
    isAddButtonDisabled: !inputValue.trim().length,
    handleChangeInputValue,
    handleAddClick,
  };
}
