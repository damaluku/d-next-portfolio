import styled from "@emotion/styled";
import { Box } from "@mui/material";
import { Fragment } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import { motion, AnimatePresence } from "framer-motion";

type Props = {
  children: React.ReactNode;
  mode: string;
  setMode: (mode: string) => void;
};

const BaseLayout: React.FC<Props> = ({ children, mode, setMode }) => {
  return (
    <>
      {/* <AnimatePresence mode="wait"> */}
      <motion.div
        initial={{ y: 10, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: -10, opacity: 0 }}
        transition={{ duration: 0.2 }}
      >
        <MainContainer>
          <NavBar mode={mode} setMode={setMode} />
          <Box
            className="children-container"
            sx={{
              minHeight: "40vh",
              width: "100%",
              gridArea: {
                xs: "1/1/10/10",
                sm: "1/2/10/10",
              },

              /*  paddingTop: {
              xs: "5rem",
              sm: "0px",
            }, */
            }}
          >
            {children}
          </Box>
          <SideBar />
        </MainContainer>
      </motion.div>
      {/* </AnimatePresence> */}
    </>
  );
};

export default BaseLayout;

const MainContainer = styled.main({
  width: "100vw",
  minHeight: "100Vh",
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",

  header: {
    width: "100%",
    position: "fixed",
    zIndex: "5",
  },

  aside: {
    gridArea: "1/1/10/2",
  },
});
