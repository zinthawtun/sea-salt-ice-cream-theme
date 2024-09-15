'use client';

import { useThemeContext } from '@/app/theme/theme-context';
import { Switch } from '@mui/material';
import { Brightness3, LightMode } from '@mui/icons-material';

const ThemeSwitcher = () => {
  const { theme, toggleTheme } = useThemeContext();

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <Switch onClick={toggleTheme} />
      {theme.palette.mode === "dark" ? <Brightness3 /> : <LightMode />}
    </div>
  );
};

export default ThemeSwitcher;