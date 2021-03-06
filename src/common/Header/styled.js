import styled from 'styled-components';

export const StyledHeader = styled.header`
    position: fixed;
    top: 0;
    width: 100%;
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.backgroundPrimary};
`;

export const Wrapper = styled.div`
    display: flex;
    max-width: 70%;
    margin: auto;
    justify-content: space-between;

    @media(max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        max-width: 100%;
    }
`;

export const StyledTitle = styled.h1`
    margin: 0;
`;