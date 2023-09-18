import { Typography, Box, Button, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import HomeParticles from "@/components/Particles";

export default function Home() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "100%",
        flexDirection: {
          xs: "column-reverse",
          sm: "row",
        },
        "@media (orientation: landscape)": {
          margin: "6rem 0",
        },
      }}
    >
      <Box
        id="content"
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
        <Box
          sx={{
            position: "absolute",
            width: "90%",
            top: "50%",
            left: "50%",
            transform: "translateX(-50%) translateY(-50%)",
          }}
        >
          <motion.div
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Typography
              variant="h3"
              sx={{
                paddingLeft: "2rem",
                borderLeft: `4px solid ${theme.palette.primary.main}`,
              }}
            >
              I&apos;m Damian Aluku
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
                margin: "2rem 0",
              }}
              lineHeight={2}
            >
              I&apos;m a front-end developer based in Canada with a passion for
              building beautiful websites and web applications. My style is more
              minimalist, efficient, and focused on achieving high quality
              projects.
            </Typography>
          </motion.div>

          <Stack direction="row" spacing={5}>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link href="/about" passHref style={{ textDecoration: "none" }}>
                <Button variant="contained" size="medium" color="primary">
                  About me
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.9 }}
            >
              <Link href="/contact" passHref style={{ textDecoration: "none" }}>
                <Button variant="contained" size="medium" color="primary">
                  Contact
                </Button>
              </Link>
            </motion.div>
          </Stack>
        </Box>
      </Box>

      <Box
        sx={{
          position: "relative",
          width: "100%",
          flex: {
            xs: "none",
            sm: "1",
          },
          height: {
            xs: "80vh",
            sm: "100%",
          },

          img: {
            objectFit: "cover",
            padding: "0.5rem 0.5rem 0.5rem 0",
          },
        }}
      >
        <Box
          sx={{
            zIndex: 1,
            position: "absolute",
            bottom: "2rem",
            display: {
              xs: "flex",
              sm: "none",
            },
            justifyContent: "center",
            width: "100%",
          }}
        >
          <motion.span
            initial={{ translateY: 0, scale: 1 }}
            animate={{ translateY: 20, scale: 1.5 }}
            exit={{ translateY: 0, scale: 1 }}
            transition={{ duration: 1.5 }}
          >
            <a href="#content">
              <ArrowDropDownIcon
                fontSize="large"
                sx={{ color: "white", cursor: "pointer" }}
              />
            </a>
          </motion.span>
        </Box>
        <Image
          src="/home-bg.jpg"
          alt="home image"
          fill
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />

        <Box>
          <HomeParticles />
        </Box>
      </Box>
    </Box>
  );
}
