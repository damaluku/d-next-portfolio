import React, { useState } from "react";
import { Typography, Box, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import styled from "@emotion/styled";

import LinkedInIcon from "@mui/icons-material/LinkedIn";

const SideBar = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box
        sx={{
          display: { xs: "none", sm: "block" },
        }}
      >
        <StrokeContainer>
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "10px",
              height: "100px",
              borderRadius: "9px 0px 9px 0px",
            }}
          />
          <LinkedInIcon sx={{ fontSize: "2rem" }} />
          <Box
            sx={{
              background: theme.palette.primary.main,
              width: "10px",
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
