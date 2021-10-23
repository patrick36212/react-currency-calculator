import styled from "styled-components";

export const StyledContainer = styled.main`
    width: 100%;
    max-width: ${({ theme }) => theme.breakpoint.maxWidth}px;
    padding: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoint.mobileMax}px) {
        margin: auto;
    }
`;