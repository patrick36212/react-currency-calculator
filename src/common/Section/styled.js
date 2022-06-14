import styled from 'styled-components';
import { css } from 'styled-components';

export const StyledSection = styled.section`
    padding-bottom: 70px;

    ${({ backgroundSection }) => backgroundSection && css`
        background: ${({ theme }) => theme.colors.backgroundPrimary};
        padding-top: 30px;
        padding-bottom: 30px;
    `}
`;