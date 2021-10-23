import { useState } from "react";
import { useEffect } from "react";
import { currencies } from "./currencies";
import { Select, Input } from "./Field";
import { StyledAnnotatnion, StyledLegend, StyledWrapper, StyledButton, StyledFieldset } from "./styled";

import Result from "./Result";
import Footer from "./Footer";
import Clock from "./Clock";


const Form = () => {

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [ownedCurrency, setOwnedCurrency] = useState("USD");
    const [targetCurrency, setTargetCurrency] = useState("EUR");
    const ownedRate = currencies[ownedCurrency];
    const targetRate = currencies[targetCurrency];

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
    }, [ownedCurrency, targetCurrency]);

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
        <form onSubmit={onFormSubmit}>
            <StyledFieldset>
                <StyledLegend>Currency calculator</StyledLegend>
                <Clock />
                <StyledAnnotatnion className="form__annotation">*Fields required</StyledAnnotatnion>
                <StyledWrapper>
                    <Select
                        fieldName={"From*: "}
                        name={"currency"}
                        value={ownedCurrency}
                        onChange={({ target }) => setOwnedCurrency(target.value)}
                    />
                    <Select
                        fieldName={"To*: "}
                        name={"currency"}
                        value={targetCurrency}
                        onChange={({ target }) => setTargetCurrency(target.value)}
                    />
                    <Input
                        fieldName={`${ownedCurrency} Amount*: `}
                        value={amount}
                        onChange={({ target }) => setAmount(target.value)}
                    />
                </StyledWrapper>
                <StyledWrapper button>
                    <StyledButton>Calculate</StyledButton>
                </StyledWrapper>
                <StyledWrapper result>
                    <Result result={result} />
                </StyledWrapper>
                <Footer name="Patryk Krawczyk" year="2021" />
            </StyledFieldset>
        </form>
    );
};

export default Form;