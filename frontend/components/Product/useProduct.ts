import { ChangeEvent, useState } from 'react';
import { useMutation } from '@tanstack/react-query';

import { deleteProduct, updateProduct } from '@/api';
import { useDebounce } from '@/hooks/useDebounce';

export enum ProductStatuses {
  UNDONE = 'undone',
  DONE = 'done',
}

interface UseProductProps {
  id: string;
  count: number;
  title: string;
  status: ProductStatuses;
}

export function useProduct({
  id,
  count,
  title,
  status,
}: UseProductProps) {
  const [productTitle, setProductTitle] = useState<string>(title);
  const [productCount, setProductCount] = useState<number>(count);
  const [productStatus, setProductStatus] = useState<ProductStatuses>(status);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const { mutate: deleteProductMutation } = useMutation(deleteProduct);
  const { mutate: updateProductMutation } = useMutation(updateProduct);

  const handleIncrementCount = () => setProductCount(productCount + 1);
  const handleDecrementCount = () => (productCount > 1) && setProductCount(productCount - 1);
  const handleChangeEditMode = () => {
    setIsEditMode(!isEditMode);

    if (isEditMode) {
      updateProductMutation({ productId: id, body: { title: productTitle, count: productCount } });
    }
  }
  const handleStatusChange = (_event: ChangeEvent<HTMLInputElement>, checked: boolean) => {
    const status = checked ? ProductStatuses.DONE : ProductStatuses.UNDONE;
    setIsEditMode(false);
    setProductStatus(status);
    updateProductMutation({ productId: id, body: { status } });
  }
  const handleTitleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
    setProductTitle(value);
  };
  const handleDeleteClick = () => deleteProductMutation(id);

  return {
    productTitle,
    productCount,
    productStatus: productStatus === ProductStatuses.DONE ? true : false,
    isEditMode,
    handleIncrementCount,
    handleDecrementCount,
    handleChangeEditMode,
    handleDeleteClick,
    handleStatusChange,
    handleTitleChange,
  };
}
