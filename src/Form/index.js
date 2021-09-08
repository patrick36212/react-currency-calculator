import "./style.css"
import { currencies } from "../currencies";
import Result from "../Result";
import Footer from "../Footer";

const Form = () => {

    return (
        <form className="form">
            <fieldset className="form__fieldset">
                <p className="form__adnotation">Required fields mark *.</p>
                <label className="form__label">
                    <span className="form__labelText">PLN Amount*: </span>
                    <input
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
                <div className="result">
                  Calculated result: <Result />
                </div>
                <Footer name="Patryk Krawczyk" year="2021" />
            </fieldset>
        </form>
    );
};

export default Form;