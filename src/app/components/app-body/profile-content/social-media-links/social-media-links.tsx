import Grid from "@mui/material/Grid2";
import { Box, IconButton, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn"; // Add this line
import { useEffect, useState } from "react";

export const SocialMediaLinks = ({github, twitter, linkedin}: {github: string, twitter: string, linkedin: string}) => {
  const [socialMedia, setSocialMedia] = useState({ github, twitter, linkedin });

  useEffect(() => {
    setSocialMedia({ github, twitter, linkedin });
  }, [github, twitter, linkedin]);

  return (
    <Box>
      <Grid
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "centre",
          alignItems: "centre",
          margin: "auto",
          padding: 0,
          width: "100%",
          flexGrow: 1,
        }}
      >
        <Stack spacing={3} direction="row" alignContent={"left"}>
            <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href={github}
            aria-label="github"
            title="GitHub"
            size="large"
            sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
            >
            <GitHubIcon fontSize="large" />
            </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href={twitter}
            aria-label="twitter"
            title="Twitter"
            size="large"
            sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <TwitterIcon fontSize="large" />
          </IconButton>
          <IconButton
            target="_blank"
            rel="noopener noreferrer"
            href={linkedin}
            aria-label="linkedin"
            title="LinkedIn"
            size="large"
            sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)" }}
          >
            <LinkedInIcon fontSize="large" />
          </IconButton>
        </Stack>
      </Grid>
    </Box>
  );
};
