import { useEffect, useState } from 'react';
import { useThemeContext } from '@/app/theme/theme-context';
import { Typography } from '@mui/material';

interface ITitleProp {
  title: string;
}

export const Title = ({title}:ITitleProp) => {
  const { theme } = useThemeContext();
  const [titleInfo, setTitleInfo] = useState<string>('');

  useEffect(() => {
    setTitleInfo(titleInfo);
  }, [title, titleInfo]);

  return (
    <Typography
      variant="h5"
      sx={{
        color: theme.palette.primary.main,
        fontWeight: 600,
        textAlign: 'center',
        fontFamily: 'Algerian Sans',
      }}
    >
        {title}
    </Typography>
  );
};

