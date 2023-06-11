'use client';

import { ChangeEvent } from 'react';
import { TextField } from '@mui/material';

import { ThemeProvider } from '@/components';

interface SearchInputProps {
  value: string;
  placeholder?: string;
  onChange(event: ChangeEvent<HTMLInputElement>): void;
}

export function Input({
  value,
  placeholder,
  onChange,
}: SearchInputProps) {
  return (
    <ThemeProvider>
      <TextField
        fullWidth
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        variant="outlined"
      />
    </ThemeProvider>
  )
}
