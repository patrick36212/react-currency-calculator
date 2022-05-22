import styled, { css } from "styled-components";
import { ReactComponent as ChangeButtonIcon } from './changeButton.svg';

export const StyledForm = styled.form`
    width: 70%;
    margin: 30px auto;
    background: ${({ theme }) => theme.colors.background};
    -webkit-box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
    -moz-box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
    box-shadow: 3px 8px 10px ${({ theme }) => theme.colors.shadow};
`;

export const StyledFieldset = styled.fieldset`
    border-radius: 2px;
    background: ${({ theme }) => theme.colors.background};
    border: none;
`;

export const StyledAnnotatnion = styled.p`
    margin: 0;
    text-align: right;
    padding: 5px;
    color: ${({ theme }) => theme.colors.annotation};

    ${({ date }) => date && css`
        color: ${({ theme }) => theme.colors.font};
    `}
`;

export const StyledWrapper = styled.div`
display: grid;
grid-auto-flow: column;
grid-gap: 10px;
margin: 10px 0;

    ${({ changeButtonWrapper }) => changeButtonWrapper && css`
        justify-items: center;
        align-items: flex-end;
    `}

    ${({ button }) => button && css`
        justify-items: end;
    `}

    ${({ result }) => result && css`
        max-width: fit-content;
    `}

@media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    grid-auto-flow: row;
}
`;

export const StyledButton = styled.button`
padding: 10px;
font-weight: bold;
color: ${({ theme }) => theme.colors.font};
background: transparent;
cursor: pointer;
transition: ease-out 0.5s;
border-radius: 2px;
border: 2px solid ${({ theme }) => theme.colors.border};

${({ changeButton }) => changeButton && css`
    padding: 0;
    border: none;
    height: 26px;
    border-radius: 50%;
`}

@media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
    margin-bottom: 10px;
}

    &:hover {
    color: ${({ theme }) => theme.colors.font};
    box-shadow: inset 0-100px 0 0 ${({ theme }) => theme.colors.button};
}

    &:active {
    transform: scale(0.9);
}
`;

export const ChangeIcon = styled(ChangeButtonIcon)`
`;