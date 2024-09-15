import { useEffect, useState } from "react";
import { useThemeContext } from "@/app/theme/theme-context";
import { Typography } from "@mui/material";

interface INameProp {
  name: string;
}

export const Name = ({ name }: INameProp) => {
  const [nameInfo, setNameInfo] = useState<string>("");

  useEffect(() => {
    setNameInfo(nameInfo);
  }, [name, nameInfo]);

  const { theme } = useThemeContext();

  return (
    <Typography
      variant="h4"
      sx={{
        color: theme.palette.primary.main,
        fontWeight: 600,
        textAlign: "center",
        fontFamily: "Roboto",
      }}
    >
      {name}
    </Typography>
  );
};