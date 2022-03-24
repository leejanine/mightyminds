// import logo from "./logo.svg";
import React from "react";
import "./App.css";
import MainHeader from "./components/main-header";
import SubHeader from "./components/sub-header";
import Body from "./components/body";
import { ThemeProvider } from "@mui/material";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <MainHeader />
        <SubHeader />
        <Body />
      </>
    </ThemeProvider>
  );
}

export default App;
