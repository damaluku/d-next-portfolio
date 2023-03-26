import React from "react";
import { Divider, Grid, Typography, Stack } from "@mui/material";
import { Box } from "@mui/system";

import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { useTheme } from "@mui/material/styles";

import Link from "next/link";

const ContactPage = () => {
  const theme = useTheme();

  type Social = {
    icon: JSX.Element;
    id: number;
    name: string;
    route: string;
  };

  const socials: Social[] = [
    {
      icon: <LinkedInIcon fontSize="large" color="primary" />,
      name: "Copy",
      route: "https://www.linkedin.com/in/damian-aluku-59b06023a",
      id: 1,
    },
    {
      icon: <GitHubIcon fontSize="large" color="primary" />,
      name: "Save",
      route: "https://github.com/damaluku",
      id: 2,
    },
  ];

  return (
    <Box
      sx={{
        Height: {
          xs: "80vh",
          sm: "100%",
        },
        flex: "1",
        padding: {
          xs: "8rem 0.5rem",
          sm: "8rem 2rem",
        },
        position: "relative",
      }}
    >
      <Typography
        variant="h2"
        component="h2"
        sx={{
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          paddingBottom: "1rem",
          width: {
            xs: "100%",
            sm: "80%",
          },
        }}
      >
        Contact Me
      </Typography>

      <Grid
        container
        rowSpacing={12}
        sx={{
          width: "100%",
          marginTop: {
            xs: "1rem",
            md: "2rem",
          },

          paddingX: {
            xs: "1rem",
            sm: "0",
          },
        }}
      >
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <Stack sx={{ flex: "1" }} spacing={4}>
              <Typography
                variant="h4"
                sx={{
                  textTransform: "capitalize",
                  a: {
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  },
                }}
              >
                Get in touch
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  a: {
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  },
                }}
              >
                Email :{" "}
                <a href="mailto:damaluku@gmail.com">damaluku@gmail.com</a>
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  a: {
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  },
                }}
              >
                Tel : <a href="tel:+2348184094047">+2348184094047</a>
              </Typography>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  a: {
                    color: theme.palette.primary.main,
                    textDecoration: "none",
                  },
                }}
              >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
                rerum unde mollitia, officia repudiandae similique quis.
              </Typography>
            </Stack>
            <Grid container sx={{ flex: "1" }} spacing={6}>
              {socials.map((item) => (
                <Grid item xs={6} key={item.id}>
                  <Link
                    href={item.route}
                    style={{ textDecoration: "none" }}
                    passHref
                    target="_blank"
                    rel="noopener"
                  >
                    {item.icon}
                  </Link>
                </Grid>
              ))}
            </Grid>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ContactPage;
