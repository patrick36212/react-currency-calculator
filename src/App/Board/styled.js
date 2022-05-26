import styled from "styled-components";
import { css } from "styled-components";

export const StyledBoardWrapper = styled.div`
    padding: 0.35em 0.75em 0.625em;
    max-width: 70%;
    margin: auto;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.backgroundSecondary};
    color: ${({ theme }) => theme.colors.colorPrimary};
`;

export const StyledBoardHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 15px;
`;

export const StyledBoardName = styled.h2`
    margin: 0;
    padding: 5px 0;
    text-align: left;
`;

export const StyledTableName = styled.h3`
    margin: 10px 0;
`;

export const StyledCurrenciesWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding: 5px 0;
    text-align: center;
    border-bottom: 2px solid ${({ theme }) => theme.colors.backgroundPrimary};

    ${({ base }) => base && css`
        border: none;
    `}
`;

export const StyledBase = styled.input`
    text-align: center;
    border: 2px solid;
    padding: 10px;
    border-radius: 5px;
    background: ${({ theme }) => theme.colors.backgroundAddPrimary};
    color: ${({ theme }) => theme.colors.colorSeconadry};

    @media (max-width: ${({ theme }) => theme.breakpoints.medium}px) {
        width: 100%;
    }

    &:hover {
        border: 2px solid ${({ theme }) => theme.colors.backgroundAddPrimary};
    }
`;

export const StyledPropertiesContainer = styled.span`
    padding: 5px 0;
`;