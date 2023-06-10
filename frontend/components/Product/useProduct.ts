import { useState } from 'react';

export function useProduct() {
  const [count, setCount] = useState<number>(1);
  const [isCollapsed, setIsCollapsed] = useState<boolean>(true);

  const handleIncrementCount = () => setCount(count + 1);
  const handleDecrementCount = () => (count > 1) && setCount(count - 1);
  const handleChangeCollapseStatus = () => setIsCollapsed(!isCollapsed);

  return {
    count,
    isCollapsed,
    handleIncrementCount,
    handleDecrementCount,
    handleChangeCollapseStatus,
  };
}
