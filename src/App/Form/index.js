import { useState } from "react";

import "./style.css";
import { currencies } from "../currencies";
import Result from "./Result";
import Footer from "../Footer";
import Clock from "../Clock";
import Field from "./Field";


const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [ownedCurrency, setOwnedCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("EUR");
    const ownedRate = currencies[ownedCurrency];
    const targetRate = currencies[targetCurrency];

    const calculateResult = (amount, ownedRate, targetRate) => {

        setResult({
            sourceAmount: +amount,
            targetResult: amount * (ownedRate / targetRate),
            ownedCurrency,
            targetCurrency,
        });
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, ownedRate, targetRate);
        setAmount("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <legend className="form__legend">Currency calculator</legend>
                <Clock />
                <p className="form__annotation">*Fields required</p>
                <Field
                    fieldName={"Currency I have*: "}
                    name={"currency"}
                    value={ownedCurrency}
                    onChange={({ target }) => setOwnedCurrency(target.value)}
                />
                <Field
                    fieldName={"Currency I want*: "}
                    name={"currency"}
                    value={targetCurrency}
                    onChange={({ target }) => setTargetCurrency(target.value)}
                />
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