import styled from "styled-components";

export const LoadingBar = styled.div`
    width: 3.5em;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    @keyframes fade {
    from {
        opacity: 1;
        }
    to {
        opacity: 0;
        }
    }
`;

export const Dot = styled.div`
    width: 0.8em;
    height: 0.8em;
    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.errorBackground};
    animation: fade 0.8s ease-in-out alternate infinite;

    &:nth-of-type(1) {
        animation-delay: -0.4s;
    }

    &:nth-of-type(2) {
        animation-delay: -0.2s;
    }
`;