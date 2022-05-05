import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
        *, ::after, ::before {
            box-sizing: inherit;
        }

        #calc {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        body {
            min-height: 100vh;
            color: ${({ theme }) => theme.colors.font};
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            box-sizing: border-box; 
        }
`;