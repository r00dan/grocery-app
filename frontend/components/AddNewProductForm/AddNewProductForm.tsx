'use client';

import { ChangeEvent } from "react";

import { Button, Input } from "@/components";

import style from './AddNewProductForm.module.scss';

interface AddNewProductFormProps {
  value: string;
  isDisabled: boolean;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
  onAddNewProductClick(): void;
}

export function AddNewProductForm({
  value,
  isDisabled,
  onChange,
  onAddNewProductClick,
}: AddNewProductFormProps) {
  return (
    <div className={style.root}>
      <div className={style.form}>
        <Input
          aria-label='new product title'
          value={value}
          placeholder="Product name"
          onChange={onChange}
        />
        <Button
          className={style.actionButton}
          aria-label="add a product"
          variant="outlined"
          onClick={onAddNewProductClick}
          disabled={isDisabled}
        >
          +
        </Button>
      </div>
    </div>
  )
}
