import "./style.css"

const Form = () => (
    <form className="form">
        <fieldset className="form__fieldset">
            <p className="form__adnotation">Required fields mark *.</p>
            <label className="form__label">
                <span className="form__labelText">PLN Amount*: </span>
                <input className="form__field" type="number" step="any" required />
            </label>
            <label className="form__label">
                <span className="form__labelText">Exchange currency*: </span>
                <select className="form__field" name="currency">
                    <option value="Zero" selected>Choose currency</option>
                    <option value="CHF">CHF</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="GBP">GBP</option>
                </select>
            </label>
            <label className="form__label">
                <span className="form__labelText">Exchange rate: </span>
                <input className="form__field js-exchangeRate" type="number" value="0" readonly />
            </label>
            <div className="form__buttonContainer">
                <button className="form__button ">Count</button>
                <button className="form__button" type="reset">Clear</button>
            </div>
        </fieldset>
    </form>
);

export default Form;