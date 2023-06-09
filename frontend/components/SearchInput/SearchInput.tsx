'use client';
import { TextField } from '@mui/material';

import { ThemeProvider } from '@/components';
import { useSearchInput } from './useSearchInput';

import style from './SearchInput.module.scss';

interface SearchInputProps {
  placeholder?: string;
}

export function SearchInput({
  placeholder,
}: SearchInputProps) {
  const { query, handleChangeSearch } = useSearchInput();
  return (
    <ThemeProvider>
      <TextField
        fullWidth
        className={style.root}
        value={query}
        onChange={handleChangeSearch}
        placeholder={placeholder}
        variant="outlined"
      />
    </ThemeProvider>
  )
}
