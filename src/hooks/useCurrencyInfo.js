import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => setData(res[currency])) // ✅ Correctly extracting data
      .catch(() => setData({})); // ✅ Handle errors gracefully
  }, [currency]);

  return data || {}; // ✅ Always return a valid object
}

export default useCurrencyInfo;
