import React from "react";
import { Box, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styled from "@emotion/styled";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import GitHubIcon from "@mui/icons-material/GitHub";

import Link from "next/link";

type Social = {
  icon: JSX.Element;
  id: number;
  name: string;
  route: string;
};

const SideBar = () => {
  const theme = useTheme();

  const socials: Social[] = [
    {
      icon: (
        <LinkedInIcon
          fontSize="large"
          color="primary"
          sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
        />
      ),
      name: "LinkedIn",
      route: "https://www.linkedin.com/in/damian-aluku-59b06023a",
      id: 1,
    },
    {
      icon: (
        <GitHubIcon
          fontSize="large"
          color="primary"
          sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
        />
      ),
      name: "GitHub",
      route: "https://github.com/damaluku",
      id: 2,
    },
    {
      icon: (
        <BusinessCenterIcon
          fontSize="large"
          color="primary"
          sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
        />
      ),
      name: "Portfolio",
      route: "/portfolio",
      id: 3,
    },
  ];

  return (
    <Container>
      <Box
        sx={{
          display: {
            xs: "none",
            md: "block",
          },
          position: "fixed",
          top: "25%",
          left: "2%",
        }}
      >
        <StrokeContainer>
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "6px",
              height: "100px",
              borderRadius: "9px 0px 9px 0px",
            }}
          />

          {socials.map((social) => (
            <Tooltip key={social.id} title={social.name} placement="right">
              <Link
                href={social.route}
                target={social.route != "/portfolio" ? "_blank" : ""}
                rel="noopener"
                passHref
              >
                {social.icon}
              </Link>
            </Tooltip>
          ))}

          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "6px",
              height: "100px",
              borderRadius: "9px 0px 9px 0px",
            }}
          />
        </StrokeContainer>
      </Box>
    </Container>
  );
};

export default SideBar;

const Container = styled.aside({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
});

const StrokeContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  gap: "1rem",
});
