import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        body {
            min-height: 100vh;
            color: ${({ theme }) => theme.colors.colorPrimary};
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box; 
            transition: 1s cubic-bezier(0.69, 0.15, 0.31, 0.85);
        }

        *, ::after, ::before {
            box-sizing: inherit;
        }
`;