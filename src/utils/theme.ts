"use client";
import { Inter } from "next/font/google";
import { createTheme } from "@mui/material/styles";
const inter = Inter({
  weight: ["400", "500", "700", "900"],
  subsets: ["latin"],
});
const { palette } = createTheme();
export const theme = createTheme({
  palette: {
    primary: {
      main: "#0058FF",
      light: "#F1F3F6",
    },
    secondary: {
      main: "#00324B",
      light: "#10DDE8",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    allVariants: {
      color: "#1B1743",
    },
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "contained" },
          style: {
            backgroundColor: "#0058FF",
            textTransform: "inherit",
          },
        },
        {
          props: { variant: "outlined" },
          style: {
            backgroundColor: "transparent",
            textTransform: "inherit",
            border: "1px solid white",
            color: "white",
          },
        },
      ],
    },
  },
});
