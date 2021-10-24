import styled from "styled-components";

export const StyledResult = styled.p`
    margin: 0;
    color: hsl(0, 0%, 100%);
    padding: 10px;
    font-size: 20px;
    background: ${({ theme }) => theme.color.prussianblue};
    border-radius: 30px;
    box-shadow: 20px 20px 60px ${({ theme }) => theme.color.grayweb};
`;