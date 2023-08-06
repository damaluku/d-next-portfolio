import React, { useEffect } from "react";
import {
  Divider,
  Grid,
  Typography,
  Stack,
  LinearProgress,
} from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";

import { motion } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

import ResumeComp from "@/components/ResumeComp";

import { AiFillHtml5 } from "react-icons/ai";
import { FaCss3Alt } from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";
import { BiLogoVuejs } from "react-icons/bi";
import { SiNuxtdotjs } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { SiBootstrap } from "react-icons/si";
import { SiMui } from "react-icons/si";
import { GrGraphQl } from "react-icons/gr";
import { SiHasura } from "react-icons/si";
import NextUI from "@/components/NextUI";

const AboutPage = () => {
  const theme = useTheme();

  useEffect(() => {
    AOS.init();
  }, []);

  type MyStack = {
    id: number;
    title: string;
    percentage: number | undefined;
    icon: JSX.Element;
  };

  const iconsSize: number = 45;

  const myStack: MyStack[] = [
    {
      id: 1,
      title: "html",
      percentage: 98,
      icon: <AiFillHtml5 size={iconsSize} />,
    },
    {
      id: 2,
      title: "css",
      percentage: 96,
      icon: <FaCss3Alt size={iconsSize} />,
    },
    {
      id: 3,
      title: "javaScript",
      percentage: 92,
      icon: <DiJavascript1 size={iconsSize} />,
    },
    {
      id: 4,
      title: "ReactJs",
      percentage: 90,
      icon: <DiReact size={iconsSize} />,
    },
    {
      id: 5,
      title: "NextJS",
      percentage: 92,
      icon: <SiNextdotjs size={iconsSize} />,
    },
    {
      id: 6,
      title: "VueJs",
      percentage: 83,
      icon: <BiLogoVuejs size={iconsSize} />,
    },
    {
      id: 7,
      title: "NuxtJS",
      percentage: 83,
      icon: <SiNuxtdotjs size={iconsSize} />,
    },
    {
      id: 8,
      title: "TypeScript",
      percentage: 85,
      icon: <SiTypescript size={iconsSize} />,
    },
    {
      id: 9,
      title: "Styled-components",
      percentage: 92,
      icon: <SiStyledcomponents size={iconsSize} />,
    },
    {
      id: 10,
      title: "Bootstrap",
      percentage: 83,
      icon: <SiBootstrap size={iconsSize} />,
    },
    { id: 11, title: "MUI", percentage: 87, icon: <SiMui size={iconsSize} /> },
    {
      id: 12,
      title: "NextUI",
      percentage: 90,
      icon: <NextUI size={iconsSize} />,
    },
    {
      id: 13,
      title: "Hasura",
      percentage: 88,
      icon: <SiHasura size={iconsSize} />,
    },
    {
      id: 14,
      title: "GraphQL",
      percentage: 85,
      icon: <GrGraphQl size={iconsSize} />,
    },
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
                <Typography lineHeight={2}>
                  A frontend developer. I enjoy working on the internet and
                  ensuring that it remains a space for all of us to pursue our
                  quirky, individual, and creative interests. In order to
                  achieve this, I&apos;ve created a number of projects designed
                  to provide me a broad grasp of the development field as well
                  as tools to help other developers along their path. I enjoy
                  experimenting with the internet as a creative tool. This
                  portfolio is constantly evolving in an effort to learn and
                  apply web technology in novel ways.
                  <br />
                  I&apos;m open to Job opportunities where I can contribute,
                  learn and grow.
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

        <Box
          sx={{
            width: "100%",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            rowGap: "2rem",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "4rem",
            gap: "2rem",

            paddingBottom: {
              xs: "2rem",
              sm: "0",
            },
          }}
        >
          {myStack.map((item) => (
            <Stack
              key={item.id}
              // direction="row"
              alignItems="center"
              justifyContent="space-between"
              gap={1}
              data-aos="fade-up"
            >
              <Typography sx={{ textTransform: "uppercase" }}>
                {item.title}
              </Typography>

              <Box>{item.icon}</Box>
              {/*   <Box width="100%">
                <LinearProgress variant="determinate" value={item.percentage} />
              </Box>
              <Typography sx={{ textTransform: "uppercase" }}>
                {item.percentage}%
              </Typography> */}
            </Stack>
          ))}
        </Box>

        {/*    <Grid item xs={12}>
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
        </Grid> */}
      </Grid>

      <Box>
        <ResumeComp />
      </Box>
    </Box>
  );
};

export default AboutPage;
