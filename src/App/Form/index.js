import { useState } from "react";
import { useEffect } from "react";
import { Select, Input } from "./Field";
import { StyledAnnotatnion, StyledHeader, StyledWrapper, StyledButton, StyledFieldset } from "./styled";

import Result from "./Result";
import Footer from "./Footer";
import Clock from "./Clock";
import { useRatesData } from "./useRates";
import Info from "./Info";
import Loading from "./Info/Loading";
import Failed from "./Info/Failed";

const Form = () => {

    const ratesData = useRatesData();

    const [amount, setAmount] = useState("");
    const [result, setResult] = useState();
    const [ownedCurrency, setOwnedCurrency] = useState("EUR");
    const [targetCurrency, setTargetCurrency] = useState("USD");

    useEffect(() => {
        document.title = `Calculate from ${ownedCurrency} to ${targetCurrency}`;
    }, [ownedCurrency, targetCurrency]);

    const calculateResult = (amount) => {
        const ownedRate = ratesData.rates[ownedCurrency];
        const targetRate = ratesData.rates[targetCurrency];

        setResult({
            sourceAmount: +amount,
            targetResult: amount * (ownedRate / targetRate),
            ownedCurrency,
            targetCurrency,
        });
    };

    const onFormSubmit = (event, ownedRate, targetRate) => {
        event.preventDefault();
        calculateResult(amount, ownedRate, targetRate);
        setAmount("");
    };

    return (
        <form onSubmit={onFormSubmit}>
            <StyledFieldset>
                <Clock />
                <StyledHeader>Currency calculator</StyledHeader>
                {ratesData.state === "loading" && (<Info textInfo={"Loadnig current exchange rates from European Central Bank."} loading={<Loading />} />)}
                {ratesData.state === "error" && (<Info textInfo={`Sorry, something went wrong. Check you Internet connection. If it's ok, the error in on our side.`} additionalInfo={`You may refresh the page or try again later.`} error failed={<Failed />} />)}
                {ratesData.state === "success" && (
                    <>
                        <StyledAnnotatnion>*Fields required</StyledAnnotatnion>
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
                        <StyledAnnotatnion date >
                            Exchange rates valid as of:<br />
                            <strong>
                                {ratesData.date}
                            </strong>
                        </StyledAnnotatnion>
                    </>)}
                <Footer name="Patryk Krawczyk" year="2021" />
            </StyledFieldset>
        </form>
    );
};

export default Form;