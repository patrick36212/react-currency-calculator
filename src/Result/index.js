import "./style.css"

const Result = ({ result }) => (
    <p className="result__text">
        {result !== undefined && (
            <>
                {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <strong>
                    {result.targetResult.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;