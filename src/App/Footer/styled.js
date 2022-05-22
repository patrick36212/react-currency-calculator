import styled from "styled-components";

export const StyledFooter = styled.footer`
    text-align: center;
    padding: 10px;
    color: ${({ theme }) => theme.colors.colorPrimary};
    background: ${({ theme }) => theme.colors.backgroundAddPrimary};
`;