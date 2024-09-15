import { useEffect, useState } from 'react';
import { useThemeContext } from '@/app/theme/theme-context';
import { Typography } from '@mui/material';

interface ISkillsProp {
  skills: string[];
}

export const Skills = ({skills}:ISkillsProp) => {
  const { theme } = useThemeContext();
  const [skillsInfo, setSkillsInfo] = useState<string[]>([]);

  useEffect(() => {
    setSkillsInfo(skills);
  }, [skills]);

  return (
    <Typography
      variant="body1"
      sx={{
      color: theme.palette.primary.main,
      fontWeight: 600,
      textAlign: 'center',
      fontFamily: 'Roboto',
      }}
    >
      {skills.map((skill, index) => (
      <span key={index}>{index === skills.length - 1 ? `${skill}` : `${skill} | `}</span>
      ))}
    </Typography>
  );
};