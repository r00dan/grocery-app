'use client';
import { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { lightBlue, teal, blueGrey } from '@mui/material/colors';

export interface ThemeProviderProps {
  children: ReactNode;
}

const theme = createTheme({
  palette: {
    primary: {
      main: teal[700],
    },
    // secondary: {
    //   main: green['A400'],
    // },
    background: {
      default: lightBlue[50],
    },

  },
});

export function Component({
  children,
}: ThemeProviderProps) {
  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  );
}