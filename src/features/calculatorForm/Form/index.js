import { useState } from "react";
import { useEffect } from "react";
import {
    Select,
    Input
} from "../Field";
import {
    StyledAnnotatnion,
    StyledWrapper,
    StyledButton,
    StyledFieldset,
    StyledForm,
    ChangeIcon
} from "./styled";
import { useRatesData } from "./useRates";
import Result from "../Result";

const Form = () => {

    const {
        ratesData,
        ownedCurrency,
        targetCurrency,
        setOwnedCurrency,
        setTargetCurrency,
    } = useRatesData();

    const [amount, setAmount] = useState("")
    const [result, setResult] = useState();

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
    }, [ownedCurrency, targetCurrency]);

    const calculateResult = () => {
        const ownedRate = ratesData.rates[ownedCurrency]
        const targetRate = ratesData.rates[targetCurrency];
        setResult(
            {
                sourceAmount: +amount,
                targetResult: +amount * targetRate,
                ownedRate,
                targetRate
            }
        );
    };

    const onFormSubmit = (event) => {
        event.preventDefault();
        calculateResult();
        setAmount("")
    };

    const currencySwitch = () => {
        setOwnedCurrency(targetCurrency);
        setTargetCurrency(ownedCurrency);
        setResult();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <StyledFieldset>
                <StyledAnnotatnion>*Fields required</StyledAnnotatnion>
                <StyledWrapper>
                    <Select
                        fieldName={"From*: "}
                        name={"currency"}
                        value={ownedCurrency}
                        onChange={({ target }) => setOwnedCurrency(target.value)}
                        option={!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    />
                    <StyledWrapper changeButtonWrapper>
                        <StyledButton
                            onClick={currencySwitch}
                            changeButton
                        >
                            <ChangeIcon />
                        </StyledButton>
                    </StyledWrapper>
                    <Select
                        fieldName={"To*: "}
                        name={"currency"}
                        value={targetCurrency}
                        onChange={({ target }) => setTargetCurrency(target.value)}
                        option={!!ratesData.rates && Object.keys(ratesData.rates).map((currency) => (
                            <option
                                key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))}
                    />
                    <Input
                        fieldName={`${ownedCurrency} Amount*: `}
                        value={amount}
                        onChange={(event) => setAmount(event.target.value)}
                    />
                </StyledWrapper>
                <StyledWrapper button>
                    <StyledButton>Calculate</StyledButton>
                </StyledWrapper>
                <Result
                    result={result}
                    targetCurrency={targetCurrency}
                    ownedCurrency={ownedCurrency}
                />
                <StyledAnnotatnion date >
                    Exchange rates valid as of:<br />
                    <strong>
                        {ratesData.date}
                    </strong>
                </StyledAnnotatnion>
            </StyledFieldset>
        </StyledForm>
    );
};

export default Form;