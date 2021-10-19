import styled, { css } from "styled-components";

export const StyledFieldset = styled.fieldset`
    border-radius: 20px;
    background: hsl(0, 0%, 96%);
    box-shadow: -5px -5px 40px hsl(0, 0%, 45%), 5px 5px 40px hsl(0, 0%, 65%);;
    border: none;
`;

export const StyledLegend = styled.legend`
    background: var(--dark-blue-gradient);
    border-radius: 30px;
    color: hsl(0, 0%, 96%);
    padding: 10px;
`;

export const StyledAnnotatnion = styled.p`
    text-align: right;
    padding: 5px;
    color: hsl(0, 40%, 50%);
`;

export const StyledWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-gap: 10px;
    margin: 10px 0;

    ${({button}) => button && css`
    justify-items: end;
    `}

    ${({result}) => result && css`
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
    color: hsl(203, 92%, 20%);
    background: transparent;
    cursor: pointer;
    transition: ease-out 0.5s;
    border-radius: 30px;
    border: 2px solid hsl(203, 92%, 40%);

    @media (max-width: 767px) {
        margin-bottom: 10px;
    }

    &:hover {
        color: white;
        box-shadow: inset 0 -100px 0 0 hsl(203, 92%, 40%);
    }

    &:active {
        transform: scale(0.9);
    }
`;