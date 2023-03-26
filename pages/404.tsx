import React, { ReactElement } from "react";
import { NextPageWithLayout } from "./_app";

import Spline from "@splinetool/react-spline";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "next/link";

const NotFound: NextPageWithLayout = () => {
  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        width: "100vw",
        height: "100%",
      }}
    >
      <Typography
        variant="h2"
        sx={{
          position: "absolute",
          top: "100px",
          left: "100px",
          width: "100%",
        }}
      >
        Page Not Found
      </Typography>

      <Box sx={{ width: "100%", height: "100vh" }}>
        <Spline scene="https://prod.spline.design/ddbKq2WUSCypj1Gt/scene.splinecode" />
      </Box>

      <Link href="/">
        <Button
          sx={{
            position: "absolute",
            bottom: "100px",
            left: "100px",
          }}
        >
          Retun Home
        </Button>
      </Link>
    </Box>
  );
};

NotFound.getLayout = function getLayout(page: ReactElement) {
  return <>{page}</>;
};

export default NotFound;
