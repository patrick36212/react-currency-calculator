import styled, { css } from "styled-components";

export const StyledFieldset = styled.fieldset`
    border-radius: 20px;
    background: ${({ theme }) => theme.color.white};
    border: none;
`;

export const StyledLegend = styled.legend`
    background: ${({ theme }) => theme.color.prussianblue};
    border-radius: 30px;
    color: ${({ theme }) => theme.color.white};
    padding: 10px;
`;

export const StyledAnnotatnion = styled.p`
    text-align: right;
    padding: 5px;
    color: ${({ theme }) => theme.color.rubyred};
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

    @media (max-width: 767px) {
        grid-auto-flow: row;
    }
`;

export const StyledButton = styled.button`
    padding: 10px;
    max-width: 163px;
    width: 100%;
    color: ${({ theme }) => theme.color.prussianblue};
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 30px;
    border: 2px solid ${({ theme }) => theme.color.prussianblue};

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin-bottom: 10px;
    }

    &:hover {
        color: ${({ theme }) => theme.color.white};
        box-shadow: inset 0 -100px 0 0 ${({ theme }) => theme.color.prussianblue};
    }

    &:active {
        transform: scale(0.9);
    }
`;