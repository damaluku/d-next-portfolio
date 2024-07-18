import styled from "@emotion/styled";
import { Box } from "@mui/material";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

import { motion } from "framer-motion";

type Props = {
  children: React.ReactNode;
  mode: string;
  setMode: (mode: string) => void;
};

const BaseLayout: React.FC<Props> = ({ children, mode, setMode }) => {
  return (
    <>
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
            }}
          >
            {children}
          </Box>
          <SideBar />
        </MainContainer>
      </motion.div>
    </>
  );
};

export default BaseLayout;

const MainContainer = styled.main({
  width: "100vw",
  minHeight: "100Vh",
  display: "grid",
  gridTemplateColumns: "repeat(9, 1fr)",
  // background: "linear-gradient(135deg, #0d1b2a, #1b263b, #415a77)",

  header: {
    width: "100%",
    position: "fixed",
    zIndex: "5",
  },

  aside: {
    gridArea: "1/1/10/2",
  },
});
