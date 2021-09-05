import "./style.css"
import { currencies } from "../currencies";
import { useState } from "react";
import Result from "../Result";

const Form = ({ calculateResult, result }) => {
    const [amount, setAmount] = useState("");
    const [currency, setCurrency] = useState(currencies[0].short);

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult(amount, currency);
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <fieldset className="form__fieldset">
                <p className="form__adnotation">Required fields mark *.</p>
                <label className="form__label">
                    <span className="form__labelText">PLN Amount*: </span>
                    <input
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                        className="form__field"
                        type="number"
                        step="0.01"
                        required
                        autoFocus
                    />
                </label>
                <label className="form__label">
                    <span className="form__labelText">Exchange currency*: </span>
                    <select
                        className="form__field"
                        name="currency"
                        value={currency}
                        onChange={(event) => setCurrency(event.target.value)}
                    >
                        {currencies.map((currency) => (
                            <option
                                key={currency.short}
                                value={currency.short}
                            >
                                {currency.name}
                            </option>
                        ))}
                    </select>
                </label>
                <label className="form__label">
                    <span className="form__labelText">Exchange currency rate: </span>
                    <input
                        className="form__field"
                        type="number"
                        readOnly
                    />
                </label>
                <div className="form__buttonContainer">
                    <button
                        className="form__button"
                    >
                        Count
                    </button>
                </div>
                <Result result={result} />
            </fieldset>
        </form>
    );
};

export default Form;