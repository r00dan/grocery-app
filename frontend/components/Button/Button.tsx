'use client';

import { Button, ButtonProps } from '@mui/material';

import { ThemeProvider } from '@/components';

export function Component({ children, ...props }: ButtonProps) {
  return (
    <ThemeProvider>
      <Button
        {...props}
      >
        {children}
      </Button>
    </ThemeProvider>
  )
}
