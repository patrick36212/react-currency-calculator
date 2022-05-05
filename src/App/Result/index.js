import { StyledResult } from "./styled";

const Result = ({ result }) => (

    !!result && (
        <StyledResult className="result__text">
            {result.sourceAmount.toFixed(2)}&nbsp;{result.ownedCurrency}&nbsp;={" "}
            <strong>
                {result.targetResult.toFixed(2)}&nbsp;{result.targetCurrency}
            </strong>
        </StyledResult>
    )
);

export default Result;