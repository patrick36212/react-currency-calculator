import { currencies } from "../../currencies";

const Field = ({ fieldName, name, value, onChange }) => {

    return (
        <label className="form__label">
            <span className="form__labelText">{fieldName}</span>
            <select
                className="form__field"
                name={name}
                value={value}
                onChange={onChange}
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
    );
};

export default Field;