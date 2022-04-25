import styled from "styled-components";

export const StyledLabel = styled.label`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    gap: 3px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        flex-direction: column;
    }
`;

export const StyledLabelText = styled.span`
    font-weight: bold;
    padding: 10px 0;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
    }
`;

export const StyledFormField = styled.input`
    text-align: center;
    border: 2px solid;
    padding: 10px;
    border-radius: 10px;
    background: ${({ theme }) => theme.colors.buttonBackgorund};
    color: ${({ theme }) => theme.colors.fontColor};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
    }

    &:required {
        border: 2px solid ${({ theme }) => theme.colors.optionBorder};
    }
    &:required:hover {
        border: 2px solid ${({ theme }) => theme.colors.hoverOptionBorder};
    }
    &:invalid{
        background: ${({theme}) => theme.colors.requiredButtonBackgorund}
    }
`;