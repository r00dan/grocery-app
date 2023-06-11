'use client';

import { Divider } from "@mui/material";

import { Button, Input } from "@/components";

import style from './AddNewProductForm.module.scss';
import { useAddNewProductForm } from "./useAddNewProductForm";

export function AddNewProductForm() {
  const { inputValue, handleChangeInputValue, handleAddClick } = useAddNewProductForm();
  return (
    <div className={style.root}>
      <Divider />
      <div className={style.form}>
        <Input
          value={inputValue}
          placeholder="Product name"
          onChange={handleChangeInputValue}
        />
        <Button
          className={style.actionButton}
          variant="outlined"
          onClick={handleAddClick}
        >
          Add
        </Button>
      </div>
    </div>
  )
}
