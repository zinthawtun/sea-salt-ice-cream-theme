"use client";

import { useEffect, useState } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid2";
import { Container, Paper, useMediaQuery } from "@mui/material";

import { ProfileData, SocialMedia } from "@/app/models/profile-data";
import { useThemeContext } from "@/app/theme/theme-context";

import { ProfileAvatar } from "@/app/components/app-body/profile-content/avatar/Avatar";
import { BioContent } from "@/app/components/app-body/profile-content/bio-content/bio-content";
import { LoadProfileService } from "@/app/services/data-loading-services/load-profile-service";
import { Name } from "@/app/components/app-body/profile-content/name-title-skills/name";
import { Title } from "@/app/components/app-body/profile-content/name-title-skills/title";
import { Skills } from "@/app/components/app-body/profile-content/name-title-skills/skills";
import { SocialMediaLinks } from "@/app/components/app-body/profile-content/social-media-links/social-media-links";

export default function ProfileContent() {
  const initialSocialMedia: SocialMedia = {
    github: "",
    linkedin: "",
    twitter: "",
  };
  const initialProfileData: ProfileData = {
    name: "",
    bio: "",
    title: "",
    skills: [],
    socialMedia: initialSocialMedia,
  };
  const { theme } = useThemeContext();
  const isSmallScreen = useMediaQuery("(max-width:1160px)");
  const [profileData, setProfileData] =
    useState<ProfileData>(initialProfileData);

  const { data, loading, error } = LoadProfileService();

  useEffect(() => {
    if (loading) {
      console.log("loading...");
    } else if (error) {
      console.log("error...");
    } else if (data) {
      setProfileData(data);
    }
  }, [loading, error, data]);

  return (
    <Container maxWidth="xl">
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
            flexGrow: 1,
            backgroundColor: theme.palette.primary.main,
            alignItems: "center",
            margin: 0,
            padding: 0,
          }}
        >
          <Grid container size={isSmallScreen ? 12 : 4} alignItems={"center"}>
            <Paper
              sx={{
                display: "flex",
                flexGrow: 1,
                flexDirection: "column",
                margin: 2,
                alignItems: "center",
              }}
            >
              <ProfileAvatar />
              <Name name={profileData?.name ?? ""}></Name>
              <hr
                style={{
                  width: "50%",
                  height: "5px",
                  borderRadius: "2px",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></hr>
              <Title title={profileData?.title ?? ""}></Title>
              <hr
                style={{
                  width: "50%",
                  height: "5px",
                  borderRadius: "2px",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "20px",
                }}
              ></hr>
              <Skills skills={profileData?.skills ?? []}></Skills>
              <hr
                style={{
                  width: "50%",
                  height: "5px",
                  borderRadius: "2px",
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "4px",
                }}
              ></hr>

              <SocialMediaLinks
                github={profileData?.socialMedia?.github ?? ""}
                twitter={profileData?.socialMedia?.twitter ?? ""}
                linkedin={profileData?.socialMedia?.linkedin ?? ""}
              ></SocialMediaLinks>
              <hr
                style={{
                  margin: "auto",
                  marginTop: "20px",
                  marginBottom: "4px",
                }}
              ></hr>
            </Paper>
          </Grid>

          <Grid
            container
            size={7}
            sx={{
              display: "flex",
              flexGrow: 1,
              flexDirection: "column",
              margin: 2,
              alignItems: "center",
            }}
          >
            <BioContent bio={profileData?.bio ?? ""}></BioContent>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}