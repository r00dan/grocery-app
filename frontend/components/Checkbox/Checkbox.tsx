'use client';

import { Checkbox, CheckboxProps } from '@mui/material';

import { ThemeProvider } from '@/components';

export function Component(props: CheckboxProps) {
  return (
    <ThemeProvider>
      <Checkbox
        {...props}
      />
    </ThemeProvider>
  )
}
