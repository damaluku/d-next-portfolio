import React from "react";
import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import ProfileCard from "@/components/ProfileCard";

const PortfolioPage = () => {
  const theme = useTheme();

  interface MyProjects {
    id: number;
    title: string;
    route: string;
    description: string;
    image: string;
  }

  const myProjects: MyProjects[] = [
    {
      id: 1,
      title: "Project 1",
      route: "/",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "/home-bg.jpg",
    },
    {
      id: 2,
      title: "Project 2",
      route: "/",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "/home-bg.jpg",
    },
    {
      id: 3,
      title: "Project 3",
      route: "/",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "/home-bg.jpg",
    },
    {
      id: 4,
      title: "Project 4",
      route: "/",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "/home-bg.jpg",
    },
    {
      id: 5,
      title: "Project 5",
      route: "/",
      description:
        "Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica",
      image: "/home-bg.jpg",
    },
  ];

  return (
    <>
      <Box
        sx={{
          minHeight: {
            xs: "80vh",
            sm: "100%",
          },
          width: "100%",
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
          My Projects
        </Typography>

        <Typography
          sx={{
            marginTop: "2rem",
            width: {
              xs: "100%",
              sm: "80%",
            },
          }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ut,
          numquam iure obcaecati in eaque voluptates iste. Modi natus ullam,
          error doloremque id tempora quos temporibus.
        </Typography>

        <Box
          sx={{
            width: "100%",
            marginTop: "4rem",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(360px, 1fr))",
            rowGap: "2rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {myProjects.map((project) => (
            <ProfileCard key={project.id} project={project} />
          ))}
        </Box>
      </Box>
    </>
  );
};

export default PortfolioPage;
