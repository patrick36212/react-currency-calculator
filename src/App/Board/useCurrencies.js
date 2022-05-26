import axios from "axios";
import { useEffect, useState } from "react";

export const useCurrenciesData = () => {

  const dateFormat = () => {
    const date = new Date();

    const startTime = `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + (date.getDate()-2)).slice(-2)}`;
    const endTime = `${date.getFullYear()}-${("0" + (date.getMonth()+1)).slice(-2)}-${("0" + (date.getDate())).slice(-2)}`;
    
    return {
        endTime,
        startTime
    };
};

const {
  startTime,
  endTime,
} = dateFormat()

  const [baseCurrency, setBasecurrency] = useState("EUR")
  const [currenciesData, setCurrenciesData] = useState({
    state: "loading",
  })

  useEffect(() => {
    const getCurrencies = async () => {
      try {

        const response = await axios.get(`https://api.exchangerate.host/timeseries?base=${baseCurrency}&start_date=${startTime}&end_date=${endTime}`);

        const { rates } = await response.data;


        setCurrenciesData({
          state: "success",
          rates,
        });
      } catch {
        setCurrenciesData({
          state: "error",
        });
      }
    };
    setTimeout(getCurrencies, 100);
  }, [baseCurrency]);

  return {
    startTime,
    endTime,
    baseCurrency,
    currenciesData,
    setCurrenciesData,
    setBasecurrency,
  };
};
