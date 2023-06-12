'use client';

import { IconButton, IconButtonProps } from "@mui/material";

import { ThemeProvider } from "@/components";

export function Component(props: IconButtonProps) {
  return (
    <ThemeProvider>
      <IconButton {...props} />
    </ThemeProvider>
  )
}
