"use client";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Container, Typography } from "@mui/material";

import { useThemeContext } from "@/app/theme/theme-context";
import { LazyLoadImage } from "react-lazy-load-image-component"; // Import LazyLoadImage

import Image from "@/app/data_store/Playing_Seasalt.png";

export default function OurActivity() {
  const { theme } = useThemeContext();

  return (
    <Container maxWidth="xl" sx={{ marginBottom: 20 }}>
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          marginTop: 4,
          marginLeft: 0,
          marginRight: 0,
          padding: 0,
        }}
      >
        <Grid
          size={12}
          container
          spacing={5}
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            backgroundColor: theme.palette.primary.main,
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Typography variant="h5" sx={{ marginTop: 5 }}>
            Our Activity
          </Typography>
          <p>Having Fun All The Time</p>
          <LazyLoadImage
            src={Image.src}
            width="100%"
            height={400}
            alt="Image Alt"
            style={{ padding: 1 }}
          />
        </Grid>
      </Box>
    </Container>
  );
}