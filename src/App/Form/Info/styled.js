import styled, { css } from "styled-components";

export const StyledContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.background};
    border-radius: 10px;
    padding: 10px;
`;

export const StyledInfo = styled.p`
    text-align: center;
    font-weight: bold;
    word-spacing: 3px;
    line-height: 1.5;

    ${({ error }) => error && css`
        color: ${({ theme }) => theme.colors.errorBackground};
    `}

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px){
        word-spacing: normal;
        margin: 0.5em;
    }
`;