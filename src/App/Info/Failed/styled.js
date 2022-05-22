import styled from "styled-components";
import {ReactComponent as ErrorIcon} from "./exclamation.svg"

export const StyledIcon = styled.span`
    max-height: 64px;
    border-radius: 50%;
`;

export const Icon = styled(ErrorIcon)`
    fill: ${({ theme }) => theme.colors.annotation};
`;