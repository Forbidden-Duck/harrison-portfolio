import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";

import { ThemeProvider, createTheme } from "@mui/material/styles";

console.log("Welcome to the console, what were you expecting to find?");

const theme = createTheme({});

ReactDOM.render(
    <StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </StrictMode>,
    document.getElementById("root")
);
