import styled from "styled-components";

export const StyledContainer = styled.main`
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoints.extraLarge}px;
    padding: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        margin: auto;
    }
`;