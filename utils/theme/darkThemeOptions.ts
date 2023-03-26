import { ThemeOptions } from "@mui/material/styles";

const darkThemeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    background: {
      default: "#0c0c0c",
    },
    primary: {
      main: "#fff",
    },
    secondary: {
      main: "#1a1aff",
    },
  },
  typography: {
    fontFamily: [
      "Cinzel",
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

export default darkThemeOptions;
