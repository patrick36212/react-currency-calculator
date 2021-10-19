import { createGlobalStyle } from "styled-components";
import background from "./currency-background.png"

export const GlobalStyle = createGlobalStyle`
        *, ::after, ::before {
            box-sizing: inherit;
        }

        #root {
            background: url("${background}");
            background-repeat: no-repeat;
            background-size: cover;
            background-attachment: scroll;
            box-sizing: border-box; 
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            --dark-blue-gradient: linear-gradient(145deg, hsl(203, 92%, 50%), hsl(203, 92%, 20%));
        }

        body {
            font-family: 'Lato', sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
}
`;