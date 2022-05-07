import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ result }) => (

    !!result && (
        <StyledResultWrapper>
            <StyledResult>
                {result.sourceAmount.toFixed(2)}&nbsp;{result.ownedCurrency}&nbsp;={" "}
                <strong>
                    {result.targetResult.toFixed(2)}&nbsp;{result.targetCurrency}
                </strong>
            </StyledResult>
            <StyledResult additionalInfo>
                {result.ownedRate}&nbsp;{result.ownedCurrency}&nbsp;={" "}
            </StyledResult>
            <StyledResult additionalInfo>
                {result.targetRate}&nbsp;{result.targetCurrency}
            </StyledResult>
        </StyledResultWrapper>
    )
);

export default Result;