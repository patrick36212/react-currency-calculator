import "./style.css"

const Form = () => (
<form className="form js-form">
    <fieldset className="form__fieldset">
        <legend className="form__legend">Kalkulator walut</legend>
        <p className="form__adnotation">Pola oznaczone * są wymagane.</p>
        <label>
            <span className="form__labelText">Kwota PLN*: </span>
            <input className="form__field js-amount" type="number" step="any" required />
        </label>
        <label>
            <span className="form__labelText">Waluta posiadana*: </span>
            <select className="form__field js-currency" name="currency">
                <option value="Zero" selected>Wybierz walutę</option>
                <option value="CHF">Frank Szwajcarski - CHF</option>
                <option value="USD">Dolar - USD</option>
                <option value="EUR">Euro - EUR</option>
                <option value="GBP">Funt Brytyjski - GBP</option>
                <option value="RUB">Rubel Rosysjki - RUB</option>
            </select>
        </label>
        <label>
            <span className="form__labelText">Kurs: </span>
            <input className="form__field js-exchangeRate" type="number" value="0" readonly />
        </label>
        <button className="button">Przelicz</button>
    </fieldset>
</form>
);

export default Form;