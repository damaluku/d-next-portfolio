import React, { useState } from "react";
import {
  Typography,
  Box,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

import styled from "@emotion/styled";

import { motion, sync, useCycle } from "framer-motion";
import Link from "next/link";

import StarIcon from "@mui/icons-material/Star";

import { usePathname } from "next/navigation";

interface Props {
  mode: string;
  setMode: (mode: string) => void;
}

const NavBar = ({ mode, setMode }: Props) => {
  const myTheme = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const pathName = usePathname();

  interface MenuItem {
    item: string;
    route: string;
    id?: string | number;
  }

  const menuItems: { item: string; route: string; id?: string | number }[] = [
    {
      id: 1,
      item: "home",
      route: "/",
    },
    {
      id: 2,
      item: "about",
      route: "/about",
    },
    {
      id: 3,
      item: "portfolio",
      route: "/portfolio",
    },
    {
      id: 4,
      item: "contact",
      route: "/contact",
    },
  ];

  return (
    <>
      <header>
        <MyNav>
          <Box>
            <Link href="/" passHref style={{ textDecoration: "none" }}>
              <Typography
                variant="h3"
                component="h3"
                sx={{ textTransform: "uppercase" }}
                color="primary"
              >
                D.A
              </Typography>
            </Link>
          </Box>

          {isOpen ? (
            <Box
              sx={{
                width: "100%",
                height: "100%",
              }}
            >
              <Box
                onClick={() => setIsOpen(!isOpen)}
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: "100vw",
                  height: "100vh",
                  background: "black",
                  opacity: "0.6",
                  filter: "blur(1px)",
                }}
              ></Box>
              <Box
                sx={{
                  position: "absolute",
                  top: "0",
                  right: "0",
                  width: { xs: "80vw", sm: "50vw" },
                  height: "70vh",
                  background: myTheme.palette.primary.main,
                  borderRadius: "0 0 0 15px",
                }}
              >
                <CloseIcon
                  sx={{
                    color: myTheme.palette.background.default,
                    cursor: "pointer",
                    position: "absolute",
                    top: "20px",
                    right: "20px",
                  }}
                  onClick={() => setIsOpen(!isOpen)}
                />

                <List
                  sx={{
                    width: "100%",
                    height: "100%",
                    bgcolor: "primary",
                    position: "relative",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-evenly",
                    gap: "5px",
                  }}
                  aria-label="routes"
                >
                  {menuItems.map((menuItem: MenuItem) => (
                    <MenuLinks
                      key={menuItem.id}
                      href={menuItem.route}
                      onClick={() => setIsOpen(!isOpen)}
                    >
                      <ListItem>
                        {pathName === menuItem.route && (
                          <motion.div
                            style={{
                              position: "absolute",
                              left: 0,
                              bottom: "0px",
                              width: "60%",
                              height: "5px",
                              background: myTheme.palette.background.default,
                            }}
                            layoutId="underline"
                          />
                        )}
                        <ListItemButton>
                          <ListItemIcon>
                            <StarIcon
                              sx={{
                                color: `${
                                  pathName === menuItem.route &&
                                  "background.default"
                                }`,
                              }}
                            />
                          </ListItemIcon>
                          <ListItemText
                            primary={menuItem.item}
                            sx={{
                              color: "background.default",
                              textTransform: "uppercase",
                            }}
                          />
                        </ListItemButton>
                      </ListItem>
                    </MenuLinks>
                  ))}
                </List>
              </Box>
            </Box>
          ) : (
            <ActionBox sx={{ background: myTheme.palette.primary.main }}>
              <IconButton
                size="large"
                sx={{ color: myTheme.palette.background.default }}
                onClick={() => setMode(mode === "light" ? "dark" : "light")}
              >
                {myTheme.palette.mode === "dark" ? (
                  <Brightness7Icon />
                ) : (
                  <Brightness4Icon />
                )}
              </IconButton>

              <MenuIcon
                sx={{
                  color: myTheme.palette.background.default,
                  cursor: "pointer",
                }}
                onClick={() => setIsOpen(!isOpen)}
              />
            </ActionBox>
          )}
        </MyNav>
      </header>
    </>
  );
};

export default NavBar;

const MyNav = styled.nav({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem",
});

const ActionBox = styled(Box)({
  display: "flex",
  justifyContent: "space-evenly",
  alignItems: "center",
  width: "clamp(100px, 150px, 200px)",
  borderRadius: "15px 0 15px 0",
});

const MenuLinkContainer = styled.div({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-evenly",
  alignItems: "center",
  gap: "10px",
});

const MenuLinks = styled(Link)({
  width: "100%",
  height: "100%",
  textDecoration: "none",
  textTransform: "uppercase",
  textAlign: "center",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "relative",

  p: {
    fontSize: "clamp(1rem, 1.5rem, 2rem)",
    letterSpacing: "5px",
  },
});
