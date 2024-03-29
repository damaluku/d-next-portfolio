import React from "react";

import { Typography, Stack, Divider, Grid } from "@mui/material";
import { Box } from "@mui/system";

import { getProjectById } from "../api/projects/[projectId]";

import { motion } from "framer-motion";

import { useTheme } from "@mui/material/styles";
import Image from "next/image";
import Button from "@mui/material/Button";
import Link from "next/link";

import Head from "next/head";

import { useRouter } from "next/router";
import { ProjectData, getProjects } from "../api/projects";
import { GetStaticProps } from "next";

interface Props {
  data: ProjectData;
}

const Project: React.FC<Props> = ({ data }) => {
  const theme = useTheme();
  const router = useRouter();

  const { projectId } = router.query;

  // console.log(data);

  return (
    <>
      <Head>
        <title>
          Damian Aluku / Project - {data?.name ? data?.name : projectId}
        </title>
      </Head>

      <Box
        sx={{
          padding: {
            xs: "8rem 1rem 3rem",
            sm: "8rem 2rem",
          },
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
              textTransform: "uppercase",
            }}
          >
            {data?.name}
          </Typography>
        </motion.div>

        <Grid
          container
          sx={{
            minHeight: {
              xs: "80vh",
              sm: "100%",
            },
            width: "100%",
            flex: "1",
            position: "relative",
          }}
        >
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -10, opacity: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <Typography
              sx={{
                marginTop: "2rem",
                width: {
                  xs: "100%",
                  sm: "80%",
                },
              }}
              lineHeight={2}
            >
              {data?.description}
            </Typography>
          </motion.div>

          <Stack
            direction={{ xs: "column", md: "row" }}
            divider={<Divider orientation="vertical" flexItem />}
            spacing={5}
            sx={{ marginTop: "5rem" }}
            justifyContent="center"
            alignItems="center"
          >
            <Box
              sx={{
                flex: "1",
                img: {
                  objectFit: "cover",
                },
              }}
            >
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 0.9 }}
              >
                <Box justifyContent="center" alignItems="center">
                  <Image
                    src={data?.image}
                    alt={data?.name}
                    width="350"
                    height="400"
                    quality={100}
                    priority
                  />
                </Box>
              </motion.div>
            </Box>

            <Box sx={{ flex: "2", alignSelf: "flex-start" }}>
              <motion.div
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -10, opacity: 0 }}
                transition={{ duration: 0.3, delay: 1.2 }}
              >
                <Grid container gap={3}>
                  {data?.stack.map((item, i) => (
                    <Grid key={i}>
                      <Button variant="contained" disabled>
                        {item}
                      </Button>
                    </Grid>
                  ))}
                </Grid>
              </motion.div>
            </Box>
          </Stack>
        </Grid>

        <motion.div
          initial={{ y: 10, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          <Stack marginTop="4rem" direction="row" spacing={8}>
            <a
              href={data?.route}
              target="_blank"
              rel="noopener"
              style={{ textDecoration: "none" }}
            >
              <Button variant="contained">View Live</Button>
            </a>

            {data?.github.length > 0 && (
              <a href={data?.github} target="_blank" rel="noopener">
                <Button variant="contained">View Repo</Button>
              </a>
            )}
          </Stack>
        </motion.div>
      </Box>
    </>
  );
};

export default Project;

/* export const getServerSideProps = async (context: any) => {
  const { params } = context;
  const { projectId } = params;

  const data = await getProjectById(projectId);

  return {
    props: {
      data,
    },
  };
}; */

export const getStaticProps: GetStaticProps = async (context: any) => {
  const { params } = context;
  const { projectId } = params;

  const data = await getProjectById(projectId);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const data = await getProjects();

  const paths = data?.map((project) => {
    return {
      params: {
        projectId: project?.id.toString(),
      },
    };
  });

  return {
    paths,
    fallback: true,
  };
};
