import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { deleteProduct } from '@/api';

export function useProduct(productId: string) {
  const [count, setCount] = useState<number>(1);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const { mutate } = useMutation(deleteProduct);

  const handleIncrementCount = () => setCount(count + 1);
  const handleDecrementCount = () => (count > 1) && setCount(count - 1);
  const handleChangeCollapseStatus = () => setIsCollapsed(!isCollapsed);
  const handleDeleteClick = () => mutate(productId);

  return {
    count,
    isCollapsed,
    handleIncrementCount,
    handleDecrementCount,
    handleChangeCollapseStatus,
    handleDeleteClick,
  };
}
