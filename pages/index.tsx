import { Typography, Box, Button, Stack } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

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
      }}
    >
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
              I’m Damian Aluku
              {/* Frontend Developer */}
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
            >
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia
              praesentium nihil cum tenetur, eius asperiores quae officia
              quisquam laudantium enim id provident alias harum sapiente
              expedita inventore illum? Dolorem magnam iste beatae id minus
              natus inventore sapiente, esse molestiae amet.
            </Typography>
          </motion.div>

          <Stack direction="row" spacing={5}>
            <motion.div
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -10, opacity: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
            >
              <Link
                href="/portfolio"
                passHref
                style={{ textDecoration: "none" }}
              >
                <Button variant="contained" size="medium" color="primary">
                  my portfolio
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
        <Image src="/home-bg.jpg" alt="home image" fill priority />
      </Box>
    </Box>
  );
}
