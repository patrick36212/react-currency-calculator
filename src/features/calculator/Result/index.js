import { StyledResult, StyledResultWrapper } from "./styled";

const Result = ({ result, targetCurrency, ownedCurrency }) => (

    !!result && (
        <StyledResultWrapper>
            <StyledResult>
                {result.sourceAmount.toFixed(2)}&nbsp;{ownedCurrency}&nbsp;={" "}
                <strong>
                    {result.targetResult.toFixed(2)}&nbsp;{targetCurrency}
                </strong>
            </StyledResult>
            <StyledResult additionalInfo>
                {result.ownedRate}&nbsp;{ownedCurrency}&nbsp;={" "}
            </StyledResult>
            <StyledResult additionalInfo>
                {result.targetRate}&nbsp;{targetCurrency}
            </StyledResult>
        </StyledResultWrapper>
    )
);

export default Result;