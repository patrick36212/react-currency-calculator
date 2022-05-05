import styled from 'styled-components';

export const StyledHeader = styled.header`
    padding: 10px;
    background-color: ${({ theme }) => theme.colors.background};
    margin-bottom: 100px;
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