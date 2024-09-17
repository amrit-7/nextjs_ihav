"use client";
import "../globals.css";
import { theme } from "@/utils/theme";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import NavbarComponent from "./components/navbar-component";
import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`
  :root {
    --primary-blue: #0058FF;
    --light-blue: #10DDE8;
    --dark-blue: #00324B;
    --blue-variant: #02004B;
    --secondary-color: #6c757d;
    --background-color: #ffffff;
    --light-background-color: #F1F3F6;
    --text-color: #1B1743;
    --light-text: #2A2F32;
    --font-size-large: 60px;
    --font-size-medium: 18px;
    --font-size-small: 13px;
    --font-weight-bold: 900;
    --font-weight-medium: 500;
    --line-height-tight: 1.2;
    --letter-spacing-tight: -3px;
    --box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    --transition-duration: 0.3s;
}
`;
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <AppRouterCacheProvider>
      <GlobalStyle />

      <ThemeProvider theme={theme}>
        <NavbarComponent />
        <CssBaseline />
        {children}
      </ThemeProvider>
    </AppRouterCacheProvider>
  );
}
