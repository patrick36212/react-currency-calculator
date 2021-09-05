import "./style.css"

const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.souceAmount.toFixed(2)}&nbsp;PLN&nbsp;={" "}
                <strong>
                    {result.targetAmount.toFixed(2)}&nbsp;{result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;