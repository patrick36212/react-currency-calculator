import { useRatesData } from "../useRates";
import { StyledFormField, StyledLabel, StyledLabelText } from "./styled";

export const Select = ({ fieldName, name, value, onChange, object }) => {

    const ratesData = useRatesData();

    return (
        <StyledLabel>
            <StyledLabelText>{fieldName}</StyledLabelText>
            <StyledFormField
                as="select"
                name={name}
                value={value}
                onChange={onChange}
            >
                {Object.keys(ratesData.rates).map(currency => (
                    <option
                        key={currency}
                        value={currency}
                    >
                        {currency}
                    </option>
                ))}
            </StyledFormField>
        </StyledLabel>
    );
};

export const Input = ({ fieldName, value, onChange }) => {
    return (
        <StyledLabel>
            <StyledLabelText>{fieldName}</StyledLabelText>
            <StyledFormField
                min="0.01"
                value={value}
                onChange={onChange}
                type="number"
                step="0.01"
                required
                placeholder="Write your amount"
            >
            </StyledFormField>
        </StyledLabel>
    );

};