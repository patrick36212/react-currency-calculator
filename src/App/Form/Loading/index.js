import { LoadingBar, StyledContainer, StyledInfo, Dot } from "./styled";

const Loading = () => {
    return (
        <StyledContainer>
            <StyledInfo>
                Loadnig current exchange rates from European Central Bank.
            </StyledInfo>
            <LoadingBar >
                <Dot />
                <Dot />
                <Dot />
            </LoadingBar>
        </StyledContainer>
    );
};

export default Loading;