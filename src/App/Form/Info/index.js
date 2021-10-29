import { StyledContainer, StyledInfo } from "./styled";

const Info = ({ textInfo, loading, error, failed, additionalInfo }) => {
    return (
        <StyledContainer>
            <StyledInfo error={error}>
                {textInfo}
                <br />
                {additionalInfo}
            </StyledInfo>
            {loading}
            {failed}
        </StyledContainer>
    );
};

export default Info;