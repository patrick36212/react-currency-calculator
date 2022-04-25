import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {

  const [ownedCurrency, setOwnedCurrency] = useState("EUR");
  const [ratesData, setRatesData] = useState({
    state: "loading",
  })

  useEffect(() => {
    const getRates = async () => {
      try {

        const response = await axios.get(`https://api.exchangerate.host/latest?base=${ownedCurrency}&${new Date().getTime()}`);

        const { rates, date } = await response.data;

        setRatesData({
          state: "success",
          rates,
          date
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(getRates, 100);
  }, [ownedCurrency]);

  return {
    ratesData,
    ownedCurrency,
    setOwnedCurrency,
  };
};
