import React, { Fragment, useEffect } from "react";
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

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const AboutPage = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

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
        width: "100%",
        flex: "1",
        padding: {
          xs: "8rem 1rem 3rem",
          sm: "8rem 2rem",
        },
        position: "relative",
      }}
    >
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.3 }}
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
      </motion.div>

      <Grid
        container
        rowSpacing={12}
        sx={{
          width: "100%",
          marginTop: {
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
            <Box sx={{ flex: "1", display: { xs: "none", md: "block" } }}>
              {" "}
              <motion.div
                initial={{ x: -10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: 10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
              >
                <Typography variant="h4">A bit about myself</Typography>
              </motion.div>
            </Box>
            <Box sx={{ flex: "2" }}>
              <motion.div
                initial={{ x: 10, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                exit={{ x: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
              >
                <Typography>
                  A frontend developer. I enjoy working on the internet and
                  ensuring that it remains a space for all of us to pursue our
                  quirky, individual, and creative interests. In order to
                  achieve this, I&apos;ve created a number of projects designed
                  to provide me a broad grasp of the development field as well
                  as tools to help other developers along their path. I enjoy
                  experimenting with the internet as a creative tool. This
                  portfolio is constantly evolving in an effort to learn and
                  apply web technology in novel ways.
                </Typography>
              </motion.div>
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Box>
            <motion.div
              initial={{ x: -10, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <Typography variant="h4">My tech stack</Typography>
            </motion.div>
          </Box>
        </Grid>

        {myStack.map((item) => (
          <Grid item xs={12} md={6} key={item.id}>
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              data-aos="fade-up"
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
            <Box sx={{ flex: "1" }} data-aos="fade-up">
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
