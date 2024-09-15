import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

interface IBioProps {
  bio: string;
}

export const BioContent = ({ bio }: IBioProps) => {
  const [bioInfo, setBioInfo] = useState<string>("");

  useEffect(() => {
    setBioInfo(bioInfo);
  }, [bio, bioInfo]);

  return (
    <Box sx={{ width: "100%", padding: 1 }}>
      <Typography variant="h5">
        <strong>About Me</strong>
      </Typography>
      <br />
      <Typography variant="body1" gutterBottom>
        {bio}
      </Typography>
    </Box>
  );
};