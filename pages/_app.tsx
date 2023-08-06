import React, {
  useState,
  useMemo,
  ReactElement,
  ReactNode,
  useEffect,
} from "react";

import "@/styles/globals.css";
import { AppProps } from "next/app";
import type { NextPage } from "next";

import { ThemeProvider, CssBaseline, createTheme } from "@mui/material";
import { CacheProvider, EmotionCache } from "@emotion/react";

import createEmotionCache from "@/utils/theme/createEmotionCache";
import lightThemeOptions from "@/utils/theme/lightThemeOptions";
import darkThemeOptions from "@/utils/theme/darkThemeOptions";

import BaseLayout from "@/layouts/BaseLayout";
import PlainLayout from "@/layouts/PlainLayout";

import { AnimatePresence, motion } from "framer-motion";

import { useRouter } from "next/router";
import Head from "next/head";

import { Cormorant_Garamond } from "next/font/google";

const CormorantGaramond = Cormorant_Garamond({
  style: "normal",
  weight: "700",
  subsets: ["latin", "cyrillic", "cyrillic-ext", "latin-ext", "vietnamese"],
  preload: true,
});

// import ClearLayout from "../layouts/ClearLayout";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

// layout change
export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
  emotionCache?: EmotionCache;
};

// ...........................
export default function MyApp(props: MyAppProps) {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps: { session, ...pageProps },
  }: AppPropsWithLayout = props;

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);

  const router = useRouter();
  const [mode, setMode] = useState<string>("dark");

  const lightTheme = useMemo(() => createTheme(lightThemeOptions), []);
  const darkTheme = useMemo(() => createTheme(darkThemeOptions), []);

  const selectedTheme = mode === "dark" ? darkTheme : lightTheme;

  if (Component.getLayout) {
    return Component.getLayout(
      <CacheProvider value={emotionCache}>
        <CssBaseline />
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <PlainLayout>
            <Component {...pageProps} />
          </PlainLayout>
        </ThemeProvider>
      </CacheProvider>
    );
  }

  return (
    <>
      <Head>
        <title>
          Damian Aluku{" "}
          {router.pathname == "/" ? "" : router.pathname.toString()}
        </title>
        <meta name="title" content="Damian Aluku" />
        <meta
          name="description"
          content="This is a portfolio website for Damian Aluku, a front-end developer with experience in ReactJS, NextJS, and various front-end technologies."
        />
        <meta
          name="keywords"
          content="React, ReactJS, NextJS, TypeScript, Frontend Developer, Javascript, HTML, CSS, Software engineer, Vue, Material UI, NextUI, Styled-components, development"
        />
        <meta name="robots" content="index, follow" />
        <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        {/*   <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        /> */}
      </Head>
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={selectedTheme}>
          <CssBaseline />
          <AnimatePresence mode="wait">
            <motion.div
              key={router.route}
              transition={{
                duration: 0.5,
              }}
              initial="initialState"
              animate="animatedState"
              exit="exitState"
              variants={{
                initialState: {
                  opacity: 0,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                animatedState: {
                  opacity: 1,
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
                },
                exitState: {
                  clipPath: "polygon(50% 0, 50% 0, 50% 100%, 50% 100%)",
                },
              }}
              className={CormorantGaramond.className}
            >
              <BaseLayout mode={mode} setMode={setMode}>
                <Component {...pageProps} />
              </BaseLayout>
            </motion.div>
          </AnimatePresence>
        </ThemeProvider>
      </CacheProvider>
    </>
  );
}
