import styled from "styled-components";
import { css } from "styled-components";

export const StyledBoardWrapper = styled.div`
    padding: 0.35em 0.75em 0.625em;
    max-width: 70%;
    margin: auto;
    -webkit-box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
    -moz-box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
    box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
`;

export const StyledBoardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const StyledBoardName = styled.h2`
    margin: 0;
    padding: 5px 0;
    text-align: left;
`;

export const StyledCurrenciesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 5px 0;
    text-align: center;

    ${({ tableHeader }) => tableHeader && css`
        font-weight: bold;
    `}
`;

export const StyledPropertiesContainer = styled.div`

`;