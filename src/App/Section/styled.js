import styled from 'styled-components';
import background from './currencyBackground.png';

export const StyledSection = styled.section`
    background: url("${background}");
    background-repeat: no-repeat;
    background-size: cover;
    height: 40vh;
    display: flex;
    align-items: center;
    justify-content: center;
`;