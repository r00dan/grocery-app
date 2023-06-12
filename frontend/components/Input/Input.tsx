'use client';

import { TextField, TextFieldProps } from '@mui/material';

import { ThemeProvider } from '@/components';

export function Input(props: TextFieldProps) {
  return (
    <ThemeProvider>
      <TextField
        fullWidth
        variant="outlined"
        {...props}
      />
    </ThemeProvider>
  )
}
