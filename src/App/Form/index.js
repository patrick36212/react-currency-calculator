import { useState } from "react";

import "./style.css"
import { currencies } from "../currencies";
import Result from "./Result";
import Footer from "../Footer";
import Clock from "../Clock";


const Form = () => {

    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState("EUR");
    const [result, setResult] = useState();
    const rate = currencies[currency]

    const calculateResult = (amount, currency) =>  {       

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
                <Clock />
                <p className="form__annotation">*Fields required</p>
                <label className="form__label">
                    <span className="form__labelText">PLN Amount*: </span>
                    <input
                        min="0.01"
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                        className="form__field"
                        type="number"
                        step="0.01"
                        required
                        autoFocus
                        placeholder="Write your amount"
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
                        {Object.keys(currencies).map(currency => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">Exchange currency rate: </span>
                    <input
                        value={rate}
                        className="form__field"
                        type="number"
                        disabled
                    />
                </label>
                <div className="form__buttonContainer">
                    <button
                        className="form__button"
                    >
                        Calculate
                    </button>
                </div>
                <div className="result">
                    <Result result={result} />
                </div>
                <Footer name="Patryk Krawczyk" year="2021" />
            </fieldset>
        </form>
    );
};

export default Form;