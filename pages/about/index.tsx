import React, { Fragment } from "react";
import {
  Divider,
  Grid,
  Typography,
  Stack,
  LinearProgress,
} from "@mui/material";
import { Box } from "@mui/system";

import List from "@mui/material/List";

import { useTheme } from "@mui/material/styles";
import ServiceList from "@/components/ServiceList";

const AboutPage = () => {
  const theme = useTheme();

  type MyStack = {
    id: number;
    title: string;
    percentage: number | undefined;
  };

  const myStack: MyStack[] = [
    { id: 1, title: "html", percentage: 98 },
    { id: 2, title: "css", percentage: 96 },
    { id: 3, title: "javaScript", percentage: 92 },
    { id: 4, title: "ReactJs", percentage: 90 },
    { id: 5, title: "NextJS", percentage: 92 },
    { id: 6, title: "VueJs", percentage: 83 },
    { id: 7, title: "NuxtJS", percentage: 85 },
    { id: 8, title: "TypeScript", percentage: 85 },
    { id: 9, title: "Styled-components", percentage: 92 },
    { id: 10, title: "Bootstrap", percentage: 83 },
    { id: 11, title: "MUI", percentage: 82 },
    { id: 12, title: "NextUI", percentage: 88 },
  ];

  type MyServices = {
    id: number;
    title: string;
    description: string;
  };

  const myServices: MyServices[] = [
    {
      id: 1,
      title: "Service 1",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse minima deleniti illo adipisci nobis modi, ab, amet facilis natus hic ea quia.",
    },
    {
      id: 2,
      title: "Service 2",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse minima deleniti illo adipisci nobis modi, ab, amet facilis natus hic ea quia.",
    },
    {
      id: 3,
      title: "Service 3",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse minima deleniti illo adipisci nobis modi, ab, amet facilis natus hic ea quia.",
    },
  ];

  return (
    <Box
      sx={{
        minHeight: {
          xs: "80vh",
          sm: "100%",
        },
        flex: "1",
        padding: {
          xs: "2rem 2rem",
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
        About Me
      </Typography>

      <Grid
        container
        spacing={12}
        sx={{
          width: "100%",
          marginTop: {
            md: "2rem",
          },
        }}
      >
        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <Box sx={{ flex: "1", display: { xs: "none", md: "block" } }}>
              <Typography variant="h4">A bit about myself</Typography>
            </Box>
            <Box sx={{ flex: "2" }}>
              <Typography>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Similique, numquam. Libero esse earum in tenetur molestiae
                fugiat ipsum expedita eum? Nam exercitationem pariatur inventore
                ipsa recusandae accusamus, similique, doloribus cupiditate modi
                alias ipsum corrupti ad sunt! Natus explicabo excepturi quo!
              </Typography>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box sx={{}}>
            <Typography variant="h4">My tech stack</Typography>
          </Box>
        </Grid>

        {myStack.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
            >
              <Typography sx={{ textTransform: "uppercase" }}>
                {item.title}
              </Typography>
              <Box sx={{ width: "100%" }}>
                <LinearProgress variant="determinate" value={item.percentage} />
              </Box>
              <Typography sx={{ textTransform: "uppercase" }}>
                {item.percentage}%
              </Typography>
            </Stack>
          </Grid>
        ))}

        <Grid item xs={12}>
          <Stack
            direction={{ xs: "column", md: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
          >
            <Box sx={{ flex: "1" }}>
              <Typography variant="h4">My Services</Typography>
            </Box>
            <Box sx={{ flex: "2" }}>
              <List
                sx={{
                  width: "100%",
                  bgcolor: "background.paper",
                }}
                aria-label="contacts"
              >
                {myServices.map((service) => (
                  <Fragment key={service.id}>
                    <ServiceList
                      id={service.id}
                      description={service.description}
                      title={service.title}
                    />
                  </Fragment>
                ))}
              </List>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutPage;
