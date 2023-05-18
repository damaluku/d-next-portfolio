import React from "react";
import { Box, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styled from "@emotion/styled";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";

import Link from "next/link";

const SideBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          display: {
            xs: "none",
            sm: "block",
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
          <Tooltip title="Linkedin" placement="right">
            <Link
              href="https://www.linkedin.com/in/damian-aluku-59b06023a"
              target="_blank"
              rel="noopener"
              passHref
            >
              <LinkedInIcon
                sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
              />
            </Link>
          </Tooltip>
          <Tooltip title="Portfolio" placement="right">
            <Link href="/portfolio" passHref>
              <BusinessCenterIcon
                sx={{ fontSize: "2rem", color: theme.palette.primary.main }}
              />
            </Link>
          </Tooltip>

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
