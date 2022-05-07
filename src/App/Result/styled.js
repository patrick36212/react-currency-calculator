import styled from "styled-components";
import { css } from "styled-components";

export const StyledResultWrapper = styled.div`
    width: 100%;
    display: grid;
    grid-gap: 3px;
`;

export const StyledResult = styled.p`
    margin: 2px;
    font-size: 20px;

    ${({ additionalInfo }) => additionalInfo && css`
        font-size: 12px;
    `}
`;