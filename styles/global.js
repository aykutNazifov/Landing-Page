import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";

export const GlobalStyles = createGlobalStyle`
    html,
    body {
        padding: 0;
        margin: 0;
        font-family: 'Poppins', sans-serif;
        background: linear-gradient(180deg, #F2F8FF 100%, #E7EEF5 0%);
    }

    a {
        display: inline-block;
        color: inherit;
        text-decoration: none;
        
    }

    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
`;
