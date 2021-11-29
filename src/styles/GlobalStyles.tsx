import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-model: border-box;
    }

    body {
        margin: 0;
        padding: 0;
    }
`;
