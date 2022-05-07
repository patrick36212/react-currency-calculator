import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledSection = styled.section`
    margin-bottom: 270px;

    ${({ backgroundSection }) => backgroundSection && css`
        background: ${({ theme }) => theme.colors.background};
        padding-top: 270px;
        margin: 0;
    `}
`;