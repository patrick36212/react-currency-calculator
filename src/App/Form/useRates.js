import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {

  caches.keys();

  const [ratesData, setRatesData] = useState({
    state: "loading",
  })

  useEffect(() => {
    const getRates = async () => {
      try {

        const response = await axios.get(`https://api.exchangerate.host/latest=${new Date().getTime()}`);

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
    setTimeout(getRates, 2_000);
  }, []);

  return ratesData;
};
