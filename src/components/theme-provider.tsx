"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";

// next-themes 래퍼: html 요소에 class(dark)를 토글한다
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
