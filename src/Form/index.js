import "./style.css"
import { currencies } from "../currencies";
import Result from "../Result";
import Footer from "../Footer";
import { useState } from "react";

const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);
    // const [rate, setRate] = useState(currencies.find(({ short }) => short === currency).value);
    const [result, setResult] = useState();

    const calculateResult = (amount, currency) => {

        const rate = currencies.find(({ short }) => short === currency).value

        setResult({
            sourceAmount: +amount,
            targetResult: amount / rate,
            currency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
        setAmount("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency calculator</legend>
                <p className="form__adnotation">Required fields mark *.</p>
                <label className="form__label">
                    <span className="form__labelText">PLN Amount*: </span>
                    <input
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__field"
                        type="number"
                        step="0.01"
                        required
                    />
                </label>
                <label className="form__label">
                    <span className="form__labelText">Exchange currency*: </span>
                    <select
                        className="form__field"
                        name="currency"
                        value={currency}
                        onChange={({ target }) => setCurrency(target.value)}
                    >
                        {currencies.map((currency) => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.short}
                            </option>
                        ))}
                    </select>
                </label>
                {/* <label className="form__label">
                    <span className="form__labelText">Exchange currency rate: </span>
                    <input
                        value={rate}
                        onChange={({ target }) => setRate(target.value)}
                        className="form__field"
                        type="number"
                        readOnly
                    />
                </label> */}
                <div className="form__buttonContainer">
                    <button
                        className="form__button"
                    >
                        Count
                    </button>
                </div>
                <div className="result">
                    <Result calculateResult={calculateResult} result={result} />
                </div>
                <Footer name="Patryk Krawczyk" year="2021" />
            </fieldset>
        </form>
    );
};

export default Form;