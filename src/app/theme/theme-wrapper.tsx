'use client';

import { ThemeContextProvider } from '@/app/theme/theme-context';

const ThemeProviderWrapper = ({ children }: { children: React.ReactNode }) => {
  return <ThemeContextProvider>{children}</ThemeContextProvider>;
};

export default ThemeProviderWrapper;