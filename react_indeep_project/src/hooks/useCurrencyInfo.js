import React, { useEffect, useState } from "react";

const useCurrencyInfo = (currency) => {
  const [data, setData] = useState(null);

  async function callApi() {
    const result = await fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    );
    const data = await result.json();
    setData(data[currency]);
  }
  useEffect(() => {
    callApi();
  }, [currency]);

  return data;
};

export default useCurrencyInfo;
