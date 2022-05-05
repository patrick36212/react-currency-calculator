import { createGlobalStyle } from "styled-components";
import background from "./currency-background.png"

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
            background: url("${background}");
            background-repeat: no-repeat;
            background-size: cover;
            box-sizing: border-box; 
        }
`;