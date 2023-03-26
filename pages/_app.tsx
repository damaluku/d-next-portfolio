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
import CLearLayout from "@/layouts/CLearLayout";

import { AnimatePresence, motion } from "framer-motion";
import { useRouter } from "next/router";

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
          <CLearLayout>
            <Component {...pageProps} />
          </CLearLayout>
        </ThemeProvider>
      </CacheProvider>
    );
  }

  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={selectedTheme}>
        <CssBaseline />
        <BaseLayout mode={mode} setMode={setMode}>
          <Component {...pageProps} />
        </BaseLayout>
      </ThemeProvider>
    </CacheProvider>
  );
}
