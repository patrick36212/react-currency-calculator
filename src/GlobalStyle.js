import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        body {
            min-height: 100vh;
            color: ${({ theme }) => theme.colors.font};
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box; 
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }
`;