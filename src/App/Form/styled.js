import styled, { css } from "styled-components";

export const StyledFieldset = styled.fieldset`
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.background};
    border: none;
`;

export const StyledHeader = styled.h1`
    color: ${({ theme }) => theme.colors.fontColor};
    padding: 10px;
    text-align: center;
    margin: 0;
`;

export const StyledAnnotatnion = styled.p`
    margin: 0;
    text-align: right;
    padding: 5px;
    color: ${({ theme }) => theme.colors.errorBackground};

    ${({ date }) => date && css`
        color: ${({ theme }) => theme.colors.fontColor};
    `}
`;

export const StyledWrapper = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 10px;
margin: 10px 0;

    ${({ button }) => button && css`
        justify-items: end;
    `}

    ${({ result }) => result && css`
        max-width: fit-content;
        margin: 5px auto;
    `}

@media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-auto-flow: row;
}
`;

export const StyledButton = styled.button`
padding: 10px;
font-weight: bold;
color: ${({ theme }) => theme.colors.fontColor};
background: transparent;
cursor: pointer;
transition: ease-out 0.5s;
border-radius: 10px;
border: 2px solid ${({ theme }) => theme.colors.fontColor};

@media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 10px;
}

    &:hover {
    color: ${({ theme }) => theme.colors.background};
    box-shadow: inset 0-100px 0 0 ${({ theme }) => theme.colors.fontColor};
}

    &:active {
    transform: scale(0.9);
}
`;