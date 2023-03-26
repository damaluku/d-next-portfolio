import { ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    background: {
      default: "#fff",
    },
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#1a1aff",
    },
  },
  typography: {
    fontFamily: [
      "sans-serif",
      "Cormorant",
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
  },
};

export default lightThemeOptions;
