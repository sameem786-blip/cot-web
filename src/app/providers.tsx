"use client";

import { ThemeProvider } from "next-themes";
import { useTheme } from "next-themes";


export function Providers({ children }: { children: React.ReactNode }) {
  const { theme, setTheme } = useTheme();
  setTheme("dark")
  return (
    <ThemeProvider attribute="class" enableSystem={false} defaultTheme="dark">
      {children}
    </ThemeProvider>
  );
}
