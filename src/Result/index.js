import "./style.css"

const Result = ({ result }) => (

    !!result && (
        <p className="result__text">
            {result.sourceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
            <strong>
                {result.targetResult.toFixed(2)}&nbsp;{result.currency}
            </strong>
        </p>
    )
);

export default Result;