import React from "react";
import { Typography } from "@mui/material";
import { Box } from "@mui/system";

import { useTheme } from "@mui/material/styles";
import ProfileCard from "@/components/ProfileCard";

import { motion } from "framer-motion";
import { getProjects } from "../api/projects";

import Link from "next/link";

import ResumeComp from "@/components/ResumeComp";

type Data = {
  id: string;
  name: string;
  description: string;
  imgUrl: string;
  image: string;
  route: string;
  stack: string[];
};

interface Props {
  data: Data[];
}

const PortfolioPage: React.FC<Props> = ({ data }) => {
  const theme = useTheme();

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
            xs: "8rem 1rem 8rem",
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
            My Projects
          </Typography>
        </motion.div>

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
            I&apos;ve worked on a number of projects intended to provide me a
            comprehensive understanding of the subject of development as well as
            tools to aid other developers in their endeavors. Here are a few
            projects which include this{" "}
            <Link
              href="https://github.com/damaluku/d-next-portfolio"
              target="_blank"
              style={{
                textDecoration: "none",
              }}
            >
              {" "}
              <Typography
                component="span"
                sx={{ color: "primary.main", fontWeight: "bold" }}
              >
                <i>my portfolio site</i>
              </Typography>
            </Link>{" "}
            built with NEXTJS.
          </Typography>
        </motion.div>

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
          {data.map((project) => (
            <ProfileCard key={project.id} project={project} />
          ))}
        </Box>

        <Box>
          <ResumeComp />
        </Box>
      </Box>
    </>
  );
};

export default PortfolioPage;

export async function getStaticProps() {
  const data = await getProjects();

  return {
    props: {
      data,
    },
  };
}
