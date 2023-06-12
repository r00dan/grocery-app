'use client';

import { Paper } from '@mui/material';
import classNames from 'classnames';

import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

import style from './Product.module.scss';

import { useProduct } from './useProduct';
import { Checkbox, IconButton, Input } from '@/components';
import { ProductDataType } from '@/app/types';

interface ProductProps extends ProductDataType {
  onRemoveClick(id: string): void;
};

export function Product({
  ...props
}: ProductProps) {
  const {
    productTitle,
    productCount,
    productStatus,
    isEditMode,
    handleChangeEditMode,
    handleRemoveClick,
    handleStatusChange,
    handleIncrementCount,
    handleDecrementCount,
    handleTitleChange,
  } = useProduct({ ...props });

  console.log(productStatus)
  
  return (
    <div
      className={classNames([
        style.productCard,
        productStatus && style.doneStatus,
      ])}
    >
      <Checkbox
        checked={productStatus}
        onChange={handleStatusChange}
      />
      <div className={style.productCardTitle}>
        {isEditMode ? (
          <Input
            aria-label='product title'
            value={productTitle}
            size='small'
            onChange={handleTitleChange}
          />
        ) : (
          <>
            {productTitle}
          </>
        )}
      </div>         
      <div className={style.productCardCount}>
        {isEditMode && (
          <IconButton
            aria-label='increment product count'
            onClick={handleIncrementCount}
            size='small'
          >
            <AddIcon />
          </IconButton>
        )}
        x{productCount}
        {isEditMode && (
          <IconButton
            aria-label='decrement product count'
            onClick={handleDecrementCount}
            size='small'
          >
            <RemoveIcon />
          </IconButton>
        )}
      </div>
      {!productStatus && (
        <div className={style.productCardActions}>
          <IconButton
            aria-label='edit product'
            onClick={handleChangeEditMode}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label='delete product'
            onClick={handleRemoveClick}
          >
            <DeleteIcon />
          </IconButton>
        </div>
      )}
    </div>
  )
}
