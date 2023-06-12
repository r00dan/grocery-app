'use client';

import { Divider } from "@mui/material";

import { Button, Input } from "@/components";

import style from './AddNewProductForm.module.scss';
import { useAddNewProductForm } from "./useAddNewProductForm";

export function AddNewProductForm() {
  const {
    inputValue,
    isAddButtonDisabled,
    handleChangeInputValue,
    handleAddClick,
  } = useAddNewProductForm();
  return (
    <div className={style.root}>
      <div className={style.form}>
        <Input
          aria-label='new product title'
          value={inputValue}
          placeholder="Product name"
          onChange={handleChangeInputValue}
        />
        <Button
          className={style.actionButton}
          aria-label="add a product"
          variant="outlined"
          onClick={handleAddClick}
          disabled={isAddButtonDisabled}
        >
          +
        </Button>
      </div>
      <Divider />
    </div>
  )
}
