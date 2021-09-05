import "./style.css"

const Result = ({ result }) => (
    <p className="result">
        {result !== undefined && (
            <>
                {result.souceAmount.toFixed(2)} PLN =
                <strong>
                    {result.targetAmount.toFixed(2)} {result.currency}
                </strong>
            </>
        )}
    </p>
);

export default Result;